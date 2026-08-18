import * as path from 'path';
import { writeGeneratedIndex } from './codegen/writeGeneratedIndex';
import { BuildContract } from './BuildContract';

export interface BuildOptions {
  /** Write conflicting package config to the contract instead of failing (reflection-build --fix) */
  fix?: boolean;
}

export async function build(options: BuildOptions = {}) {
  const targetDir = process.env.INIT_CWD as string;

  // Env is ONLY read here.
  // Allow multiple comma-separated roots, e.g. "test,src" or "integration,examples,src".
  // The first root is considered the "primary" tree for this invocation.
  const sourceRootsRaw = (process.env.REFLECTION_SOURCE_DIRS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  // If not provided, default to ['src'] for prod builds.
  const sourceRoots = sourceRootsRaw.length > 0 ? sourceRootsRaw : ['src'];
  const primaryRoot = sourceRoots[0];

  // Optional: explicit public entry to re-export from (relative to package root)
  // e.g. REFLECTION_EXPORT_FROM=test/index.ts
  const publicEntryRelOverride = process.env.REFLECTION_EXPORT_FROM;

  const distDirRel = process.env.REFLECTION_DIST_DIR || 'dist';

  // Where to emit the generated index:
  // - primary === 'src':   ./generated/index.ts
  // - otherwise:           ./generated/<primary>/index.ts
  const targetDirGenerated =
    primaryRoot && primaryRoot !== 'src'
      ? path.join(targetDir, 'generated', primaryRoot)
      : path.join(targetDir, 'generated');

  const generatedIndex = path.join(targetDirGenerated, 'index.ts');

  // Validate-don't-mutate: the package-config contract (main/types, subpath exports +
  // typesVersions + root stubs, tsconfig include/excludes) is validated before any parse
  // work — absent config is completed, conflicting config fails the build friendly.
  const contract = new BuildContract({
    packageDir: targetDir,
    primaryRoot,
    distDirRel,
    generatedIndexPath: generatedIndex,
    fix: !!options.fix,
  });
  await contract.apply();

  await writeGeneratedIndex(targetDir, targetDirGenerated, generatedIndex, sourceRoots, publicEntryRelOverride);
}
