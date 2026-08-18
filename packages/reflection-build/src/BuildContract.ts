import * as fs from 'fs';
import * as path from 'path';
const tsconfigTemplate = require('./tsconfigTemplate.json');

export interface BuildContractOptions {
  /** Root of the package being built (contains package.json) */
  packageDir: string;
  /** First REFLECTION_SOURCE_DIRS entry; 'src' for prod builds */
  primaryRoot: string;
  /** REFLECTION_DIST_DIR or 'dist' */
  distDirRel: string;
  /** Absolute path to the generated index .ts this invocation emits */
  generatedIndexPath: string;
  /** Write conflicting values to the contract instead of failing the build */
  fix: boolean;
}

interface PendingWrite {
  filePath: string;
  content: string;
}

interface Conflict {
  file: string;
  found: string;
  expected: string;
  whyItMatters: string;
  pasteBlock: string;
}

/**
 * The package-config contract of a reflection build (task #104 §3.3, validate-don't-mutate).
 *
 * A build's artifact is only usable if the package's config points at it, so reflection-build
 * owns that config as a contract instead of silently rewriting files on every build:
 *
 * - ABSENT config is completed in place (a fresh or copied package gets main/types, subpath
 *   mappings, stubs — the zero-ceremony workflow survives).
 * - EXISTING config that conflicts with the contract fails the build with a friendly error
 *   (plain words, why it matters, the exact lines to paste, `--fix` offered first) and leaves
 *   every file untouched.
 * - `reflection-build --fix` writes the contract over conflicting values; it is idempotent.
 *
 * Prod builds (primary root 'src') own main/types + the tsconfig include. Subpath builds
 * (primary root e.g. 'test') own the complete subpath contract — root <root>.js/<root>.d.ts
 * stubs, exports/typesVersions mappings, files[] entries, tsconfig excludes (the d51556f0
 * class, generalized): consumers must resolve the subpath to built dist in every install
 * shape and resolution mode, never to sources.
 */
export class BuildContract {
  constructor(private readonly options: BuildContractOptions) {}

  async apply(): Promise<void> {
    // Two-phase: collect every pending write first, then flush only if conflict-free (or
    // fixing). A conflicting build must leave EVERY file untouched — including files whose
    // own changes were mere absence-completions.
    const conflicts: Conflict[] = [];
    const writes: PendingWrite[] = [];
    this.applyPackageJson(conflicts, writes);
    this.applyStubs(conflicts, writes);
    this.applyTsconfig(writes);
    if (conflicts.length > 0) {
      throw new Error(this.formatConflicts(conflicts));
    }

    for (const write of writes) {
      fs.writeFileSync(write.filePath, write.content);
    }
  }

  private applyPackageJson(conflicts: Conflict[], writes: PendingWrite[]): void {
    const packageJsonPath = path.join(this.options.packageDir, 'package.json');
    if (!fs.existsSync(packageJsonPath)) {
      throw new Error(`package.json does not exist, run \`npm init -y\` to create one`);
    }

    const original = fs.readFileSync(packageJsonPath, 'utf-8');
    const packageJson = JSON.parse(original);

    if (this.isProd()) {
      this.settleEntryPoints(packageJson, conflicts);
    } else {
      this.settleSubpathExports(packageJson, conflicts);
      this.settleTypesVersions(packageJson, conflicts);
      this.settleFilesAllowlist(packageJson);
    }

    const updated = JSON.stringify(packageJson, null, 2);
    if (updated !== JSON.stringify(JSON.parse(original), null, 2)) {
      writes.push({ filePath: packageJsonPath, content: updated });
    }
  }

  /** Prod builds: main/types point at the built reflection artifact. */
  private settleEntryPoints(packageJson: any, conflicts: Conflict[]): void {
    const pasteBlock = [`  "main": "${this.prodIndexJs()}",`, `  "types": "${this.prodIndexDts()}"`].join('\n');
    const whyItMatters =
      'Every consumer loads this package through main/types; pointing them anywhere but the ' +
      'built reflection artifact ships a package that loads the wrong code.';
    this.settleString(packageJson, 'main', this.prodIndexJs(), conflicts, whyItMatters, pasteBlock);
    this.settleString(packageJson, 'types', this.prodIndexDts(), conflicts, whyItMatters, pasteBlock);
  }

