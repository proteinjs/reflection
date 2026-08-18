import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { build } from '../src/build';

/**
 * The ./test subpath contract (task #104 §3.2, the d51556f0 class): the test subpath is a
 * reflection-build feature, so reflection-build owns the COMPLETE artifact contract for it —
 * root stubs, exports/typesVersions mappings, files[] entries, tsconfig excludes — instead of
 * every package hand-rolling the d51556f0 shims and drifting.
 *
 * Contract pieces, validated/emitted on every subpath build (primary root != 'src'):
 * - root <root>.js / <root>.d.ts stubs re-exporting dist/generated/<root>/index — win the
 *   node10/paths-mapped file lookup so consumers resolve built dist, never sources (TS6059)
 * - exports: "." and "./<root>" mapped to the built artifacts (node16/modern resolution)
 * - typesVersions: "<root>" mapped for node10 TYPES resolution
 * - files[]: stub entries added when a files allowlist exists (published tarballs keep them)
 * - tsconfig exclude: the stubs never become compiler inputs
 *
 * Red-before-green: against pre-change code nothing emits any of this — every assertion fails.
 */
describe('test-subpath contract', () => {
  let pkgDir: string;
  const savedEnv: { [key: string]: string | undefined } = {};

  const writeFixture = (packageJson: any) => {
    pkgDir = fs.mkdtempSync(path.join(os.tmpdir(), 'refl-subpath-'));
    fs.writeFileSync(path.join(pkgDir, 'package.json'), JSON.stringify(packageJson, null, 2));
    fs.mkdirSync(path.join(pkgDir, 'src'));
    fs.writeFileSync(path.join(pkgDir, 'src', 'index.ts'), `export * from './Example';\n`);
    fs.writeFileSync(path.join(pkgDir, 'src', 'Example.ts'), `export class Example {}\n`);
    fs.mkdirSync(path.join(pkgDir, 'test'));
    fs.writeFileSync(path.join(pkgDir, 'test', 'index.ts'), `export * from './TestHelper';\n`);
    fs.writeFileSync(path.join(pkgDir, 'test', 'TestHelper.ts'), `export class TestHelper {}\n`);
    process.env.INIT_CWD = pkgDir;
    process.env.REFLECTION_SOURCE_DIRS = 'test,src';
    process.env.REFLECTION_EXPORT_FROM = 'test/index.ts';
  };

  const readPackageJson = () => JSON.parse(fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf-8'));
  const readTsconfig = () => JSON.parse(fs.readFileSync(path.join(pkgDir, 'tsconfig.json'), 'utf-8'));

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

  it('emits root stubs that resolve the subpath to built dist in every install shape', async () => {
    writeFixture({ name: '@test/subpath-fixture', version: '1.0.0' });
    await build();

    const stubJs = fs.readFileSync(path.join(pkgDir, 'test.js'), 'utf-8');
    expect(stubJs).toContain(`require('./dist/generated/test/index.js')`);
    const stubDts = fs.readFileSync(path.join(pkgDir, 'test.d.ts'), 'utf-8');
    expect(stubDts).toContain(`export * from './dist/generated/test/index'`);
  });

  it('maps the subpath in exports and typesVersions', async () => {
    writeFixture({ name: '@test/subpath-fixture', version: '1.0.0' });
    await build();

    const packageJson = readPackageJson();
    expect(packageJson.exports['.']).toEqual({
      types: './dist/generated/index.d.ts',
      default: './dist/generated/index.js',
    });
    expect(packageJson.exports['./test']).toEqual({
      types: './dist/generated/test/index.d.ts',
      default: './dist/generated/test/index.js',
    });
    expect(packageJson.typesVersions['*']['test']).toEqual(['dist/generated/test/index.d.ts']);
  });

  it('keeps extra exports subpaths a package added on its own', async () => {
    writeFixture({
      name: '@test/subpath-fixture',
      version: '1.0.0',
      exports: { './extra': './dist/extra.js' },
    });
    await build();

    const packageJson = readPackageJson();
    expect(packageJson.exports['./extra']).toBe('./dist/extra.js');
    expect(packageJson.exports['./test']).toEqual({
      types: './dist/generated/test/index.d.ts',
      default: './dist/generated/test/index.js',
    });
  });

  it('adds stub entries to an existing files allowlist, and leaves absent files[] absent', async () => {
    writeFixture({ name: '@test/subpath-fixture', version: '1.0.0', files: ['dist/**'] });
    await build();
    expect(readPackageJson().files).toEqual(expect.arrayContaining(['dist/**', 'test.js', 'test.d.ts']));

    fs.rmdirSync(pkgDir, { recursive: true });
    writeFixture({ name: '@test/subpath-fixture', version: '1.0.0' });
    await build();
    expect(readPackageJson().files).toBeUndefined();
  });

  it('excludes the stubs from compilation in tsconfig without clobbering default excludes', async () => {
    writeFixture({ name: '@test/subpath-fixture', version: '1.0.0' });
    await build();

    const tsconfig = readTsconfig();
    expect(tsconfig.exclude).toEqual(expect.arrayContaining(['node_modules', 'test.js', 'test.d.ts']));
  });

  it('fails friendly on a conflicting subpath mapping and leaves package.json untouched', async () => {
    writeFixture({
      name: '@test/subpath-fixture',
      version: '1.0.0',
      exports: { './test': './dist/somewhere-else.js' },
    });
    fs.mkdirSync(path.join(pkgDir, 'dist'));
    fs.writeFileSync(path.join(pkgDir, 'dist', 'somewhere-else.js'), 'module.exports = {};\n');
    const before = fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf-8');

    await expect(build()).rejects.toThrow(/--fix/);
    expect(fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf-8')).toBe(before);
  });

  it('is idempotent: a second build changes nothing', async () => {
    writeFixture({ name: '@test/subpath-fixture', version: '1.0.0', files: ['dist/**'] });
    await build();
    const packageJsonAfterFirst = fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf-8');
    const stubAfterFirst = fs.readFileSync(path.join(pkgDir, 'test.js'), 'utf-8');
    const tsconfigAfterFirst = fs.readFileSync(path.join(pkgDir, 'tsconfig.json'), 'utf-8');

    await build();
    expect(fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf-8')).toBe(packageJsonAfterFirst);
    expect(fs.readFileSync(path.join(pkgDir, 'test.js'), 'utf-8')).toBe(stubAfterFirst);
    expect(fs.readFileSync(path.join(pkgDir, 'tsconfig.json'), 'utf-8')).toBe(tsconfigAfterFirst);
  });
});
