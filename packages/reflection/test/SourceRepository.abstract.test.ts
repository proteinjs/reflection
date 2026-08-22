import { Graph } from '@dagrejs/graphlib';
import { graphSerializer } from '@proteinjs/util';
import { SourceRepository } from '../src/SourceRepository';
import { SourceType, SourceRelationship } from '../src/sourceGraphTypes';
import { ClassDeclaration, InterfaceDeclaration } from '../src/types';

const REPO_KEY = '__proteinjs_reflection_SourceRepository';

/**
 * An abstract class can implement a Loadable interface (e.g. an abstract `MachineAccount
 * implements SourceRecordLoader<User>` whose concrete subclasses are the actual loaders). When no
 * concrete subclass exists in the composition, the abstract class is a leaf of the hierarchy —
 * a `baseChild` — and `objects()` must NOT instantiate it: TypeScript's `abstract` is erased at
 * runtime, so `new` "succeeds" and produces a half-initialized object (the 2026-08-21 boot crash:
 * "must declare id, email, accountName, and secretName").
 */
describe('SourceRepository.objects abstract classes', () => {
  const g: any = typeof window !== 'undefined' ? window : globalThis;
  let saved: any;

  const LOADER = '@test/example/Loader';
  const ABSTRACT = '@test/example/AbstractLoader';
  const CONCRETE = '@test/example/ConcreteLoader';

  let abstractDirectInstantiations: number;

  class AbstractLoader {
    constructor() {
      if (new.target === AbstractLoader) {
        abstractDirectInstantiations++;
      }
    }
  }

  class ConcreteLoader extends AbstractLoader {}

  beforeEach(() => {
    saved = g[REPO_KEY];
    delete g[REPO_KEY];
    abstractDirectInstantiations = 0;
  });

  afterEach(() => {
    if (saved === undefined) {
      delete g[REPO_KEY];
    } else {
      g[REPO_KEY] = saved;
    }
  });

  function mergeGraph(withConcreteChild: boolean) {
    const graph = new Graph();
    const loaderInterface = Object.assign(
      new InterfaceDeclaration('@test/example', 'Loader', [], [], [], [], 'src/Loader.ts'),
      { sourceType: SourceType.interface }
    );
    graph.setNode(LOADER, loaderInterface);
    graph.setEdge(LOADER, '@proteinjs/reflection/Loadable', SourceRelationship.extendsInterface);

    const abstractClass = Object.assign(
      new ClassDeclaration(
        '@test/example',
        'AbstractLoader',
        true,
        false,
        'public',
        [],
        [],
        [],
        [],
        [],
        'src/AbstractLoader.ts'
      ),
      { sourceType: SourceType.class }
    );
    graph.setNode(ABSTRACT, abstractClass);
    graph.setEdge(ABSTRACT, LOADER, SourceRelationship.implementsInterface);

    const sourceLinks: { [qualifiedName: string]: any } = {
      [ABSTRACT]: AbstractLoader,
    };

    if (withConcreteChild) {
      const concreteClass = Object.assign(
        new ClassDeclaration(
          '@test/example',
          'ConcreteLoader',
          false,
          false,
          'public',
          [],
          [],
          [],
          [],
          [],
          'src/ConcreteLoader.ts'
        ),
        { sourceType: SourceType.class }
      );
      graph.setNode(CONCRETE, concreteClass);
      graph.setEdge(CONCRETE, ABSTRACT, SourceRelationship.extendsClass);
      sourceLinks[CONCRETE] = ConcreteLoader;
    }

    SourceRepository.merge(graphSerializer.serialize(graph), sourceLinks);
  }

  test('an abstract leaf (no concrete subclass in the composition) is never instantiated', () => {
    mergeGraph(false);
    const objects = SourceRepository.get().objects(LOADER);
    expect(abstractDirectInstantiations).toBe(0);
    expect(objects).toEqual([]);
  });

  test('a concrete subclass is returned; the abstract base itself is never directly instantiated', () => {
    mergeGraph(true);
    const objects = SourceRepository.get().objects(LOADER);
    expect(abstractDirectInstantiations).toBe(0);
    expect(objects).toHaveLength(1);
    expect(objects[0]).toBeInstanceOf(ConcreteLoader);
  });
});