  /** Subpath builds: exports map "." and "./<root>" to the built artifacts. */
  private settleSubpathExports(packageJson: any, conflicts: Conflict[]): void {
    const root = this.options.primaryRoot;
    const expectedExports: { [subpath: string]: { types: string; default: string } } = {
      '.': { types: this.prodIndexDts(), default: this.prodIndexJs() },
      [`./${root}`]: { types: this.subpathIndexDts(), default: this.subpathIndexJs() },
    };
    const whyItMatters =
      `Consumers import '<package>/${root}' through these mappings; a wrong mapping resolves ` +
      'to the wrong files (or to sources), breaking consumer builds.';

    if (packageJson.exports == null) {
      packageJson.exports = expectedExports;
      return;
    }

    for (const subpath of Object.keys(expectedExports)) {
      const expected = expectedExports[subpath];
      const current = packageJson.exports[subpath];
      if (current == null) {
        packageJson.exports[subpath] = expected;
      } else if (JSON.stringify(current) !== JSON.stringify(expected)) {
        if (this.options.fix) {
          packageJson.exports[subpath] = expected;
        } else {
          conflicts.push({
            file: 'package.json',
            found: `"exports" maps "${subpath}" to ${JSON.stringify(current)}`,
            expected: JSON.stringify(expected),
            whyItMatters,
            pasteBlock: `  "exports": ${JSON.stringify(expectedExports, null, 2).replace(/\n/g, '\n  ')}`,
          });
        }
      }
    }
  }

