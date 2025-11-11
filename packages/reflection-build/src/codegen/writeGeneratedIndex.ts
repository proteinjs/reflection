import * as path from 'path';
import { promisifiedFs } from '@proteinjs/util-node';
import { graphSerializer, isInstanceOf } from '@proteinjs/util';
import { Graph } from '@dagrejs/graphlib';
import jsesc from 'jsesc';
import { createSourceGraph } from '../parser/createSourceGraph';
import { VariableDeclaration, PackageScope, ClassDeclaration, LOADABLE_QUALIFIED_NAME } from '@proteinjs/reflection';

/**
 * @param packageDir               Root of the package (contains package.json)
 * @param packageGeneratedDir      Directory where generated/index.ts will be written
 * @param generatedIndexPath       Full path to generated/index.ts
 * @param sourceRootsRel           Relative directories to scan (e.g. ['test','src']) — defaults to 'src'
 * @param publicEntryRelOverride   Optional relative path (from package root) to the public entry that the
 *                                 generated index should re-export from (e.g. 'test/index.ts').
 *                                 If omitted, we re-export from '<packageRoot>/index'.
 */
export async function writeGeneratedIndex(
  packageDir: string,
  packageGeneratedDir: string,
  generatedIndexPath: string,
  sourceRootsRel: string | string[] = 'src',
  publicEntryRelOverride?: string
) {
  // Keep the original safety check for a package entry.
  // Even if we later re-export from a custom entry, most packages still have ./index.ts or ./src/index.ts.
  let packageIndexPath = path.join(packageDir, 'index.ts');
  if (!(await promisifiedFs.exists(packageIndexPath))) {
    packageIndexPath = path.join(packageDir, 'src/index.ts');
    if (!(await promisifiedFs.exists(packageIndexPath))) {
      throw new Error('Cannot find index.ts at ./index.ts or ./src/index.ts');
    }
  }

  // If an override was provided, optionally sanity-check that it exists. (Non-fatal if missing TS extension.)
  if (publicEntryRelOverride) {
    const overrideAbsCandidates = [
      path.join(packageDir, publicEntryRelOverride),
      path.join(packageDir, publicEntryRelOverride.replace(/\.[^/.]+$/, '') + '.ts'),
      path.join(packageDir, publicEntryRelOverride.replace(/\.[^/.]+$/, '') + '.tsx'),
    ];
    const exists = await Promise.all(overrideAbsCandidates.map((p) => promisifiedFs.exists(p)));
    if (!exists.some(Boolean)) {
      // Soft fail with a better message; do not throw, to keep behavior minimal and predictable.
      // If it truly doesn't exist, the final 'export * from' will fail at compile time which is also explicit.
      // eslint-disable-next-line no-console
      console.warn(
        `[reflection-build] WARN: REFLECTION_EXPORT_FROM points at '${publicEntryRelOverride}', but no .ts/.tsx file was found under the package root.`
      );
    }
  }

  await promisifiedFs.mkdir(packageGeneratedDir, { recursive: true });

  let generatedIndex = await sourceRepositoryLoader(packageDir, generatedIndexPath, sourceRootsRel);

  // Choose the target module to re-export from:
  // - If override provided, re-export from that (path relative to generated dir, without extension)
  // - Else fallback to the current default: '<packageRoot>/index'
  const exportTargetNoExt = publicEntryRelOverride
    ? path.relative(packageGeneratedDir, path.join(packageDir, publicEntryRelOverride)).replace(/\.[^/.]+$/, '')
    : `${path.relative(packageGeneratedDir, packageDir)}/index`;

  generatedIndex += `\n\n\nexport * from '${exportTargetNoExt}';`;

  await promisifiedFs.writeFile(generatedIndexPath, generatedIndex);
}

async function sourceRepositoryLoader(
  packageDir: string,
  generatedIndexPath: string,
  sourceRootsRel: string | string[]
): Promise<string> {
  const packageJson = await getPackageJson(packageDir);
  let code = loadDependencySourceGraphs(packageDir, packageJson);

  // Allow multiple roots (e.g., ['test','src']) to keep ancestry intact.
  const roots = Array.isArray(sourceRootsRel) ? sourceRootsRel : [sourceRootsRel];
  const sourceGraph: Graph = await createSourceGraph(packageDir, [], roots);

  code += generateSourceGraph(sourceGraph, packageJson.name);
  code += generateSourceLinks(sourceGraph, packageJson, generatedIndexPath);
  code += mergeSourceGraph();
  return code;
}

async function getPackageJson(packageDir: string): Promise<any> {
  const packageJsonPath = path.join(packageDir, 'package.json');
  if (!(await promisifiedFs.exists(packageJsonPath))) {
    throw new Error(`Unable to find package.json in dir: ${packageDir}`);
  }
  return require(packageJsonPath);
}

function loadDependencySourceGraphs(packageDir: string, packageJson: any): string {
  let code = '/** Load Dependency Source Graphs */\n\n';

  const skipEnv = process.env.SKIP_REFLECTION_LOAD || '';
  const skipList = skipEnv
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  if (packageJson.dependencies) {
    for (const packageName in packageJson.dependencies) {
      // Skip any packages listed in SKIP_REFLECTION_LOAD
      if (skipList.includes(packageName)) {
        continue;
      }

      if (packageName.startsWith('@material-ui')) {
        continue;
      }

      const specifier = getDependencyImportSpecifier(packageDir, packageName);
      if (!specifier) {
        continue;
      }
      code += `import '${specifier}';\n`; // Load dependencies of package (ie. run code in dependency index)
    }
  }

  return code;
}

/**
 * Determine an import specifier for a dependency that respects its package.json exports or main/module fields.
 */
