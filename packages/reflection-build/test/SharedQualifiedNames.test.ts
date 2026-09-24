import * as fs from 'fs';
import * as path from 'path';
import { ExamplePackageFixture } from './ExamplePackageFixture';

/**
 * One qualified name, one declaring file, for every name that reaches the generated index. The
 * index holds one declaration per qualified name, so a name exported by two files would keep only
 * the file parsed last and drop the other without a trace; the build refuses it instead. The rule
 * applies after the prune: a name whose declarations are all pruned (types, consts, interfaces that
 * are not Loadable) never reaches the index and is ordinary TypeScript.
 *
 * The enumeration is stubbed at the glob, as in the reproducible suite: the real glob's result in a
 * fixed base order (code-unit sorted), reordered by `mockEnumerationOrder`.
 */
let mockEnumerationOrder: (paths: string[]) => string[] = (paths) => paths;
jest.mock('globby', () => {
  const actual = jest.requireActual('globby');
  const reordered = async (...args: any[]) => mockEnumerationOrder([...(await actual(...args))].sort());
  return Object.assign(reordered, actual);
});

const BUILD_TIMEOUT_MS = 120 * 1000;

/** What one build did: the refusal's message, or the file whose declaration `name` holds in the index it wrote. */
const outcomeOf = (fixture: ExamplePackageFixture, packageDir: string, name: string) =>
  fixture.generate(packageDir).then(
    (generated) => ({
      built:
        fixture.graphOf(generated).nodes.find((node) => node.v === fixture.qualified(name))?.value?.filePath || null,
    }),
    (error: Error) => ({ refused: error.message })
  );

describe('a name exported by two files', () => {
  const sharedName = new ExamplePackageFixture('shared-name', '@proteinjs/reflection-build-test-shared-name');
  const prunedPair = new ExamplePackageFixture(
    'shared-name-pruned',
    '@proteinjs/reflection-build-test-shared-name-pruned'
  );
  // Widget is declared by two files. Gear (src/gamma/Gear.ts) is declared twice by ONE file, an
  // interface and a const, and reaches the index too: it is not a shared name, so it is not named.
  const refusal = [
    'reflection-build refused @proteinjs/reflection-build-test-shared-name: a name that reaches the generated index is declared in more than one file.',
    'The index holds one declaration per qualified name, so the file parsed last would replace the others without a trace.',
    'Give each declaration its own name (no index was written):',
    '  @proteinjs/reflection-build-test-shared-name/Widget: src/alpha/Widget.ts, src/beta/Widget.ts',
  ].join('\n');

  afterEach(() => {
    mockEnumerationOrder = (paths) => paths;
  });

  afterAll(() => {
    sharedName.dispose();
    prunedPair.dispose();
  });

  test(
    'reaching the index (an interface that extends Loadable, a class): the build refuses, naming the package, the name and both files, and writes no index',
    async () => {
      const packageDir = sharedName.materialize('refused/pkg');
      expect(await outcomeOf(sharedName, packageDir, 'Widget')).toEqual({ refused: refusal });
      expect(fs.existsSync(path.join(packageDir, 'generated', 'index.ts'))).toBe(false);
    },
    BUILD_TIMEOUT_MS
  );

  test(
    'the refusal names the files in package-relative path order, whatever order they are enumerated in',
    async () => {
      mockEnumerationOrder = (paths) => [...paths].reverse();
      expect(await outcomeOf(sharedName, sharedName.materialize('reversed/pkg'), 'Widget')).toEqual({
        refused: refusal,
      });
    },
    BUILD_TIMEOUT_MS
  );

  test(
    'pruned before the index (a type and an interface; two consts): the build writes the index, without the names',
    async () => {
      const packageDir = prunedPair.materialize('built/pkg');
      expect(await outcomeOf(prunedPair, packageDir, 'Shape')).toEqual({ built: null });
      expect(await outcomeOf(prunedPair, packageDir, 'LIMITS')).toEqual({ built: null });
      expect(await outcomeOf(prunedPair, packageDir, 'SquareTile')).toEqual({ built: 'src/alpha/Tile.ts' });
    },
    BUILD_TIMEOUT_MS
  );
});
