import { Graph } from '@dagrejs/graphlib';
import { graphSerializer } from '@proteinjs/util';
import { SourceRepository } from '../src/SourceRepository';
import { SourceType, SourceRelationship } from '../src/sourceGraphTypes';
import { ClassDeclaration, InterfaceDeclaration } from '../src/types';

const REPO_KEY = '__proteinjs_reflection_SourceRepository';

/**
 * `SourceRepository.get()` anchors its singleton on the global object to unify multiple module
 * copies within one realm. Some hosts (jest's per-test-file sandboxes) lazily copy the outer
 * process's global properties into each sandbox's global — handing a sandbox another realm's
 * repository, whose cached Table/Loadable objects close over the other realm's module state and
 * global flags (the 2026-08 `task.permissionSource` flaky class). `get()` must detect a foreign
 * realm's instance and mint a realm-local one instead.
 *
 * The realm check is keyed on the stamp a creating copy leaves on the instance. A copy of this
 * package that predates the stamp leaves none — and such a copy may already have populated the
 * repository (every package's generated index merges its source graph into whichever copy it
 * resolved). An unstamped instance must therefore be ADOPTED (stamped for this realm and reused),
 * never replaced: replacing it drops every registration the older copy made ("Unable to find
 * type" across the board — the 2026-08-23 mixed-version dev-workspace red).
 */
describe('SourceRepository.get realm scoping', () => {
  const g: any = typeof window !== 'undefined' ? window : globalThis;
  let saved: any;

  const LOADER = '@test/realm/Loader';
  const LOADER_IMPL = '@test/realm/LoaderImpl';

  class LoaderImpl {}

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

  /** What a package's generated index does at load: merge its source graph into the repository. */
  function registerLoader() {
    const graph = new Graph();
    graph.setNode(
      LOADER,
      Object.assign(new InterfaceDeclaration('@test/realm', 'Loader', [], [], [], [], 'src/Loader.ts'), {
        sourceType: SourceType.interface,
      })
    );
    graph.setEdge(LOADER, '@proteinjs/reflection/Loadable', SourceRelationship.extendsInterface);
    graph.setNode(
      LOADER_IMPL,
      Object.assign(
        new ClassDeclaration(
          '@test/realm',
          'LoaderImpl',
          false,
          false,
          'public',
          [],
          [],
          [],
          [],
          [],
          'src/LoaderImpl.ts'
        ),
        { sourceType: SourceType.class }
      )
    );
    graph.setEdge(LOADER_IMPL, LOADER, SourceRelationship.implementsInterface);
    SourceRepository.merge(graphSerializer.serialize(graph), { [LOADER_IMPL]: LoaderImpl });
  }

  test("a foreign realm's leaked instance is replaced with a realm-local repository", () => {
    // Simulate the host-global leak: an instance created in another realm (its realmGlobal is
    // that realm's global object, not ours).
    const foreignRealmGlobal = {};
    const leaked: any = Object.create(SourceRepository.prototype);
    leaked.realmGlobal = foreignRealmGlobal;
    g[REPO_KEY] = leaked;

    const repo = SourceRepository.get();
    expect(repo).not.toBe(leaked);
    expect(g[REPO_KEY]).toBe(repo);
  });

  test('within one realm the repository is a stable singleton (copy unification preserved)', () => {
    const first = SourceRepository.get();
    expect(SourceRepository.get()).toBe(first);
    // A second module copy in the same realm resolves the same global object, so it gets the
    // same instance — the realm check must not evict a same-realm repository.
    expect(g[REPO_KEY]).toBe(first);
  });

  test('an unstamped instance (minted by a pre-stamp copy) is adopted, its registrations intact', () => {
    // An older copy of this package minted the repository and packages registered into it. A
    // pre-stamp copy's instance is exactly a populated instance with no realm stamp.
    registerLoader();
    const oldCopyInstance: any = g[REPO_KEY];
    delete oldCopyInstance.realmGlobal;

    // Now the newer copy resolves the repository in the same realm: the older copy's
    // registrations must still be resolvable through it ...
    const objects = SourceRepository.get().objects(LOADER);
    expect(objects).toHaveLength(1);
    expect(objects[0]).toBeInstanceOf(LoaderImpl);

    // ... because the instance was adopted (same instance, now stamped for this realm), not
    // replaced. Identity is asserted as booleans: a failure diff would otherwise pretty-print the
    // global object the stamp points at.
    const repo: any = SourceRepository.get();
    expect(repo === oldCopyInstance).toBe(true);
    expect(repo.realmGlobal === g).toBe(true);
    expect(g[REPO_KEY] === oldCopyInstance).toBe(true);
  });
});
