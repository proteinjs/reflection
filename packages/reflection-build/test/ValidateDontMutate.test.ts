import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { build } from '../src/build';

/**
 * Validate-don't-mutate (task #104 §3.3): the build computes the package-config contract and
 * VALIDATES it instead of silently rewriting files.
 *
 * The founder's UX bar:
 * - ABSENCE is not a mismatch — a fresh package missing main/types gets them SET (today's
 *   behavior kept; the copy-a-package workflow survives).
 * - The build errors ONLY on conflicting existing values, and the error is friendly: plain
 *   words, why it matters, the exact lines to paste, `--fix` offered first.
 * - `reflection-build --fix` writes the contract; a second run is a no-op.
 *
 * Red-before-green: against pre-change code the conflict tests fail because the mutating
 * build succeeds and silently rewrites package.json.
 */
describe("validate-don't-mutate", () => {
  let pkgDir: string;
  const savedEnv: { [key: string]: string | undefined } = {};

  const writeFixture = (packageJson: any) => {
    pkgDir = fs.mkdtempSync(path.join(os.tmpdir(), 'refl-validate-'));
    fs.writeFileSync(path.join(pkgDir, 'package.json'), JSON.stringify(packageJson, null, 2));
    fs.mkdirSync(path.join(pkgDir, 'src'));
    fs.writeFileSync(path.join(pkgDir, 'src', 'index.ts'), `export * from './Example';\n`);
    fs.writeFileSync(path.join(pkgDir, 'src', 'Example.ts'), `export class Example {}\n`);
    process.env.INIT_CWD = pkgDir;
  };

  const readPackageJson = () => JSON.parse(fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf-8'));

  beforeEach(() => {
    for (const key of ['INIT_CWD', 'REFLECTION_SOURCE_DIRS', 'REFLECTION_EXPORT_FROM', 'REFLECTION_DIST_DIR']) {
      savedEnv[key] = process.env[key];
      delete process.env[key];
    }
  });

  afterEach(() => {
    for (const key of Object.keys(savedEnv)) {
      if (typeof savedEnv[key] === 'undefined') {
        delete process.env[key];
      } else {
        process.env[key] = savedEnv[key];
      }
    }
    fs.rmdirSync(pkgDir, { recursive: true });
  });

  it('fails the build on a conflicting main and leaves package.json untouched', async () => {
    writeFixture({ name: '@test/validate-fixture', version: '1.0.0', main: './dist/custom-entry.js' });
    // The conflicting value points at a REAL file — a deliberate setting, not boilerplate.
    fs.mkdirSync(path.join(pkgDir, 'dist'));
    fs.writeFileSync(path.join(pkgDir, 'dist', 'custom-entry.js'), 'module.exports = {};\n');
    const before = fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf-8');

    await expect(build()).rejects.toThrow(/--fix/);
    expect(fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf-8')).toBe(before);
  });

  it('the conflict error is friendly: offers --fix first, then the exact lines to paste', async () => {
    writeFixture({ name: '@test/validate-fixture', version: '1.0.0', main: './dist/custom-entry.js' });
    fs.mkdirSync(path.join(pkgDir, 'dist'));
    fs.writeFileSync(path.join(pkgDir, 'dist', 'custom-entry.js'), 'module.exports = {};\n');

    let message = '';
    try {
      await build();
    } catch (error: any) {
      message = error.message;
    }
    expect(message).toContain('reflection-build --fix');
    expect(message).toContain('"main": "./dist/generated/index.js"');
    expect(message).toContain('"types": "./dist/generated/index.d.ts"');
    // --fix is the first remedy offered, before the paste-able lines.
    expect(message.indexOf('--fix')).toBeGreaterThan(-1);
    expect(message.indexOf('--fix')).toBeLessThan(message.indexOf('"main": "./dist/generated/index.js"'));
    // Plain words about why it matters, not just a diff.
    expect(message.toLowerCase()).toContain('consumer');
  });

  it('sets absent main/types silently — the fresh/copied-package workflow survives', async () => {
    writeFixture({ name: '@test/validate-fixture', version: '1.0.0' });
    await build();
    const packageJson = readPackageJson();
    expect(packageJson.main).toBe('./dist/generated/index.js');
    expect(packageJson.types).toBe('./dist/generated/index.d.ts');
  });

  it('treats npm-init boilerplate (main pointing at a file that does not exist) as absence', async () => {
    writeFixture({ name: '@test/validate-fixture', version: '1.0.0', main: 'index.js' });
    await build();
    expect(readPackageJson().main).toBe('./dist/generated/index.js');
  });

  it('accepts a package already on contract without touching it', async () => {
    writeFixture({
      name: '@test/validate-fixture',
      version: '1.0.0',
      main: './dist/generated/index.js',
      types: './dist/generated/index.d.ts',
    });
    await build();
    const first = fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf-8');
    await build();
    expect(fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf-8')).toBe(first);
  });

  it('--fix rewrites conflicting values to the contract; a second run is a no-op', async () => {
    writeFixture({ name: '@test/validate-fixture', version: '1.0.0', main: './dist/custom-entry.js' });
    fs.mkdirSync(path.join(pkgDir, 'dist'));
    fs.writeFileSync(path.join(pkgDir, 'dist', 'custom-entry.js'), 'module.exports = {};\n');

    await build({ fix: true });
    const packageJson = readPackageJson();
    expect(packageJson.main).toBe('./dist/generated/index.js');
    expect(packageJson.types).toBe('./dist/generated/index.d.ts');

    const afterFix = fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf-8');
    await build();
    expect(fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf-8')).toBe(afterFix);
  });
});
