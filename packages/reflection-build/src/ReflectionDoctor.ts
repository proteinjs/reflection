import * as fs from 'fs';
import * as path from 'path';
import globby from 'globby';
import { TypescriptParser } from '../modules/typescript-parser';
import { createEmittedSourceGraph, findDependencyDir, findDependencySourceGraph } from './codegen/writeGeneratedIndex';

const LOADABLE_QUALIFIED_NAME = '@proteinjs/reflection/Loadable';
const SOURCE_REPOSITORY_FILTER_QUALIFIED_NAME = '@proteinjs/reflection/SourceRepositoryFilter';

export interface DoctorReport {
  text: string;
  healthy: boolean;
  dependencies: {
    /** reflection-built deps whose graphs load at runtime */
    loaded: string[];
    /** declared deps that ship no graph (normal for non-reflection deps) */
    withoutGraph: string[];
    /** deps opted out via SKIP_REFLECTION_LOAD */
    skipped: string[];
  };
  nodeCount: number;
  edgeCount: number;
  sourceLinkCount: number;
  drift: {
    /** declarations in current sources missing from the built artifact (stale dist) */
    missingFromDist: string[];
    /** declarations in the built artifact no longer in sources (stale dist) */
    onlyInDist: string[];
  };
  orphans: Orphan[];
}

export interface Orphan {
  qualifiedName: string;
  unresolvedParent: string;
  cause: string;
}

export interface Explanation {
  text: string;
  verdict: string;
}

interface GraphJson {
  nodes: { v: string; value?: any }[];
  edges: { v: string; w: string; value?: string }[];
}

interface Universe {
  /** package name -> harvested graph + artifact location (own package included) */
  graphs: { [packageName: string]: { graph: GraphJson; artifactPath: string } };
  /** qualifiedName -> owning package, for nodes with values (placeholders excluded) */
  valued: { [qualifiedName: string]: string };
}

/**
 * reflection-doctor (task #104 §3.1): purely analytical diagnostics for a reflection-built
 * package, run from the package dir. Executes NO dependency code — its own graph and every
 * dependency graph are harvested statically from `dist/generated/index.js` artifacts (the
 * same upward node_modules walk the build's import gate uses, transitively, mirroring what
 * the runtime would merge).
 *
 * - `diagnose()` prints the registered inventory (deps with graphs / without / skip-listed),
 *   this package's node+edge+sourceLink counts, emitted-vs-source drift (stale dist), and
 *   ORPHANS: nodes the build kept because a parent is foreign, whose parent's package
 *   resolves to no loadable graph — the undeclared-dep / typo footgun that the runtime
 *   silently prunes today.
 * - `explain(name)` prints the parent-edge resolution trace for one declaration — how (or
 *   why not) it becomes Loadable — naming the broken hop and its cause.
 */
export class ReflectionDoctor {
  private readonly skipList: string[];

  constructor(
    private readonly packageDir: string,
    options: { skipList?: string[] } = {}
  ) {
    this.skipList = options.skipList || [];
  }

  async diagnose(): Promise<DoctorReport> {
    const packageJson = this.readPackageJson(this.packageDir);
    const universe = this.harvestUniverse(packageJson);
    const own = universe.graphs[packageJson.name];
    const dependencies = this.dependencyInventory(packageJson);
    const drift = await this.computeDrift(packageJson, own.graph);
    const orphans = this.findOrphans(packageJson, universe);
    const sourceLinkCount = this.parseSourceLinkKeys(fs.readFileSync(own.artifactPath, 'utf-8')).length;

    const healthy = orphans.length === 0 && drift.missingFromDist.length === 0 && drift.onlyInDist.length === 0;
    const report: DoctorReport = {
      text: '',
      healthy,
      dependencies,
      nodeCount: own.graph.nodes.length,
      edgeCount: own.graph.edges.length,
      sourceLinkCount,
      drift,
      orphans,
    };
    report.text = this.formatReport(packageJson.name, own.artifactPath, report);
    return report;
  }

