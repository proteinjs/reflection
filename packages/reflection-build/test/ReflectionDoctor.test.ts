import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { ReflectionDoctor } from '../src/ReflectionDoctor';
import { writeGeneratedIndex } from '../src/codegen/writeGeneratedIndex';

/**
 * reflection-doctor (task #104 §3.1): purely analytical CLI — registered-inventory print,
 * orphan detection (the undeclared-dep/typo class, today silently pruned at runtime), and
 * --explain parent-edge traces naming the broken hop. Executes no dependency code: graphs
 * are harvested statically from dist/generated artifacts.
 *
 * Red-before-green: written against the finished doctor api/trace format; fails before
 * ReflectionDoctor exists.
 */
describe('ReflectionDoctor', () => {
  const fixtureA = path.join(__dirname, 'examples', 'source-repository', 'a');

  describe('inventory + healthy fixture (fixture a)', () => {
    it('reports dependency graphs, own graph size, and no orphans', async () => {
      const doctor = new ReflectionDoctor(fixtureA);
      const report = await doctor.diagnose();

      expect(report.dependencies.loaded).toContain('@proteinjs/reflection-build-test-b');
      expect(report.dependencies.withoutGraph).toContain('@proteinjs/reflection');
      expect(report.nodeCount).toBeGreaterThan(0);
      expect(report.edgeCount).toBeGreaterThan(0);
      expect(report.sourceLinkCount).toBeGreaterThan(0);
      expect(report.orphans).toEqual([]);
      expect(report.drift.missingFromDist).toEqual([]);
      expect(report.drift.onlyInDist).toEqual([]);
      expect(report.healthy).toBe(true);
      expect(report.text).toContain('@proteinjs/reflection-build-test-b');
    });

    it('explains a Loadable chain through a foreign graph, naming each hop', async () => {
      const doctor = new ReflectionDoctor(fixtureA);
      const explanation = await doctor.explain('ImplementsLoadableForeignInterface');

      expect(explanation.text).toContain('@proteinjs/reflection-build-test-a/ImplementsLoadableForeignInterface');
      expect(explanation.text).toContain(
        'implements interface @proteinjs/reflection-build-test-b/LoadableForeignInterface'
      );
      expect(explanation.text).toContain('[edge OK]');
      expect(explanation.text).toContain('graph @proteinjs/reflection-build-test-b: LOADED');
      expect(explanation.verdict).toContain('Loadable');
      expect(explanation.verdict).toContain(`objects('@proteinjs/reflection-build-test-b/LoadableForeignInterface')`);
    });

    it('explains a deliberately non-Loadable type without inventing a defect', async () => {
      const doctor = new ReflectionDoctor(fixtureA);
      const explanation = await doctor.explain('ImplementsNotLoadableForeignInterface');

      expect(explanation.verdict).toContain('NOT Loadable');
      // The parent package's graph IS loaded; the parent just is not Loadable there.
      expect(explanation.text).toContain('@proteinjs/reflection-build-test-b/NotLoadableForeignInterface');
      expect(explanation.text).toContain('not Loadable');
    });
  });

  describe('broken chains (crafted fixture)', () => {
    let pkgDir: string;

    const emitFixture = async (pkgDirToBuild: string) => {
      const generatedDir = path.join(pkgDirToBuild, 'generated');
      fs.mkdirSync(generatedDir, { recursive: true });
      const generatedIndexPath = path.join(generatedDir, 'index.ts');
      await writeGeneratedIndex(pkgDirToBuild, generatedDir, generatedIndexPath, ['src']);
      // The doctor reads the built artifact; the sourceGraph/sourceLinks lines it parses are
      // identical between generated/index.ts and its compiled dist twin.
      const distGeneratedDir = path.join(pkgDirToBuild, 'dist', 'generated');
      fs.mkdirSync(distGeneratedDir, { recursive: true });
      fs.copyFileSync(generatedIndexPath, path.join(distGeneratedDir, 'index.js'));
    };

    beforeEach(() => {
      pkgDir = fs.mkdtempSync(path.join(os.tmpdir(), 'refl-doctor-'));
      fs.writeFileSync(
        path.join(pkgDir, 'package.json'),
        JSON.stringify({ name: '@test/doctor-fixture', version: '1.0.0', dependencies: {} }, null, 2)
      );
      fs.mkdirSync(path.join(pkgDir, 'src'));
      fs.writeFileSync(path.join(pkgDir, 'src', 'index.ts'), `export * from './Orphan';\n`);
      fs.writeFileSync(
        path.join(pkgDir, 'src', 'Orphan.ts'),
        `import { ForeignBase } from '@undeclared/pkg';\n\nexport class Orphan implements ForeignBase {}\n`
      );
    });

    afterEach(() => {
      fs.rmdirSync(pkgDir, { recursive: true });
    });

    it('detects the orphan: a kept node whose foreign parent resolves in no loaded graph', async () => {
      await emitFixture(pkgDir);
      const doctor = new ReflectionDoctor(pkgDir);
      const report = await doctor.diagnose();

      expect(report.orphans).toHaveLength(1);
      expect(report.orphans[0].qualifiedName).toBe('@test/doctor-fixture/Orphan');
      expect(report.orphans[0].unresolvedParent).toBe('@undeclared/pkg/ForeignBase');
      expect(report.orphans[0].cause).toContain('not a declared dependency');
      expect(report.healthy).toBe(false);
      expect(report.text).toContain('@undeclared/pkg/ForeignBase');
    });

    it('--explain names the broken hop and the cause', async () => {
      await emitFixture(pkgDir);
      const doctor = new ReflectionDoctor(pkgDir);
      const explanation = await doctor.explain('Orphan');

      expect(explanation.text).toContain('implements interface @undeclared/pkg/ForeignBase');
      expect(explanation.text).toContain('graph @undeclared/pkg: NOT LOADED');
      expect(explanation.verdict).toContain('NOT Loadable');
      expect(explanation.verdict).toContain('@undeclared/pkg/ForeignBase');
      expect(explanation.verdict).toContain('not a declared dependency');
    });

    it('classifies a declared-but-not-reflection-built dependency', async () => {
      const packageJson = JSON.parse(fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf-8'));
      packageJson.dependencies['@undeclared/pkg'] = '1.0.0';
      fs.writeFileSync(path.join(pkgDir, 'package.json'), JSON.stringify(packageJson, null, 2));
      const depDir = path.join(pkgDir, 'node_modules', '@undeclared', 'pkg');
      fs.mkdirSync(depDir, { recursive: true });
      fs.writeFileSync(path.join(depDir, 'package.json'), JSON.stringify({ name: '@undeclared/pkg' }));

      await emitFixture(pkgDir);
      const doctor = new ReflectionDoctor(pkgDir);
      const report = await doctor.diagnose();

      expect(report.orphans).toHaveLength(1);
      expect(report.orphans[0].cause).toContain('not reflection-built');
      expect(report.dependencies.withoutGraph).toContain('@undeclared/pkg');
    });

    it('does not report inline type-expression parents as orphans (the ArrayMembershipOp class)', async () => {
      // A union alias with a doc comment inside: the parser captures the raw expression as a
      // parent name (leading '/'), dodging the '{'-name guard — a junk, never-resolvable
      // parent edge. The doctor must classify it as inline-expression noise, not as an
      // undeclared dependency.
      fs.writeFileSync(
        path.join(pkgDir, 'src', 'Ops.ts'),
        `export type MembershipOp =\n  /** Insert */\n  | { op: 'add'; id: string }\n  /** Remove */\n  | { op: 'remove'; id: string };\n`
      );
      await emitFixture(pkgDir);

      const doctor = new ReflectionDoctor(pkgDir);
      const report = await doctor.diagnose();
      // Only the real orphan remains; the junk parent is excluded.
      expect(report.orphans).toHaveLength(1);
      expect(report.orphans[0].unresolvedParent).toBe('@undeclared/pkg/ForeignBase');
    });

    it('detects drift: sources added after the artifact was built', async () => {
      await emitFixture(pkgDir);
      fs.writeFileSync(
        path.join(pkgDir, 'src', 'Late.ts'),
        `import { ForeignBase } from '@undeclared/pkg';\n\nexport class Late implements ForeignBase {}\n`
      );

      const doctor = new ReflectionDoctor(pkgDir);
      const report = await doctor.diagnose();
      expect(report.drift.missingFromDist).toContain('@test/doctor-fixture/Late');
      expect(report.healthy).toBe(false);
    });

    it('--explain diagnoses a declaration that exists but is not exported', async () => {
      fs.writeFileSync(
        path.join(pkgDir, 'src', 'Hidden.ts'),
        `import { ForeignBase } from '@undeclared/pkg';\n\nclass Hidden implements ForeignBase {}\n`
      );
      await emitFixture(pkgDir);

      const doctor = new ReflectionDoctor(pkgDir);
      const explanation = await doctor.explain('Hidden');
      expect(explanation.verdict).toContain('not exported');
      expect(explanation.text).toContain('Hidden.ts');
    });

    it('--explain diagnoses a stale dist: declaration in sources but not in the artifact', async () => {
      await emitFixture(pkgDir);
      fs.writeFileSync(
        path.join(pkgDir, 'src', 'Late.ts'),
        `import { ForeignBase } from '@undeclared/pkg';\n\nexport class Late implements ForeignBase {}\n`
      );

      const doctor = new ReflectionDoctor(pkgDir);
      const explanation = await doctor.explain('Late');
      expect(explanation.verdict.toLowerCase()).toContain('stale');
      expect(explanation.verdict).toContain('rebuild');
    });
  });
});
