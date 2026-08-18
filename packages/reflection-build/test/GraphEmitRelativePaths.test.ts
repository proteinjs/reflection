import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { execSync } from 'child_process';
import { writeGeneratedIndex } from '../src/codegen/writeGeneratedIndex';

/**
 * The emitted source graph must carry package-relative filePaths (task #104 §3.4 carve-out).
 * Absolute paths from the build machine leak into every consumer bundle (CI runner paths in
 * registry packages, local checkout paths in dev bundles) — a path disclosure with zero
 * runtime value: nothing reads filePath at runtime; it is consumed only at build time to
 * emit sourceLink imports, before serialization.
 *
 * Red-before-green: against pre-fix codegen the emitted graph embeds absolute paths and the
 * assertions below fail.
 */
describe('graph emit: package-relative filePaths', () => {
  const fixtureA = path.join(__dirname, 'examples', 'source-repository', 'a');
  // A tmp copy of fixture a (sources only), emitted into its own ./generated — the real build
  // layout, so path assertions cover exactly what a real build writes.
  let pkgDir: string;
  let tmpRoot: string;
  let emitted: string;
  let graph: any;

  beforeAll(async () => {
    tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'refl-relpaths-'));
    pkgDir = path.join(tmpRoot, 'a');
    fs.mkdirSync(pkgDir);
    for (const entry of ['package.json', 'index.ts', 'src']) {
      execSync(`cp -R ${path.join(fixtureA, entry)} ${path.join(pkgDir, entry)}`);
    }
    const outDir = path.join(pkgDir, 'generated');
    fs.mkdirSync(outDir);
    const generatedIndexPath = path.join(outDir, 'index.ts');
    await writeGeneratedIndex(pkgDir, outDir, generatedIndexPath, ['src']);
    emitted = fs.readFileSync(generatedIndexPath, 'utf-8');

    // Extract the emitted graph exactly as the runtime would read it: the JSON string literal
    // assigned to `const sourceGraph`, unescaped once (JSON.parse of the literal), then parsed.
    const literalMatch = emitted.match(/const sourceGraph = (".*");/);
    expect(literalMatch).toBeTruthy();
    const serialized = JSON.parse(literalMatch![1]).replace(/\\'/g, "'");
    graph = JSON.parse(serialized);
  });

  afterAll(() => {
    fs.rmdirSync(tmpRoot, { recursive: true });
  });

  it('emits no absolute filePath on any graph node', () => {
    const offenders: string[] = [];
    for (const node of graph.nodes) {
      const filePath = node.value?.filePath;
      if (typeof filePath === 'string' && path.isAbsolute(filePath)) {
        offenders.push(`${node.v}: ${filePath}`);
      }
    }
    expect(offenders).toEqual([]);
  });

  it('emits no build-machine path anywhere in the serialized graph string', () => {
    // The strongest form of the disclosure check: the package's own absolute location
    // (worktree checkout path here; /home/runner/... in CI) never appears in the artifact.
    expect(emitted).not.toContain(pkgDir);
    expect(emitted).not.toContain(fixtureA);
  });

  it('node filePaths are package-relative and resolve to real source files', () => {
    const checked: string[] = [];
    for (const node of graph.nodes) {
      const filePath = node.value?.filePath;
      if (typeof filePath !== 'string' || filePath === '') {
        continue;
      }
      expect(fs.existsSync(path.join(pkgDir, filePath))).toBe(true);
      checked.push(filePath);
    }
    // Fixture a declares sources under src/ — the graph must actually carry them.
    expect(checked.length).toBeGreaterThan(0);
    expect(checked.every((p) => p.startsWith('src' + path.sep) || p.startsWith('index.'))).toBe(true);
  });

  it('sourceLink imports still resolve to the linked source files (outcome: links survive)', () => {
    const importLines = emitted.match(/import \{ .+ \} from '.+';/g) || [];
    const linkImports = importLines.filter((line) => !line.includes('@proteinjs/reflection'));
    expect(linkImports.length).toBeGreaterThan(0);
    for (const line of linkImports) {
      const spec = line.match(/from '(.+)';/)![1];
      const resolved = path.resolve(path.join(pkgDir, 'generated'), spec);
      const exists = fs.existsSync(`${resolved}.ts`) || fs.existsSync(`${resolved}.tsx`);
      expect(`${spec}: ${exists}`).toBe(`${spec}: true`);
    }
  });
});
