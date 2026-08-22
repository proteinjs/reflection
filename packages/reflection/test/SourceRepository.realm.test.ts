import { SourceRepository } from '../src/SourceRepository';

const REPO_KEY = '__proteinjs_reflection_SourceRepository';

/**
 * `SourceRepository.get()` anchors its singleton on the global object to unify multiple module
 * copies within one realm. Some hosts (jest's per-test-file sandboxes) lazily copy the outer
 * process's global properties into each sandbox's global — handing a sandbox another realm's
 * repository, whose cached Table/Loadable objects close over the other realm's module state and
 * global flags (the 2026-08 `task.permissionSource` flaky class). `get()` must detect a foreign
 * realm's instance and mint a realm-local one instead.
 */
describe('SourceRepository.get realm scoping', () => {
  const g: any = typeof window !== 'undefined' ? window : globalThis;
  let saved: any;

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

  test("a foreign realm's leaked instance is replaced with a realm-local repository", () => {
    // Simulate the host-global leak: an instance created in another realm (its realmGlobal is
    // that realm's global object, not ours). An instance minted by pre-fix code (no realm stamp)
    // is the same case: it cannot prove it belongs to this realm.
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
});
