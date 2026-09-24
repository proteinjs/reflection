import { Edge, Graph } from '@dagrejs/graphlib';
import { PackageSourceFiles } from '../parser/PackageSourceFiles';

/**
 * The emitted form of a source graph: the same nodes, values and edges, in an order that is a
 * function of the graph's content alone — never of the order the builder happened to visit the
 * sources or insert placeholder parents. The generated index serializes nodes and edges in
 * insertion order, so this order is the artifact's byte order (and the runtime's `objects()`
 * order within one package).
 *
 * - Nodes by the declaring file's package-relative path, then by qualified name. A placeholder
 *   (a parent referenced here but declared elsewhere) has no file and sorts by name ahead of
 *   the declared nodes.
 * - Edges by child, then parent (a source graph is never a multigraph: one edge per pair).
 *
 * Both keys are package-relative strings compared by code unit, so they are the same on every
 * machine and in every checkout location.
 */
export class CanonicalSourceGraph {
  /** A copy of `graph` whose node and edge order is canonical. */
  static of(graph: Graph): Graph {
    const canonical = new Graph({
      directed: graph.isDirected(),
      multigraph: graph.isMultigraph(),
      compound: graph.isCompound(),
    });
    for (const nodeName of CanonicalSourceGraph.nodeOrder(graph)) {
      canonical.setNode(nodeName, graph.node(nodeName));
    }

    for (const edge of CanonicalSourceGraph.edgeOrder(graph)) {
      canonical.setEdge(edge, graph.edge(edge));
    }

    return canonical;
  }

  private static nodeOrder(graph: Graph): string[] {
    const fileOf = (nodeName: string): string => graph.node(nodeName)?.filePath || '';
    return [...graph.nodes()].sort(
      (a, b) => PackageSourceFiles.compare(fileOf(a), fileOf(b)) || PackageSourceFiles.compare(a, b)
    );
  }

  private static edgeOrder(graph: Graph): Edge[] {
    return [...graph.edges()].sort(
      (a, b) => PackageSourceFiles.compare(a.v, b.v) || PackageSourceFiles.compare(a.w, b.w)
    );
  }
}