function getDependencyImportSpecifier(packageDir: string, packageName: string): string | undefined {
  try {
    require.resolve(packageName, { paths: [packageDir] });
    return packageName;
  } catch {
    // Load the dependency's package.json to inspect exports or entry fields
    let depPkgJson: any;
    try {
      const pkgJsonPath = require.resolve(path.join(packageName, 'package.json'), { paths: [packageDir] });
      depPkgJson = require(pkgJsonPath);
    } catch {
      return undefined;
    }
    const exportsField = depPkgJson.exports;
    if (exportsField) {
      let entryPoint: string | undefined;
      if (typeof exportsField === 'string') {
        entryPoint = exportsField;
      } else if (typeof exportsField === 'object') {
        const mainExport = exportsField['.'];
        if (typeof mainExport === 'string') {
          entryPoint = mainExport;
        } else if (mainExport && typeof mainExport === 'object') {
          entryPoint = mainExport.import || mainExport.require;
        }
      }
      if (!entryPoint) {
        return undefined;
      }
      if (entryPoint.startsWith('./')) {
        entryPoint = entryPoint.slice(2);
      }
      entryPoint = entryPoint.replace(/\.[^/.]+$/, '');
      return `${packageName}/${entryPoint}`;
    }

    // No exports field: fall back to module or main
    const fallback = depPkgJson.module || depPkgJson.main;
    if (!fallback) {
      return undefined;
    }

    let entryPoint = fallback;
    if (entryPoint.startsWith('./')) {
      entryPoint = entryPoint.slice(2);
    }
    entryPoint = entryPoint.replace(/\.[^/.]+$/, '');
    return `${packageName}/${entryPoint}`;
  }
}

function generateSourceGraph(sourceGraph: Graph, buildTargetPackageName: string): string {
  removeNonLoadables(sourceGraph, buildTargetPackageName);
  let code = `\n\n/** Generate Source Graph */\n\n`;
  const serializedSourceGraph = graphSerializer.serialize(sourceGraph);
  const doubleEscapedSerializedSourceGraph = jsesc(serializedSourceGraph, { json: true }); // since we write to file, need to escape a second time
  code += `const sourceGraph = ${doubleEscapedSerializedSourceGraph};\n`;
  return code;
}

/**
 * Remove all declarations (PackageScopes) that are not Loadable.
 *
 * Note: Since we don't have the full source graph containing all package dependencies
 * until runtime, we will keep all declarations that extend a type that's declared
 * in a foreign package. The remaining purge of non-Loadables happens in flattenSourceGraph.
 *
 * @return true if packageScope is not Loadable
 */
function removeNonLoadables(sourceGraph: Graph, buildTargetPackageName: string): void {
  for (const nodeName of sourceGraph.nodes()) {
    const node = sourceGraph.node(nodeName);
    if (!node) {
      // may have been removed by a previous iteration
      continue;
    }

    removeNonLoadableNode(node, buildTargetPackageName, sourceGraph);
  }
}

/**
 * @return true if packageScope is not Loadable
 */
function removeNonLoadableNode(
  packageScope: PackageScope,
  buildTargetPackageName: string,
  sourceGraph: Graph
): boolean {
  // We're not a Loadable
  const outEdges = sourceGraph.outEdges(packageScope.qualifiedName);
  if (!outEdges) {
    sourceGraph.removeNode(packageScope.qualifiedName);
    return true;
  }

  // Check parents
  let shouldRemove = true;
  for (const outEdge of outEdges) {
    // Bail if parent is Loadable
    if (outEdge.w == LOADABLE_QUALIFIED_NAME) {
      shouldRemove = false;
      continue;
    }

    // Bail if parent's in a foreign package and not in global, assume it could be Loadable
    const parentPackageName = outEdge.w.substring(0, outEdge.w.lastIndexOf('/'));
    if (parentPackageName && parentPackageName != buildTargetPackageName) {
      shouldRemove = false;
      continue;
    }

    const parent = sourceGraph.node(outEdge.w);
    if (!parent) {
      continue;
    }

    if (!removeNonLoadableNode(parent, buildTargetPackageName, sourceGraph)) {
      shouldRemove = false;
    }
  }

  if (shouldRemove) {
    sourceGraph.removeNode(packageScope.qualifiedName);
  }

  return shouldRemove;
}

function generateSourceLinks(sourceGraph: Graph, packageJson: any, generatedIndexPath: string): string {
  let code = `\n\n/** Generate Source Links */\n\n`;
  const linkableNodes: PackageScope[] = [];
  for (const nodeName of sourceGraph.nodes()) {
    const node = sourceGraph.node(nodeName);
    if (!node) {
      continue;
    }

    if (!(isInstanceOf(node, VariableDeclaration) || isInstanceOf(node, ClassDeclaration))) {
      continue;
    }

    if (node.packageName != packageJson.name) {
      continue;
    }

    if (!node.filePath) {
      continue;
    }

    const relativeImportPath = path.relative(path.dirname(generatedIndexPath), node.filePath);
    code += `import { ${node.name} } from '${relativeImportPath.replace(/\.[^/.]+$/, '')}';\n`;
    linkableNodes.push(node);
  }

  code += `\nconst sourceLinks = {\n`;
  for (const node of linkableNodes) {
    code += `\t'${node.qualifiedName}': ${node.name},\n`;
  }
  code += `};\n`;

  return code;
}

function mergeSourceGraph(): string {
  let code = `\n\n/** Load Source Graph and Links */\n\n`;
  code += `import { SourceRepository } from '@proteinjs/reflection';\n`;
  code += `SourceRepository.merge(sourceGraph, sourceLinks);`;
  return code;
}
