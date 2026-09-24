import * as path from 'path';
import globby from 'globby';

/**
 * The TypeScript sources of a package, in one reproducible order.
 *
 * Every build of the same sources must write the same bytes, whatever machine or directory it
 * runs in. Two machine-specific inputs are closed here, where they enter:
 *
 * - ORDER. The glob returns files in the order its concurrent directory reads complete, which
 *   varies with the filesystem and from run to run. The parse order decides the graph's
 *   insertion order, which declaration a name exported by two files holds (the last one parsed;
 *   the build refuses such a name when it survives the prune — `SharedQualifiedNames`), and the
 *   order that refusal lists the files in. `list()` therefore orders the files by their
 *   package-relative path, compared by code unit — never by `localeCompare`, whose collation
 *   depends on the machine's locale data.
 * - LOCATION. `relativePath()` is the only form a source path takes in a generated artifact:
 *   relative, with `/` separators on every platform, no leading `./`.
 */
export class PackageSourceFiles {
  constructor(
    private readonly packageDir: string,
    private readonly sourceRootsRel: string[],
    private readonly excludedDirs: string[] = []
  ) {}

  /** Absolute paths of the package's `.ts`/`.tsx` sources under the source roots, in package-relative path order. */
  async list(): Promise<string[]> {
    const sourceFilePaths: string[] = await globby([...this.includePatterns(), ...this.excludePatterns()]);
    return Array.from(new Set(sourceFilePaths))
      .map((absolutePath) => ({
        absolutePath,
        relativePath: PackageSourceFiles.relativePath(this.packageDir, absolutePath),
      }))
      .sort((a, b) => PackageSourceFiles.compare(a.relativePath, b.relativePath))
      .map(({ absolutePath }) => absolutePath);
  }

  /** `filePath` relative to `fromDir`, with `/` separators on every platform and no leading `./`. */
  static relativePath(fromDir: string, filePath: string): string {
    return path.relative(fromDir, filePath).split(path.sep).join('/');
  }

  /** Code-unit order: the same on every machine, unlike `localeCompare`. */
  static compare(a: string, b: string): number {
    if (a < b) {
      return -1;
    }

    return a > b ? 1 : 0;
  }

  private includePatterns(): string[] {
    const patterns: string[] = [];
    for (const rel of this.sourceRootsRel) {
      const root = path.join(this.packageDir, rel);
      patterns.push(path.join(root, '**/*.ts'));
      patterns.push(path.join(root, '**/*.tsx'));
    }
    return patterns;
  }

  private excludePatterns(): string[] {
    return ['!**/node_modules/**', '!**/generated/**', ...this.excludedDirs.map((dir) => `!${dir}`)];
  }
}
