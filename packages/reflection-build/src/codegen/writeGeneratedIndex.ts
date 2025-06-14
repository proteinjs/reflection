import * as path from 'path';
import { promisifiedFs } from '@proteinjs/util-node';
import { graphSerializer, isInstanceOf } from '@proteinjs/util';
import { Graph } from '@dagrejs/graphlib';
import jsesc from 'jsesc';
import { createSourceGraph } from '../parser/createSourceGraph';
import { VariableDeclaration, PackageScope, ClassDeclaration, LOADABLE_QUALIFIED_NAME } from '@proteinjs/reflection';

export async function writeGeneratedIndex(packageDir: string, packageGeneratedDir: string, generatedIndexPath: string) {
  let packageIndexPath = path.join(packageDir, 'index.ts');
  if (!(await promisifiedFs.exists(packageIndexPath))) {
    packageIndexPath = path.join(packageDir, 'src/index.ts');
    if (!(await promisifiedFs.exists(packageIndexPath))) {
      throw new Error('Cannot find index.ts at ./index.ts or ./src/index.ts');
    }
  }

  await promisifiedFs.mkdir(packageGeneratedDir, { recursive: true });
  let generatedIndex = await sourceRepositoryLoader(packageDir, generatedIndexPath);
  generatedIndex += `\n\n\nexport * from '${path.relative(packageGeneratedDir, packageDir)}/index';`;
  await promisifiedFs.writeFile(generatedIndexPath, generatedIndex);
}

async function sourceRepositoryLoader(packageDir: string, generatedIndexPath: string): Promise<string> {
  const packageJson = await getPackageJson(packageDir);
  let code = loadDependencySourceGraphs(packageDir, packageJson);
  const sourceGraph = await createSourceGraph(packageDir);
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
    // Load the dependency's package.json to inspect exports or entryfields
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
      // may have been removed by a previous interation
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
