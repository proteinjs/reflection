import { Graph } from '@dagrejs/graphlib';

/** A qualified name that two or more source files declare. */
export interface SharedQualifiedName {
  qualifiedName: string;
  /** Every file that declares it: package-relative, `/`-separated, in the order the sources parse. */
  filePaths: string[];
}

/**
 * One qualified name, one declaring file, for every name that reaches the generated index.
 *
 * The source graph holds ONE node per qualified name. When two files export the same name, the
 * declaration parsed last takes the node (its value, its `filePath`, and so the class or value
 * the source link hands `objects()`), while the parent edges of both stay on it. The other
 * declaration leaves no trace, so the emitted graph cannot show the collision. This class records
 * every file that declares each name while the graph is built, and names the collisions that are
 * left in a graph.
 *
 * The rule applies to the graph AFTER `removeNonLoadables`, never before. Types, consts and
 * functions exported under one name by two files are ordinary TypeScript: while none of them is
 * Loadable, the prune drops the name and it never reaches the index. A name that survives the
 * prune is an authoring error the graph cannot represent, and the build refuses it rather than
 * ship the last file's declaration.
 *
 * Order: files are kept in the order they are recorded, which is the parse order —
 * `PackageSourceFiles.list()` order, package-relative path by code unit — and names in the order
 * their first declaration was recorded. Both are the same on every machine.
 */
export class SharedQualifiedNames {
  private readonly filePathsByName = new Map<string, string[]>();

  /**
   * The build's refusal: one error naming the package and, for each shared name, every file that
   * declares it. Returns without effect when `sharedNames` is empty.
   */
  static refuse(packageName: string, sharedNames: SharedQualifiedName[]): void {
    if (sharedNames.length === 0) {
      return;
    }

    throw new Error(
      [
        `reflection-build refused ${packageName}: a name that reaches the generated index is declared in more than one file.`,
        'The index holds one declaration per qualified name, so the file parsed last would replace the others without a trace.',
        'Give each declaration its own name (no index was written):',
        ...sharedNames.map(({ qualifiedName, filePaths }) => `  ${qualifiedName}: ${filePaths.join(', ')}`),
      ].join('\n')
    );
  }

  /** The names left in `prunedGraph` that two or more files declare. */
  in(prunedGraph: Graph): SharedQualifiedName[] {
    const shared: SharedQualifiedName[] = [];
    this.filePathsByName.forEach((filePaths, qualifiedName) => {
      if (filePaths.length > 1 && prunedGraph.hasNode(qualifiedName)) {
        shared.push({ qualifiedName, filePaths: [...filePaths] });
      }
    });
    return shared;
  }

  /**
   * Records that the package-relative `filePath` declares `qualifiedName`. The graph builder calls
   * this for every declaration it sets on the graph; a file that declares a name twice (a const
   * and a type of one name, say) counts once.
   */
  record(qualifiedName: string, filePath: string): void {
    const filePaths = this.filePathsByName.get(qualifiedName);
    if (!filePaths) {
      this.filePathsByName.set(qualifiedName, [filePath]);
    } else if (!filePaths.includes(filePath)) {
      filePaths.push(filePath);
    }
  }
}