  /** Subpath builds: typesVersions carries the subpath's types for node10 resolution. */
  private settleTypesVersions(packageJson: any, conflicts: Conflict[]): void {
    const root = this.options.primaryRoot;
    // No leading './' by typesVersions convention.
    const expected = [this.subpathIndexDts().replace(/^\.\//, '')];
    const expectedBlock: any = { '*': { [root]: expected } };

    if (packageJson.typesVersions == null) {
      packageJson.typesVersions = expectedBlock;
      return;
    }

    if (packageJson.typesVersions['*'] == null) {
      packageJson.typesVersions['*'] = expectedBlock['*'];
      return;
    }

    const current = packageJson.typesVersions['*'][root];
    if (current == null) {
      packageJson.typesVersions['*'][root] = expected;
    } else if (JSON.stringify(current) !== JSON.stringify(expected)) {
      if (this.options.fix) {
        packageJson.typesVersions['*'][root] = expected;
      } else {
        conflicts.push({
          file: 'package.json',
          found: `"typesVersions" maps "${root}" to ${JSON.stringify(current)}`,
          expected: JSON.stringify(expected),
          whyItMatters:
            `Editors and node10-resolution consumers find '<package>/${root}' types through this ` +
            'mapping; a wrong mapping breaks type resolution for every consumer.',
          pasteBlock: `  "typesVersions": ${JSON.stringify(expectedBlock, null, 2).replace(/\n/g, '\n  ')}`,
        });
      }
    }
  }

  /** Subpath builds: an existing files allowlist must keep shipping the root stubs. */
  private settleFilesAllowlist(packageJson: any): void {
    if (!Array.isArray(packageJson.files)) {
      // No allowlist means npm publishes the stubs already; adding one would change what
      // gets published, which is not this contract's call.
      return;
    }

    for (const stub of [this.stubJsName(), this.stubDtsName()]) {
      if (!packageJson.files.includes(stub)) {
        packageJson.files.push(stub);
      }
    }
  }

  /**
   * Subpath builds: root stubs that win the node10/paths-mapped file lookup, so every install
   * shape resolves the subpath to built dist — never to sources (the TS6059/ts-jest class).
   */
  private applyStubs(conflicts: Conflict[], writes: PendingWrite[]): void {
    if (this.isProd()) {
      return;
    }

    const root = this.options.primaryRoot;
    const targetNoExt = `./${this.options.distDirRel}/generated/${root}/index`;
    const whyItMatters =
      `Consumers compiled with node10/classic resolution (or a tsconfig paths mapping) resolve ` +
      `'<package>/${root}' as a file path, bypassing the exports map; without a root stub that ` +
      'lands on sources in workspace-symlinked installs (TS6059 breaks the consumer build).';

    const stubJs = {
      file: this.stubJsName(),
      content:
        `// Node10/classic-resolution stub for the \`./${root}\` subpath, owned by reflection-build.\n` +
        `// Consumers that bypass the exports map (node10 resolution, tsconfig paths mappings) resolve\n` +
        `// this file path first, so every install shape loads the built dist — never sources.\n` +
        `module.exports = require('${targetNoExt}.js');\n`,
    };
    const stubDts = {
      file: this.stubDtsName(),
      content:
        `// Types counterpart of ${this.stubJsName()} — see that file for why this stub exists.\n` +
        `export * from '${targetNoExt}';\n`,
    };

    for (const stub of [stubJs, stubDts]) {
      const stubPath = path.join(this.options.packageDir, stub.file);
      if (!fs.existsSync(stubPath)) {
        writes.push({ filePath: stubPath, content: stub.content });
        continue;
      }

      const current = fs.readFileSync(stubPath, 'utf-8');
      if (current.includes(targetNoExt)) {
        continue;
      }

      if (this.options.fix) {
        writes.push({ filePath: stubPath, content: stub.content });
      } else {
        conflicts.push({
          file: stub.file,
          found: `${stub.file} exists but does not point at ${targetNoExt}`,
          expected: targetNoExt,
          whyItMatters,
          pasteBlock: stub.content.replace(/^/gm, '  ').trimRight(),
        });
      }
    }
  }

  /**
   * tsconfig: include the generated index; on subpath builds, exclude the root stubs from
   * compilation. List membership only — nothing here can conflict.
   */
  private applyTsconfig(writes: PendingWrite[]): void {
    const tsconfigPath = path.join(this.options.packageDir, 'tsconfig.json');
    const includePath = `./${path.relative(this.options.packageDir, this.options.generatedIndexPath)}`;

    if (!fs.existsSync(tsconfigPath)) {
      const tsconfig = Object.assign({}, tsconfigTemplate);
      tsconfig.include = [includePath];
      if (!this.isProd()) {
        // Fresh exclude must carry node_modules: an explicit exclude replaces the default one.
        tsconfig.exclude = ['node_modules', this.stubJsName(), this.stubDtsName()];
      }
      writes.push({ filePath: tsconfigPath, content: JSON.stringify(tsconfig, null, 4) });
      return;
    }

    const original = fs.readFileSync(tsconfigPath, 'utf-8');
    const tsconfig = JSON.parse(original);
    if (tsconfig.include && !tsconfig.include.includes(includePath)) {
      tsconfig.include.push(includePath);
    }

    if (!this.isProd()) {
      if (!Array.isArray(tsconfig.exclude)) {
        tsconfig.exclude = ['node_modules'];
      }
      for (const stub of [this.stubJsName(), this.stubDtsName()]) {
        if (!tsconfig.exclude.includes(stub)) {
          tsconfig.exclude.push(stub);
        }
      }
    }

    const updated = JSON.stringify(tsconfig, null, 4);
    if (updated !== JSON.stringify(JSON.parse(original), null, 4)) {
      writes.push({ filePath: tsconfigPath, content: updated });
    }
  }

  /**
   * Settle one string field: absent → set; equal → ok; a dangling value (points at a file
   * that does not exist — npm init's boilerplate `"main": "index.js"`, a stale copy) → set;
   * a value that points at a real, different file is a deliberate setting → conflict.
   */
  private settleString(
    packageJson: any,
    field: string,
    expected: string,
    conflicts: Conflict[],
    whyItMatters: string,
    pasteBlock: string
  ): void {
    const current = packageJson[field];
    if (current === expected) {
      return;
    }

    if (typeof current === 'string' && fs.existsSync(path.join(this.options.packageDir, current))) {
      if (this.options.fix) {
        packageJson[field] = expected;
      } else {
        conflicts.push({
          file: 'package.json',
          found: `"${field}" is "${current}"`,
          expected,
          whyItMatters,
          pasteBlock,
        });
      }
      return;
    }

    packageJson[field] = expected;
  }

  private formatConflicts(conflicts: Conflict[]): string {
    const lines: string[] = [];
    lines.push(`reflection-build: this package's config conflicts with what the build produces.`);
    lines.push(`Nothing was changed on disk.`);
    lines.push('');
    for (const conflict of conflicts) {
      lines.push(`- ${conflict.file}: ${conflict.found}`);
      lines.push(`  the build's artifact is ${conflict.expected}`);
      lines.push(`  Why it matters: ${conflict.whyItMatters}`);
    }
    lines.push('');
    lines.push(`The quickest fix — rewrite just these fields to match the build:`);
    lines.push('');
    lines.push(`  npx reflection-build --fix`);
    lines.push('');
    lines.push(`Or paste the expected values in yourself:`);
    lines.push('');
    const seen: { [block: string]: boolean } = {};
    for (const conflict of conflicts) {
      if (seen[conflict.pasteBlock]) {
        continue;
      }
      seen[conflict.pasteBlock] = true;
      lines.push(conflict.pasteBlock);
      lines.push('');
    }
    return lines.join('\n');
  }

  private isProd(): boolean {
    return this.options.primaryRoot === 'src';
  }

  private prodIndexJs(): string {
    return `./${path.join(this.options.distDirRel, 'generated', 'index.js')}`;
  }

  private prodIndexDts(): string {
    return `./${path.join(this.options.distDirRel, 'generated', 'index.d.ts')}`;
  }

  private subpathIndexJs(): string {
    return `./${path.join(this.options.distDirRel, 'generated', this.options.primaryRoot, 'index.js')}`;
  }

  private subpathIndexDts(): string {
    return `./${path.join(this.options.distDirRel, 'generated', this.options.primaryRoot, 'index.d.ts')}`;
  }

  private stubJsName(): string {
    return `${this.options.primaryRoot}.js`;
  }

  private stubDtsName(): string {
    return `${this.options.primaryRoot}.d.ts`;
  }
}
