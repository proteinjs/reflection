import * as fs from 'fs';
import * as path from 'path';
import { ExamplePackageFixture } from './ExamplePackageFixture';

/**
 * The same sources build to the same bytes: the generated index, the compiled dist and the
 * packed tarball do not depend on where the package is checked out, nor on the order the
 * filesystem hands the source files back (which varies by filesystem and from run to run).
 *
 * The enumeration is stubbed at the glob the build reads its sources through: the real glob's
 * result in a fixed base order (code-unit sorted — the glob's own order varies from copy to copy,
 * so a reversal of it would not be the same reversal twice), reordered by `mockEnumerationOrder`.
 */
let mockEnumerationOrder: (paths: string[]) => string[] = (paths) => paths;
jest.mock('globby', () => {
  const actual = jest.requireActual('globby');
  const reordered = async (...args: any[]) => mockEnumerationOrder([...(await actual(...args))].sort());
  return Object.assign(reordered, actual);
});

const BUILD_TIMEOUT_MS = 120 * 1000;

describe('reproducible generated index', () => {
  const fixture = new ExamplePackageFixture('reproducible', '@proteinjs/reflection-build-test-reproducible');

  afterEach(() => {
    mockEnumerationOrder = (paths) => paths;
  });

  afterAll(() => fixture.dispose());

  test(
    'two checkouts at different absolute paths ship byte-identical dist/generated/index.js and tarballs',
    async () => {
      const shipped = [];
      for (const location of ['one/pkg', 'two/a/much/deeper/checkout/elsewhere']) {
        const packageDir = fixture.materialize(location);
        await fixture.generate(packageDir);
        fixture.compile(packageDir);
        const generatedJs = fs.readFileSync(path.join(packageDir, 'dist', 'generated', 'index.js'));
        expect(generatedJs.toString()).not.toContain(packageDir);
        shipped.push({ generatedJs: fixture.sha256(generatedJs), tarball: fixture.packSha256(packageDir) });
      }

      expect(shipped[1]).toEqual(shipped[0]);
    },
    BUILD_TIMEOUT_MS
  );

  test(
    'the generated index does not depend on the order the source files are enumerated',
    async () => {
      const orders: { [name: string]: (paths: string[]) => string[] } = {
        asEnumerated: (paths) => paths,
        reversed: (paths) => [...paths].reverse(),
        rotated: (paths) => [...paths.slice(3), ...paths.slice(0, 3)],
      };
      const generated: { [name: string]: string } = {};
      for (const name of Object.keys(orders)) {
        mockEnumerationOrder = orders[name];
        generated[name] = await fixture.generate(fixture.materialize(`order-${name}/pkg`));
      }

      expect(generated.reversed).toBe(generated.asEnumerated);
      expect(generated.rotated).toBe(generated.asEnumerated);
    },
    BUILD_TIMEOUT_MS
  );

  test(
    'node filePaths are package-relative, with / separators and no leading ./',
    async () => {
      const graph = fixture.graphOf(await fixture.generate(fixture.materialize('relative/pkg')));
      const gamma = graph.nodes.find((node) => node.v === fixture.qualified('GammaPlugin'));
      expect(gamma?.value?.filePath).toBe('src/beta/deep/Gamma.ts');

      const filePaths = graph.nodes.map((node) => node.value?.filePath).filter((filePath) => !!filePath);
      expect(filePaths.length).toBeGreaterThan(0);
      expect(filePaths.filter((filePath) => !/^src\/[A-Za-z]+(\/[A-Za-z]+)*\.ts$/.test(filePath))).toEqual([]);
    },
    BUILD_TIMEOUT_MS
  );

  test(
    'nodes are emitted by file then qualified name, edges by child then parent, source links in node order',
    async () => {
      const generated = await fixture.generate(fixture.materialize('canonical/pkg'));
      const graph = fixture.graphOf(generated);
      const byCodeUnit = (keys: string[][]) =>
        [...keys].sort((a, b) => {
          const left = a.join('\0');
          const right = b.join('\0');
          return left < right ? -1 : left > right ? 1 : 0;
        });

      const nodeKeys = graph.nodes.map((node) => [node.value?.filePath || '', node.v]);
      expect(nodeKeys).toEqual(byCodeUnit(nodeKeys));
      expect(nodeKeys.slice(0, 2)).toEqual([
        ['', '@proteinjs/reflection/Loadable'],
        ['src/alpha/Alpha.ts', fixture.qualified('AardvarkPlugin')],
      ]);

      const edgeKeys = graph.edges.map((edge) => [edge.v, edge.w]);
      expect(edgeKeys).toEqual(byCodeUnit(edgeKeys));

      const linkedNames = (generated.match(/^\t'[^']+'/gm) || []).map((line) => line.slice(2, -1));
      const linkableNodeNames = graph.nodes
        .filter((node) => node.value && (node.value.sourceType === 0 || node.value.sourceType === 2))
        .map((node) => node.v);
      expect(linkedNames).toEqual(linkableNodeNames);
    },
    BUILD_TIMEOUT_MS
  );
});
