import * as path from 'path';
const tsconfig = require('./tsconfigTemplate.json');
import { promisifiedFs } from '@proteinjs/util-node';
import { writeGeneratedIndex } from './codegen/writeGeneratedIndex';

export async function build() {
  const targetDir = process.env.INIT_CWD as string;
  const targetDirTsconfig = path.join(targetDir, 'tsconfig.json');

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

  await updatePackageJson();
  await writeTsconfig();
  await writeGeneratedIndex(targetDir, targetDirGenerated, generatedIndex, sourceRoots, publicEntryRelOverride);

  // TODO save their index location in package.json and pass it in to writeGeneratedIndex above
  async function updatePackageJson() {
    const targetDirPackageJson = path.join(targetDir, 'package.json');
    if (!(await promisifiedFs.exists(targetDirPackageJson))) {
      throw new Error(`package.json does not exist, run \`npm init -y\` to create one`);
    }

    const targetPackageJson = require(targetDirPackageJson);
    const originalPackageJsonString = JSON.stringify(targetPackageJson, null, 2);

    // Only update main/types when primary root is 'src'. Prevents infinite toggle.
    const isProd = primaryRoot === 'src';
    if (isProd) {
      const targetDirDist = path.join(targetDir, distDirRel);

      // Rel path to /generated (may be './generated' or './generated/src' depending on primaryRoot)
      const relGenPath =
        primaryRoot && primaryRoot !== 'src'
          ? path.relative(targetDir, path.join(targetDir, 'generated', primaryRoot))
          : path.relative(targetDir, path.join(targetDir, 'generated'));

      const targetDirDistGenerated = path.join(targetDirDist, relGenPath);
      const generatedIndexJs = path.join(targetDirDistGenerated, 'index.js');
      const generatedIndexDts = path.join(targetDirDistGenerated, 'index.d.ts');

      targetPackageJson.main = `./${path.relative(targetDir, generatedIndexJs)}`;
      targetPackageJson.types = `./${path.relative(targetDir, generatedIndexDts)}`;
    }

    const updatedPackageJsonString = JSON.stringify(targetPackageJson, null, 2);
    if (originalPackageJsonString !== updatedPackageJsonString) {
      await promisifiedFs.writeFile(targetDirPackageJson, updatedPackageJsonString);
    }
  }

  async function writeTsconfig() {
    if (await promisifiedFs.exists(targetDirTsconfig)) {
      const existingTsconfig = require(targetDirTsconfig);
      const includePath = `./${path.relative(targetDir, generatedIndex)}`;
      if (existingTsconfig.include && !existingTsconfig.include.includes(includePath)) {
        existingTsconfig.include.push(includePath);
        await promisifiedFs.writeFile(targetDirTsconfig, JSON.stringify(existingTsconfig, null, 4));
      }
    } else {
      const generatedTsconfig = Object.assign({}, tsconfig);
      generatedTsconfig.include = [`./${path.relative(targetDir, generatedIndex)}`];
      await promisifiedFs.writeFile(targetDirTsconfig, JSON.stringify(generatedTsconfig, null, 4));
    }
  }
}
