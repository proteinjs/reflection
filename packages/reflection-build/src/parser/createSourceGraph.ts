import * as graphlib from '@dagrejs/graphlib';
import globby from 'globby';
import * as path from 'path';
import { TypescriptParser } from '../../modules/typescript-parser';
import { promisifiedFs } from '@proteinjs/util-node';
import { createGraphBuilder } from './createGraphBuilder';

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

  const patterns: string[] = [];
  for (const rel of roots) {
    const root = path.join(dir, rel);
    patterns.push(path.join(root, '**/*.ts'));
    patterns.push(path.join(root, '**/*.tsx'));
  }

  const excludePatterns = ['!**/node_modules/**', '!**/generated/**', ...excludedDirs.map((d) => `!${d}`)];

  const sourceFilePaths = await globby([...patterns, ...excludePatterns]);
  const uniqueFilePaths = Array.from(new Set(sourceFilePaths));

  const graph = new graphlib.Graph();
  const addSourceFile = createGraphBuilder(graph, packageJson, dir);
  const parser = new TypescriptParser();

  for (const sourceFilePath of uniqueFilePaths) {
    const sourceFile = await parser.parseFile(sourceFilePath, path.dirname(sourceFilePath));
    await addSourceFile(sourceFile);
  }

  return graph;
}