  async explain(nameOrQualifiedName: string): Promise<Explanation> {
    const packageJson = this.readPackageJson(this.packageDir);
    const universe = this.harvestUniverse(packageJson);
    const qualifiedName = this.resolveTarget(nameOrQualifiedName, packageJson.name, universe);
    if (!qualifiedName) {
      return await this.explainNotFound(nameOrQualifiedName, packageJson);
    }

    const node = this.findValuedNode(qualifiedName, universe);
    const lines: string[] = [];
    const kind = this.describeKind(node?.value);
    const filePath = node?.value?.filePath ? `, ${node.value.filePath}` : '';
    lines.push(`${qualifiedName}  (${kind}${filePath})`);

    const outcome = this.trace(qualifiedName, universe, lines, '', {});
    let verdict: string;
    if (outcome.loadableVia) {
      verdict = `VERDICT: Loadable — returned by objects('${outcome.loadableVia}')`;
      const linkWarning = this.checkSourceLink(qualifiedName, node, packageJson.name, universe);
      if (linkWarning) {
        verdict += `\n${linkWarning}`;
      }
    } else if (outcome.brokenHop) {
      verdict = `VERDICT: NOT Loadable — broken hop: ${outcome.brokenHop}`;
    } else {
      verdict =
        `VERDICT: NOT Loadable — no parent chain reaches ${LOADABLE_QUALIFIED_NAME}. ` +
        `Every parent resolved; this type simply is not Loadable (the runtime prunes it, by design).`;
    }

    lines.push(verdict);
    return { text: lines.join('\n'), verdict };
  }

  /**
   * Recursive parent-edge trace. Returns the first Loadable-reaching direct parent (for the
   * objects() verdict) and the first broken hop encountered, if any.
   */
  private trace(
    qualifiedName: string,
    universe: Universe,
    lines: string[],
    indent: string,
    visited: { [qualifiedName: string]: boolean },
    depth: number = 0
  ): { loadableVia?: string; brokenHop?: string } {
    if (visited[qualifiedName]) {
      return {};
    }
    visited[qualifiedName] = true;

    const owningPackage = universe.valued[qualifiedName];
    const graph = universe.graphs[owningPackage]?.graph;
    if (!graph) {
      return {};
    }

    const outEdges = graph.edges.filter((edge) => edge.v === qualifiedName);
    let loadableVia: string | undefined;
    let brokenHop: string | undefined;
    for (const edge of outEdges) {
      const relationship = edge.value || 'extends';
      const parent = edge.w;

      if (parent === LOADABLE_QUALIFIED_NAME || parent === SOURCE_REPOSITORY_FILTER_QUALIFIED_NAME) {
        lines.push(`${indent}└─ ${relationship} ${parent}  [OK]`);
        loadableVia = loadableVia || (depth === 0 ? parent : qualifiedName);
        continue;
      }

      const parentPackage = parent.substring(0, parent.lastIndexOf('/'));
      if (universe.valued[parent]) {
        lines.push(`${indent}└─ ${relationship} ${parent}  [edge OK]`);
        if (parentPackage !== owningPackage) {
          const artifactPath = universe.graphs[parentPackage].artifactPath;
          lines.push(`${indent}   └─ graph ${parentPackage}: LOADED (${path.relative(this.packageDir, artifactPath)})`);
        }
        const parentOutcome = this.trace(parent, universe, lines, `${indent}   `, visited, depth + 1);
        if (parentOutcome.loadableVia) {
          loadableVia = loadableVia || (depth === 0 ? parent : qualifiedName);
        }
        brokenHop = brokenHop || parentOutcome.brokenHop;
        continue;
      }

      // Unresolved parent — name the broken hop.
      const cause = this.classifyUnresolvedParent(parent, parentPackage, owningPackage, universe);
      lines.push(`${indent}└─ ${relationship} ${parent}  [BROKEN]`);
      lines.push(`${indent}   └─ ${cause.detail}`);
      brokenHop = brokenHop || `${parent} — ${cause.summary}`;
    }

    return { loadableVia, brokenHop };
  }

