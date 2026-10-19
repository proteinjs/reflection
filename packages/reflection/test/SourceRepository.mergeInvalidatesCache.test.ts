import { Graph } from '@dagrejs/graphlib';
import { graphSerializer } from '@proteinjs/util';
import { SourceRepository } from '../src/SourceRepository';
import {
  SOURCE_REPOSITORY_FILTER_QUALIFIED_NAME,
  SourceRepositoryFilter,
  getSourceRepositoryFilters,
} from '../src/SourceRepositoryFilter';
import { SourceType, SourceRelationship } from '../src/sourceGraphTypes';
import { ClassDeclaration, InterfaceDeclaration } from '../src/types';

const REPO_KEY = '__proteinjs_reflection_SourceRepository';

/**
 * A package's generated index merges its source graph at load — AFTER requiring its own modules — so a registry
 * read made at module scope (a static holder, a class field initializer, a declaration constructed by the
 * `objects()` walk itself) runs before that package's graph, and before every later package's graph, has merged.
 * `objects()` caches per type, so without invalidation such a read stood for the rest of the process. The sharpest
 * case: the filter list (`SourceRepositoryFilter`) cached `[]` before a test door merged its filter — every later
 * lookup ran unfiltered and the spanner sample's `test` database won the default (thought verify 39186875346,
 * skills verify 39216898674). A later merge must drop the caches so the next read heals, and the premature read
 * must be loud — once, never a throw — so the seam is seen instead of a `test` database.
 */
describe('SourceRepository.merge invalidates the object caches', () => {
  const g: any = typeof window !== 'undefined' ? window : globalThis;
  let saved: any;

  const LOADER = '@test/core/Loader';
  const LOADER_A = '@test/pkg-a/LoaderA';
  const LOADER_B = '@test/pkg-b/LoaderB';
  const FILTER = '@test/pkg-c/OnlyLoaderAFilter';

  class LoaderA {}
  class LoaderB {}
  class OnlyLoaderAFilter implements SourceRepositoryFilter {
    filterObject(qualifiedName: string): boolean {
      return qualifiedName !== LOADER_B;
    }
  }

  beforeEach(() => {
    saved = g[REPO_KEY];
    delete g[REPO_KEY];
  });

  afterEach(() => {
    jest.restoreAllMocks();
    if (saved === undefined) {
      delete g[REPO_KEY];
    } else {
      g[REPO_KEY] = saved;
    }
  });

  const classDeclaration = (packageName: string, name: string) =>
    Object.assign(
      new ClassDeclaration(packageName, name, false, false, 'public', [], [], [], [], [], `src/${name}.ts`),
      { sourceType: SourceType.class }
    );

  /** Graph A — what the core package's generated index merges: the Loader interface and LoaderA. */
  function mergeGraphA() {
    const graph = new Graph();
    graph.setNode(
      LOADER,
      Object.assign(new InterfaceDeclaration('@test/core', 'Loader', [], [], [], [], 'src/Loader.ts'), {
        sourceType: SourceType.interface,
      })
    );
    graph.setEdge(LOADER, '@proteinjs/reflection/Loadable', SourceRelationship.extendsInterface);
    graph.setNode(LOADER_A, classDeclaration('@test/pkg-a', 'LoaderA'));
    graph.setEdge(LOADER_A, LOADER, SourceRelationship.implementsInterface);
    SourceRepository.merge(graphSerializer.serialize(graph), { [LOADER_A]: LoaderA });
  }

  /** Graph B — a later package's generated index: one more Loader. */
  function mergeGraphB() {
    const graph = new Graph();
    graph.setNode(LOADER_B, classDeclaration('@test/pkg-b', 'LoaderB'));
    graph.setEdge(LOADER_B, LOADER, SourceRelationship.implementsInterface);
    SourceRepository.merge(graphSerializer.serialize(graph), { [LOADER_B]: LoaderB });
  }

  /** Graph C — a test door's generated index: a SourceRepositoryFilter that hides LoaderB. */
  function mergeGraphC() {
    const graph = new Graph();
    graph.setNode(FILTER, classDeclaration('@test/pkg-c', 'OnlyLoaderAFilter'));
    graph.setEdge(FILTER, SOURCE_REPOSITORY_FILTER_QUALIFIED_NAME, SourceRelationship.implementsInterface);
    SourceRepository.merge(graphSerializer.serialize(graph), { [FILTER]: OnlyLoaderAFilter });
  }

  const loaderNames = () =>
    SourceRepository.get()
      .objects<object>(LOADER)
      .map((object) => object.constructor.name)
      .sort();

  /** A module-scope reader: what a static holder or a field initializer does while a generated index loads. */
  function readsTheRegistryAtModuleScope() {
    return SourceRepository.get().objects<object>(LOADER);
  }

  /** The cache cases read early on purpose; the warning that read earns is the loud cases' subject, not theirs. */
  const silenceTheWarning = () => jest.spyOn(console, 'warn').mockImplementation(() => undefined);

  test('a type read before a later merge carried more of it is re-resolved on the next read', () => {
    silenceTheWarning();
    mergeGraphA();
    expect(loaderNames()).toEqual(['LoaderA']);

    mergeGraphB();
    expect(loaderNames()).toEqual(['LoaderA', 'LoaderB']);
    expect(
      SourceRepository.get()
        .objectsWithNames<object>(LOADER)
        .map((named) => named.qualifiedName)
        .sort()
    ).toEqual([LOADER_A, LOADER_B]);
  });

  test('the filter list read before the filter merged is re-resolved: a later-merged filter applies to every type', () => {
    silenceTheWarning();
    mergeGraphA();
    mergeGraphB();
    // This read resolves the filter list (empty so far) and caches both loaders.
    expect(loaderNames()).toEqual(['LoaderA', 'LoaderB']);

    mergeGraphC();
    expect(getSourceRepositoryFilters()).toHaveLength(1);
    expect(loaderNames()).toEqual(['LoaderA']);
  });

  test('reads made after the last merge are resolved once (the cache still holds between merges)', () => {
    mergeGraphA();
    mergeGraphB();
    const first = SourceRepository.get().objects<object>(LOADER);
    const second = SourceRepository.get().objects<object>(LOADER);
    expect(second).toBe(first);
  });

  describe('a read before the graph was whole is loud', () => {
    test('a filter-list read followed by a merge warns once, naming the reader and the merging package; it never throws', () => {
      const warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
      mergeGraphA();
      readsTheRegistryAtModuleScope();
      // Nothing is known to be premature until a merge follows the read.
      expect(warn).not.toHaveBeenCalled();

      expect(() => mergeGraphB()).not.toThrow();
      expect(warn).toHaveBeenCalledTimes(1);
      const message = String(warn.mock.calls[0][0]);
      expect(message).toContain(SOURCE_REPOSITORY_FILTER_QUALIFIED_NAME);
      expect(message).toContain('@test/pkg-b');
      expect(message).toContain('readsTheRegistryAtModuleScope');

      // Once per repository: a second premature read and merge add no second line.
      readsTheRegistryAtModuleScope();
      mergeGraphC();
      expect(warn).toHaveBeenCalledTimes(1);
    });

    test('reads made after the last merge are silent', () => {
      const warn = jest.spyOn(console, 'warn').mockImplementation(() => undefined);
      mergeGraphA();
      mergeGraphB();
      mergeGraphC();
      expect(loaderNames()).toEqual(['LoaderA']);
      expect(getSourceRepositoryFilters()).toHaveLength(1);
      expect(warn).not.toHaveBeenCalled();
    });
  });
});
