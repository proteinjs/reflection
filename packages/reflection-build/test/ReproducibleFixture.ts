import * as crypto from 'crypto';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { execFileSync } from 'child_process';
import { build } from '../src/build';

/**
 * Disposable copies of the `examples/reproducible` package, each at its own absolute location,
 * built the way the `reflection-build` bin builds a package (the package dir arrives as
 * INIT_CWD), compiled with tsc and packed with `npm pack` — so a test can compare what two
 * builds of the same sources ship.
 */
export class ReproducibleFixture {
  static readonly PACKAGE_NAME = '@proteinjs/reflection-build-test-reproducible';
  private static readonly SOURCES = path.join(__dirname, 'examples', 'reproducible');
  private static readonly NODE_MODULES = path.join(__dirname, '..', 'node_modules');
  private readonly tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'refl-reproducible-'));
  private readonly links: string[] = [];

  /** Copies the fixture package to `<tmp>/<location>` and returns its absolute path. */
  materialize(location: string): string {
    const packageDir = path.join(this.tmpRoot, location);
    fs.mkdirSync(path.dirname(packageDir), { recursive: true });
    this.copyTree(ReproducibleFixture.SOURCES, packageDir);
    fs.writeFileSync(path.join(packageDir, 'package.json'), JSON.stringify(this.packageJson(), null, 2));
    fs.writeFileSync(path.join(packageDir, 'tsconfig.json'), JSON.stringify(this.tsconfig(), null, 2));
    const link = path.join(packageDir, 'node_modules');
    fs.symlinkSync(ReproducibleFixture.NODE_MODULES, link, 'dir');
    this.links.push(link);
    return packageDir;
  }

  /** Runs reflection-build in `packageDir`; returns the generated index it wrote. */
  async generate(packageDir: string): Promise<string> {
    const initCwd = process.env.INIT_CWD;
    process.env.INIT_CWD = packageDir;
    try {
      await build();
    } finally {
      if (initCwd === undefined) {
        delete process.env.INIT_CWD;
      } else {
        process.env.INIT_CWD = initCwd;
      }
    }
    return fs.readFileSync(path.join(packageDir, 'generated', 'index.ts'), 'utf-8');
  }

  /** tsc over the package (its tsconfig includes the generated index). */
  compile(packageDir: string): void {
    execFileSync(process.execPath, [require.resolve('typescript/bin/tsc'), '-p', packageDir], { stdio: 'pipe' });
  }

  /** `npm pack` of the package; returns the tarball's sha256. */
  packSha256(packageDir: string): string {
    const destination = fs.mkdtempSync(path.join(this.tmpRoot, 'pack-'));
    execFileSync('npm', ['pack', '--pack-destination', destination], { cwd: packageDir, stdio: 'pipe' });
    const [tarball] = fs.readdirSync(destination);
    return this.sha256(fs.readFileSync(path.join(destination, tarball)));
  }

  sha256(bytes: Buffer | string): string {
    return crypto.createHash('sha256').update(bytes).digest('hex');
  }

  /** The source graph a generated index embeds, read the way the runtime reads it. */
  graphOf(generatedIndex: string): { nodes: { v: string; value?: any }[]; edges: { v: string; w: string }[] } {
    const literal = generatedIndex.match(/const sourceGraph = (".*");/);
    if (!literal) {
      throw new Error('no serialized sourceGraph in the generated index');
    }
    return JSON.parse(JSON.parse(literal[1]).replace(/\\'/g, "'"));
  }

  /** Removes the copies; each linked node_modules is unlinked first, never descended into. */
  dispose(): void {
    for (const link of this.links) {
      fs.unlinkSync(link);
    }
    execFileSync('rm', ['-rf', this.tmpRoot]);
  }

  private packageJson(): object {
    return {
      name: ReproducibleFixture.PACKAGE_NAME,
      version: '0.0.1',
      private: true,
      main: './dist/generated/index.js',
      types: './dist/generated/index.d.ts',
      files: ['dist/**'],
      dependencies: { '@proteinjs/reflection': '^1.2.1' },
    };
  }

  private tsconfig(): object {
    return {
      compilerOptions: {
        noEmitOnError: true,
        target: 'es5',
        module: 'commonjs',
        declaration: true,
        sourceMap: true,
        outDir: './dist/',
        strict: true,
        esModuleInterop: true,
        skipLibCheck: true,
        types: [],
      },
      include: ['./index.ts', './generated/index.ts'],
    };
  }

  private copyTree(from: string, to: string): void {
    fs.mkdirSync(to, { recursive: true });
    for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
      const source = path.join(from, entry.name);
      const target = path.join(to, entry.name);
      if (entry.isDirectory()) {
        this.copyTree(source, target);
      } else {
        fs.copyFileSync(source, target);
      }
    }
  }
}