  private classifyUnresolvedParent(
    parent: string,
    parentPackage: string,
    owningPackage: string,
    universe: Universe
  ): { summary: string; detail: string } {
    if (!this.isResolvableQualifiedName(parent)) {
      const summary =
        'inline type expression captured as a parent — never graph-resolvable (hierarchy edges to inline types carry no package); harmless unless this was meant to be a named type';
      return { summary, detail: summary };
    }

    if (!parentPackage) {
      const summary = 'global-scope parent (no package) — not resolvable in any graph';
      return { summary, detail: summary };
    }

    if (universe.graphs[parentPackage]) {
      const summary =
        `${parentPackage}'s graph is loaded but does not declare it — not Loadable there ` +
        `(pruned at its build), not exported, or ${parentPackage}'s dist is stale; rebuild ${parentPackage}`;
      return { summary, detail: `graph ${parentPackage}: LOADED, declaration not found — ${summary}` };
    }

    const cause = this.classifyPackage(parentPackage, this.readPackageJson(this.packageDir));
    return { summary: cause, detail: `graph ${parentPackage}: NOT LOADED — ${cause}` };
  }

  /** Why a package contributes no graph, from the consuming package's point of view. */
  private classifyPackage(packageName: string, packageJson: any): string {
    if (this.skipList.includes(packageName)) {
      return `skip-listed via SKIP_REFLECTION_LOAD`;
    }

    const declared = !!(packageJson.dependencies && packageJson.dependencies[packageName]);
    if (!declared) {
      return `${packageName} is not a declared dependency of ${packageJson.name} — undeclared dep or typo (an undeclared workspace package resolves to a stale registry copy at install time)`;
    }

    const dependencyDir = findDependencyDir(this.packageDir, packageName);
    if (!dependencyDir) {
      return `${packageName} is declared but not installed`;
    }

    return `${packageName} is installed but not reflection-built (no dist/generated/index.js)`;
  }

  /**
   * Orphans: nodes this package's build kept (foreign parent ⇒ benefit of the doubt), whose
   * parent's package contributes NO graph at runtime — the runtime will silently prune them.
   * Parents living in loaded graphs that simply aren't Loadable are not orphans (that pruning
   * is by design); `explain` covers those.
   */
  private findOrphans(packageJson: any, universe: Universe): Orphan[] {
    const own = universe.graphs[packageJson.name].graph;
    const orphans: Orphan[] = [];
    for (const edge of own.edges) {
      const child = edge.v;
      const parent = edge.w;
      if (!universe.valued[child] || universe.valued[child] !== packageJson.name) {
        continue;
      }
      if (universe.valued[parent]) {
        continue;
      }
      if (parent === LOADABLE_QUALIFIED_NAME || parent === SOURCE_REPOSITORY_FILTER_QUALIFIED_NAME) {
        continue;
      }

      if (!this.isResolvableQualifiedName(parent)) {
        // Inline type expression captured as a parent name (e.g. a union literal with a doc
        // comment). Never graph-resolvable by design — not an orphan signal.
        continue;
      }

      const parentPackage = parent.substring(0, parent.lastIndexOf('/'));
      if (!parentPackage || parentPackage === packageJson.name || universe.graphs[parentPackage]) {
        continue;
      }

      orphans.push({
        qualifiedName: child,
        unresolvedParent: parent,
        cause: this.classifyPackage(parentPackage, packageJson),
      });
    }

    return orphans;
  }

