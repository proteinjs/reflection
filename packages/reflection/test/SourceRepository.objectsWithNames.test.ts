import { Graph } from '@dagrejs/graphlib';
import { graphSerializer } from '@proteinjs/util';
import { SourceRepository } from '../src/SourceRepository';
import { SourceType, SourceRelationship } from '../src/sourceGraphTypes';
import { ClassDeclaration, InterfaceDeclaration } from '../src/types';

const REPO_KEY = '__proteinjs_reflection_SourceRepository';

/**
 * `objectsWithNames` is the provenance seam: the same resolved objects `objects()` returns, each
 * paired with the declaring package + qualified name. Consumers that attribute loaded objects to
 * the package that compiled them (per-package ownership of source records) depend on the package
 * name being the declaration's, not the consumer's, and on the abstract-class skip holding here too.
 */
describe('SourceRepository.objectsWithNames', () => {
  const g: any = typeof window !== 'undefined' ? window : globalThis;
  let saved: any;

  const LOADER = '@test/core/Loader';
  const LOADER_A = '@test/pkg-a/LoaderA';
  const LOADER_B = '@test/pkg-b/LoaderB';
  const ABSTRACT = '@test/pkg-b/AbstractLoader';

  class LoaderA {}
  class LoaderB {}
  class AbstractLoader {}

  beforeEach(() => {
    saved = g[REPO_KEY];
    delete g[REPO_KEY];
  });

  afterEach(() => {
    if (saved === undefined) {
      delete g[REPO_KEY];
    } else {
      g[REPO_KEY] = saved;
    }
  });

  const classDeclaration = (packageName: string, name: string, isAbstract = false) =>
    Object.assign(
      new ClassDeclaration(packageName, name, isAbstract, false, 'public', [], [], [], [], [], `src/${name}.ts`),
      { sourceType: SourceType.class }
    );

  function mergeGraph() {
    const graph = new Graph();
    const loaderInterface = Object.assign(
      new InterfaceDeclaration('@test/core', 'Loader', [], [], [], [], 'src/Loader.ts'),
      { sourceType: SourceType.interface }
    );
    graph.setNode(LOADER, loaderInterface);
    graph.setEdge(LOADER, '@proteinjs/reflection/Loadable', SourceRelationship.extendsInterface);

    graph.setNode(LOADER_A, classDeclaration('@test/pkg-a', 'LoaderA'));
    graph.setEdge(LOADER_A, LOADER, SourceRelationship.implementsInterface);
    graph.setNode(LOADER_B, classDeclaration('@test/pkg-b', 'LoaderB'));
    graph.setEdge(LOADER_B, LOADER, SourceRelationship.implementsInterface);
    graph.setNode(ABSTRACT, classDeclaration('@test/pkg-b', 'AbstractLoader', true));
    graph.setEdge(ABSTRACT, LOADER, SourceRelationship.implementsInterface);

    SourceRepository.merge(graphSerializer.serialize(graph), {
      [LOADER_A]: LoaderA,
      [LOADER_B]: LoaderB,
      [ABSTRACT]: AbstractLoader,
    });
  }

  test('each object carries its own declaration package + qualified name; abstract leaves are skipped', () => {
    mergeGraph();
    const named = SourceRepository.get().objectsWithNames<object>(LOADER);
    const byQualifiedName: { [qualifiedName: string]: (typeof named)[number] } = {};
    for (const entry of named) {
      byQualifiedName[entry.qualifiedName] = entry;
    }

    expect(Object.keys(byQualifiedName).sort()).toEqual([LOADER_A, LOADER_B]);
    expect(byQualifiedName[LOADER_A].packageName).toBe('@test/pkg-a');
    expect(byQualifiedName[LOADER_A].object).toBeInstanceOf(LoaderA);
    expect(byQualifiedName[LOADER_B].packageName).toBe('@test/pkg-b');
    expect(byQualifiedName[LOADER_B].object).toBeInstanceOf(LoaderB);
  });

  test('objects() returns the very same instances objectsWithNames resolved (one instantiation per declaration)', () => {
    mergeGraph();
    const named = SourceRepository.get().objectsWithNames<object>(LOADER);
    const plain = SourceRepository.get().objects<object>(LOADER);
    expect(plain).toHaveLength(named.length);
    for (const entry of named) {
      expect(plain).toContain(entry.object);
    }
  });
});
