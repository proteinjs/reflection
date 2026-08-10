import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { dependencyHasSourceGraph } from '../src/codegen/writeGeneratedIndex';

/**
 * The dependency-import gate (MOBILE_SUPPORT S11 bundle diet): generated indexes import a
 * dependency iff it ships `dist/generated/index.js` — the artifact writeGeneratedIndex
 * itself emits. Outcome tests over a real on-disk npm layout, including the hoisted case.
 */
describe('dependencyHasSourceGraph', () => {
  let root: string;

  const mkpkg = (base: string, name: string, withGraph: boolean) => {
    const dir = path.join(base, 'node_modules', name);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify({ name, version: '1.0.0' }));
    if (withGraph) {
      const gen = path.join(dir, 'dist', 'generated');
      fs.mkdirSync(gen, { recursive: true });
      fs.writeFileSync(path.join(gen, 'index.js'), '// sourceGraph artifact');
    }
  };

  beforeEach(() => {
    root = fs.mkdtempSync(path.join(os.tmpdir(), 'refl-gate-'));
  });

  afterEach(() => {
    fs.rmdirSync(root, { recursive: true });
  });

  it('accepts a dependency that ships dist/generated/index.js', () => {
    mkpkg(root, '@scope/reflected-dep', true);
    expect(dependencyHasSourceGraph(root, '@scope/reflected-dep')).toBe(true);
  });

  it('rejects a resolvable dependency without the artifact (icon sets, ui libs)', () => {
    mkpkg(root, '@fortawesome/pro-solid-svg-icons', false);
    expect(dependencyHasSourceGraph(root, '@fortawesome/pro-solid-svg-icons')).toBe(false);
  });

  it('finds the artifact through hoisted node_modules (walks up like npm resolution)', () => {
    const consumer = path.join(root, 'node_modules', '@scope', 'consumer');
    fs.mkdirSync(consumer, { recursive: true });
    mkpkg(root, '@scope/hoisted-reflected', true);
    expect(dependencyHasSourceGraph(consumer, '@scope/hoisted-reflected')).toBe(true);
  });

  it('stops at the nearest resolved copy: a local artifact-less copy shadows a hoisted one', () => {
    const consumer = path.join(root, 'pkg');
    fs.mkdirSync(consumer, { recursive: true });
    mkpkg(consumer, 'dep', false);
    mkpkg(root, 'dep', true);
    expect(dependencyHasSourceGraph(consumer, 'dep')).toBe(false);
  });

  it('rejects an unresolvable dependency', () => {
    expect(dependencyHasSourceGraph(root, 'not-installed-anywhere')).toBe(false);
  });
});