  /** Emitted-vs-source drift: rebuild-needed detection for the prod graph. */
  private async computeDrift(
    packageJson: any,
    emittedGraph: GraphJson
  ): Promise<{ missingFromDist: string[]; onlyInDist: string[] }> {
    const freshGraph = await createEmittedSourceGraph(this.packageDir, ['src']);
    const freshValued: { [qualifiedName: string]: boolean } = {};
    for (const nodeName of freshGraph.nodes()) {
      if (freshGraph.node(nodeName)) {
        freshValued[nodeName] = true;
      }
    }

    const emittedValued: { [qualifiedName: string]: boolean } = {};
    for (const node of emittedGraph.nodes) {
      if (node.value) {
        emittedValued[node.v] = true;
      }
    }

    return {
      missingFromDist: Object.keys(freshValued).filter((qualifiedName) => !emittedValued[qualifiedName]),
      onlyInDist: Object.keys(emittedValued).filter((qualifiedName) => !freshValued[qualifiedName]),
    };
  }

  /**
   * Statically harvest this package's graph and, transitively, every reflection-built
   * dependency's graph — the same set the runtime merges.
   */
  private harvestUniverse(packageJson: any): Universe {
    const universe: Universe = { graphs: {}, valued: {} };

    const ownArtifactPath = path.join(this.packageDir, 'dist', 'generated', 'index.js');
    if (!fs.existsSync(ownArtifactPath)) {
      throw new Error(
        `reflection-doctor: no reflection artifact at ${path.relative(process.cwd(), ownArtifactPath) || '.'} — ` +
          `run the package build (reflection-build && tsc) first.`
      );
    }
    this.addToUniverse(universe, packageJson.name, ownArtifactPath);

    const pending: { fromDir: string; packageName: string }[] = this.dependencyNames(packageJson).map(
      (packageName) => ({ fromDir: this.packageDir, packageName })
    );
    const seen: { [packageName: string]: boolean } = { [packageJson.name]: true };
    while (pending.length > 0) {
      const { fromDir, packageName } = pending.shift() as { fromDir: string; packageName: string };
      if (seen[packageName] || this.skipList.includes(packageName)) {
        continue;
      }
      seen[packageName] = true;

      const artifactPath = findDependencySourceGraph(fromDir, packageName);
      if (!artifactPath) {
        continue;
      }

      this.addToUniverse(universe, packageName, artifactPath);
      const dependencyDir = path.dirname(path.dirname(path.dirname(artifactPath)));
      const dependencyPackageJson = this.readPackageJson(dependencyDir);
      for (const transitive of this.dependencyNames(dependencyPackageJson)) {
        pending.push({ fromDir: dependencyDir, packageName: transitive });
      }
    }

    return universe;
  }

  private addToUniverse(universe: Universe, packageName: string, artifactPath: string): void {
    const graph = this.parseArtifactGraph(artifactPath);
    universe.graphs[packageName] = { graph, artifactPath };
    for (const node of graph.nodes) {
      if (node.value && !universe.valued[node.v]) {
        universe.valued[node.v] = packageName;
      }
    }
  }

  /** Extract the serialized graph from a generated index without executing it. */
  private parseArtifactGraph(artifactPath: string): GraphJson {
    const artifact = fs.readFileSync(artifactPath, 'utf-8');
    const literalMatch = artifact.match(/sourceGraph = ("(?:[^"\\]|\\.)*");/);
    if (!literalMatch) {
      throw new Error(`reflection-doctor: ${artifactPath} does not contain a serialized sourceGraph`);
    }

    // Same read the runtime performs: the JSON string literal, unescaped once, then parsed.
    return JSON.parse(JSON.parse(literalMatch[1]).replace(/\\'/g, "'"));
  }

  private parseSourceLinkKeys(artifact: string): string[] {
    const blockMatch = artifact.match(/sourceLinks = \{([\s\S]*?)\};/);
    if (!blockMatch) {
      return [];
    }

    const keys: string[] = [];
    const keyPattern = /'([^']+)':/g;
    let match: RegExpExecArray | null;
    while ((match = keyPattern.exec(blockMatch[1])) !== null) {
      keys.push(match[1]);
    }
    return keys;
  }

