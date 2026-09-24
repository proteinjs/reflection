import * as path from 'path';
import { PackageSourceFiles } from '../src/parser/PackageSourceFiles';

/**
 * The two machine-specific inputs `PackageSourceFiles` closes where they enter the generated
 * index: the platform's path separator and the machine's collation. The Windows half cannot run
 * on the machine that runs this suite, so the class is loaded once more against `path.win32` in
 * an isolated module registry — the same code, Windows paths in.
 */
describe('PackageSourceFiles', () => {
  test('relativePath writes / separators and no leading ./ from Windows paths', () => {
    jest.isolateModules(() => {
      jest.doMock('path', () => path.win32);
      const { PackageSourceFiles: OnWindows } = require('../src/parser/PackageSourceFiles');
      expect(OnWindows.relativePath('C:\\work\\pkg', 'C:\\work\\pkg\\src\\beta\\deep\\Gamma.ts')).toBe(
        'src/beta/deep/Gamma.ts'
      );
      expect(OnWindows.relativePath('C:\\work\\pkg\\generated', 'C:\\work\\pkg\\src\\alpha\\Alpha.ts')).toBe(
        '../src/alpha/Alpha.ts'
      );
      expect(OnWindows.relativePath('C:\\work\\pkg\\generated', 'C:\\work\\pkg')).toBe('..');
    });
  });

  test('relativePath writes the same form from POSIX paths', () => {
    expect(PackageSourceFiles.relativePath('/work/pkg', '/work/pkg/src/beta/deep/Gamma.ts')).toBe(
      'src/beta/deep/Gamma.ts'
    );
    expect(PackageSourceFiles.relativePath('/work/pkg/generated', '/work/pkg/src/alpha/Alpha.ts')).toBe(
      '../src/alpha/Alpha.ts'
    );
  });

  test('compare orders by code unit, so upper case sorts before lower case on every machine', () => {
    // 'Z' is 0x5a, 'd' is 0x64: code-unit order puts ZetaPlugin first; a locale collation would not.
    expect(PackageSourceFiles.compare('src/zeta/ZetaPlugin.ts', 'src/zeta/defaults.ts')).toBeLessThan(0);
    expect(PackageSourceFiles.compare('src/zeta/defaults.ts', 'src/zeta/ZetaPlugin.ts')).toBeGreaterThan(0);
    expect(PackageSourceFiles.compare('src/a.ts', 'src/a.ts')).toBe(0);
    // A shorter path sorts before its extension: 'SourceRecord.ts' before 'SourceRecordLoader.ts' ('.' is 0x2e, 'L' is 0x4c).
    expect(PackageSourceFiles.compare('src/SourceRecord.ts', 'src/SourceRecordLoader.ts')).toBeLessThan(0);
  });
});
