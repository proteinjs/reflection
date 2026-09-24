import * as graphlib from '@dagrejs/graphlib';
import * as path from 'path';
import { TypescriptParser } from '../../modules/typescript-parser';
import { promisifiedFs } from '@proteinjs/util-node';
import { createGraphBuilder } from './createGraphBuilder';
import { PackageSourceFiles } from './PackageSourceFiles';

export async function createSourceGraph(
  dir: string,
  excludedDirs: string[] = [],
  sourceRootsRel: string | string[] = 'src'
) {
  const packageJsonPath = path.join(dir, 'package.json');
  if (!(await promisifiedFs.exists(packageJsonPath))) {
    throw new Error(`Unable to find package.json in dir: ${dir}`);
  }

  const packageJson = require(packageJsonPath);
  const roots = Array.isArray(sourceRootsRel) ? sourceRootsRel : [sourceRootsRel];
  const sourceFilePaths = await new PackageSourceFiles(dir, roots, excludedDirs).list();

  const graph = new graphlib.Graph();
  const addSourceFile = createGraphBuilder(graph, packageJson, dir);
  const parser = new TypescriptParser();

  // Sequential, in PackageSourceFiles order: the parse order is part of the graph's content
  // (a name exported by two files holds the declaration parsed last).
  for (const sourceFilePath of sourceFilePaths) {
    const sourceFile = await parser.parseFile(sourceFilePath, path.dirname(sourceFilePath));
    await addSourceFile(sourceFile);
  }

  return graph;
}