  private dependencyInventory(packageJson: any): { loaded: string[]; withoutGraph: string[]; skipped: string[] } {
    const loaded: string[] = [];
    const withoutGraph: string[] = [];
    const skipped: string[] = [];
    for (const packageName of this.dependencyNames(packageJson)) {
      if (this.skipList.includes(packageName)) {
        skipped.push(packageName);
      } else if (findDependencySourceGraph(this.packageDir, packageName)) {
        loaded.push(packageName);
      } else {
        withoutGraph.push(packageName);
      }
    }
    return { loaded, withoutGraph, skipped };
  }

  private resolveTarget(nameOrQualifiedName: string, ownPackageName: string, universe: Universe): string | undefined {
    if (universe.valued[nameOrQualifiedName]) {
      return nameOrQualifiedName;
    }

    // Bare name: prefer this package's declaration, then any package's.
    const ownMatch = `${ownPackageName}/${nameOrQualifiedName}`;
    if (universe.valued[ownMatch]) {
      return ownMatch;
    }

    const suffix = `/${nameOrQualifiedName}`;
    return Object.keys(universe.valued).find((qualifiedName) => qualifiedName.endsWith(suffix));
  }

  /** The declaration is in no harvested graph — diagnose why from this package's sources. */
  private async explainNotFound(nameOrQualifiedName: string, packageJson: any): Promise<Explanation> {
    const name = nameOrQualifiedName.includes('/')
      ? nameOrQualifiedName.substring(nameOrQualifiedName.lastIndexOf('/') + 1)
      : nameOrQualifiedName;

    const freshGraph = await createEmittedSourceGraph(this.packageDir, ['src']);
    const freshMatch = freshGraph
      .nodes()
      .find((qualifiedName: string) => freshGraph.node(qualifiedName) && qualifiedName.endsWith(`/${name}`));
    if (freshMatch) {
      const verdict =
        `VERDICT: NOT in the built artifact — ${freshMatch} is in current sources but not in ` +
        `dist/generated (stale dist); rebuild this package (reflection-build && tsc).`;
      return { text: verdict, verdict };
    }

    const declaration = await this.findDeclarationInSources(name);
    if (declaration && !declaration.isExported) {
      const verdict =
        `VERDICT: NOT in the graph — ${name} is declared in ${declaration.filePath} but not exported; ` +
        `the parser only registers exported declarations. Export it to make it graph-visible.`;
      return { text: verdict, verdict };
    }

    const verdict =
      `VERDICT: NOT FOUND — no declaration named '${name}' in ${packageJson.name}'s scanned sources (src) ` +
      `or any loaded dependency graph. Check the spelling, or whether it lives outside the scanned source roots.`;
    return { text: verdict, verdict };
  }

  /** Raw parser pass over src — sees non-exported declarations the graph never contains. */
  private async findDeclarationInSources(name: string): Promise<{ filePath: string; isExported: boolean } | undefined> {
    const patterns = [
      path.join(this.packageDir, 'src', '**/*.ts'),
      path.join(this.packageDir, 'src', '**/*.tsx'),
      '!**/node_modules/**',
      '!**/generated/**',
    ];
    const sourceFilePaths: string[] = await globby(patterns);
    const parser = new TypescriptParser();
    for (const sourceFilePath of sourceFilePaths) {
      const parsedFile = await parser.parseFile(sourceFilePath, path.dirname(sourceFilePath));
      for (const declaration of parsedFile.declarations) {
        if (declaration.name === name) {
          return {
            filePath: path.relative(this.packageDir, sourceFilePath),
            isExported: !!(declaration as any).isExported,
          };
        }
      }
    }
    return undefined;
  }

  private checkSourceLink(
    qualifiedName: string,
    node: { value?: any } | undefined,
    ownPackageName: string,
    universe: Universe
  ): string | undefined {
    // Only concrete classes/variables of the examined package are instantiated via links.
    if (universe.valued[qualifiedName] !== ownPackageName) {
      return undefined;
    }

    const sourceType = node?.value?.sourceType;
    const isClass = sourceType === 2;
    const isVariable = sourceType === 0;
    if (!isClass && !isVariable) {
      return undefined;
    }
    if (isClass && node?.value?.isAbstract) {
      return undefined;
    }

    const artifact = fs.readFileSync(universe.graphs[ownPackageName].artifactPath, 'utf-8');
    if (this.parseSourceLinkKeys(artifact).includes(qualifiedName)) {
      return undefined;
    }

    return (
      `WARNING: Loadable but has no sourceLink in the artifact — objects() cannot instantiate it. ` +
      `The dist/generated artifact is stale; rebuild this package.`
    );
  }

  private findValuedNode(qualifiedName: string, universe: Universe): { value?: any } | undefined {
    const owningPackage = universe.valued[qualifiedName];
    if (!owningPackage) {
      return undefined;
    }
    return universe.graphs[owningPackage].graph.nodes.find((node) => node.v === qualifiedName);
  }

  private describeKind(value: any): string {
    const kinds = ['variable', 'type alias', 'class', 'interface'];
    return (typeof value?.sourceType === 'number' && kinds[value.sourceType]) || 'declaration';
  }

  private formatReport(packageName: string, artifactPath: string, report: DoctorReport): string {
    const lines: string[] = [];
    lines.push(`reflection-doctor: ${packageName}`);
    lines.push('');
    lines.push(`Dependency graphs:`);
    lines.push(`  loaded (${report.dependencies.loaded.length}): ${report.dependencies.loaded.join(', ') || '—'}`);
    lines.push(
      `  no graph (${report.dependencies.withoutGraph.length}): ${report.dependencies.withoutGraph.join(', ') || '—'}  [not reflection-built — normal for non-reflection deps]`
    );
    if (report.dependencies.skipped.length > 0) {
      lines.push(
        `  skip-listed (${report.dependencies.skipped.length}): ${report.dependencies.skipped.join(', ')}  [SKIP_REFLECTION_LOAD]`
      );
    }
    lines.push('');
    lines.push(
      `This package's graph: ${path.relative(this.packageDir, artifactPath)} — ` +
        `${report.nodeCount} nodes, ${report.edgeCount} edges, ${report.sourceLinkCount} source links`
    );

    if (report.drift.missingFromDist.length === 0 && report.drift.onlyInDist.length === 0) {
      lines.push(`Drift vs sources: in sync`);
    } else {
      lines.push(`Drift vs sources: STALE dist/generated — rebuild this package (reflection-build && tsc)`);
      for (const qualifiedName of report.drift.missingFromDist) {
        lines.push(`  in sources, not in artifact: ${qualifiedName}`);
      }
      for (const qualifiedName of report.drift.onlyInDist) {
        lines.push(`  in artifact, not in sources: ${qualifiedName}`);
      }
    }

    lines.push('');
    if (report.orphans.length === 0) {
      lines.push(`Orphans: none — every foreign parent resolves in a loaded graph`);
    } else {
      lines.push(`Orphans (kept at build, silently pruned at runtime — parent resolves in NO loaded graph):`);
      for (const orphan of report.orphans) {
        lines.push(`  ${orphan.qualifiedName} -> ${orphan.unresolvedParent}`);
        lines.push(`    ${orphan.cause}`);
      }
    }

    return lines.join('\n');
  }

  /** True for shapes a qualified name can take; inline type expressions (unions, literals, comments) fail this. */
  private isResolvableQualifiedName(qualifiedName: string): boolean {
    return !/[\s{}|()<>&'"]/.test(qualifiedName);
  }

  private dependencyNames(packageJson: any): string[] {
    return Object.keys(packageJson.dependencies || {});
  }

  private readPackageJson(dir: string): any {
    const packageJsonPath = path.join(dir, 'package.json');
    if (!fs.existsSync(packageJsonPath)) {
      throw new Error(`Unable to find package.json in dir: ${dir}`);
    }
    return JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
  }
}
