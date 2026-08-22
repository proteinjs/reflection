import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import { createSourceGraph } from '../src/parser/createSourceGraph';

/**
 * The parser must stamp `isAbstract: true` on a class declared `abstract` — the runtime's
 * only defense against instantiating an abstract class (`objects()` filters on it) is this flag.
 *
 * The real-world mis-stamp (2026-08-21): `MachineAccount`, an `export abstract class` with
 * generics implementing an interface, was emitted with `isAbstract: false` into a generated
 * source graph. Root cause: `createClassDeclaration` derived class abstractness by scanning the
 * class's get/set ACCESSORS for the `abstract` modifier — the vendored typescript-parser never
 * recorded the class-level `abstract` keyword at all. Any abstract class without an abstract
 * accessor member (i.e. nearly all of them, MachineAccount included: abstract PROPERTIES plus
 * concrete getters) was stamped concrete.
 */

const PACKAGE_NAME = '@test/machine-account-shape';

// Mirrors the real MachineAccount shape: export abstract class, generic interface implemented,
// abstract properties, concrete get accessors — and NO abstract accessors.
const MACHINE_ACCOUNT_SHAPE = `
import { SourceRecordLoader } from '@proteinjs/db';
import { User } from './User';

export abstract class MachineAccount implements SourceRecordLoader<User> {
  abstract id: string;
  abstract email: string;
  abstract accountName: string;
  abstract roles: string[];
  abstract secretName: string;

  get table(): string {
    return 'user';
  }

  get record(): SourceRecordLoader<User>['record'] {
    return {} as SourceRecordLoader<User>['record'];
  }
}

export class ConcreteMachineAccount extends MachineAccount {
  id = '1';
  email = 'machine@example.com';
  accountName = 'machine';
  roles: string[] = [];
  secretName = 'machine-secret';
}
`;

const OTHER_ABSTRACT_SHAPES = `
export abstract class PlainAbstract {
  abstract run(): void;
}

abstract class UnexportedAbstract {
  abstract run(): void;
}
export { UnexportedAbstract };
`;

describe('parser stamps class-level isAbstract', () => {
  let dir: string;
  let graph: any;

  beforeAll(async () => {
    dir = fs.mkdtempSync(path.join(os.tmpdir(), 'abstract-class-declaration-'));
    fs.writeFileSync(path.join(dir, 'package.json'), JSON.stringify({ name: PACKAGE_NAME }));
    fs.mkdirSync(path.join(dir, 'src'));
    fs.writeFileSync(path.join(dir, 'src', 'MachineAccount.ts'), MACHINE_ACCOUNT_SHAPE);
    fs.writeFileSync(path.join(dir, 'src', 'OtherAbstractShapes.ts'), OTHER_ABSTRACT_SHAPES);
    graph = await createSourceGraph(dir);
  });

  afterAll(() => {
    fs.rmdirSync(dir, { recursive: true });
  });

  test('abstract class with generics implementing an interface (the MachineAccount shape) is stamped isAbstract: true', () => {
    const machineAccount = graph.node(`${PACKAGE_NAME}/MachineAccount`);
    expect(machineAccount).toBeTruthy();
    expect(machineAccount.isAbstract).toBe(true);
  });

  test('plain export abstract class is stamped isAbstract: true', () => {
    const plainAbstract = graph.node(`${PACKAGE_NAME}/PlainAbstract`);
    expect(plainAbstract).toBeTruthy();
    expect(plainAbstract.isAbstract).toBe(true);
  });

  test('concrete subclass is stamped isAbstract: false', () => {
    const concrete = graph.node(`${PACKAGE_NAME}/ConcreteMachineAccount`);
    expect(concrete).toBeTruthy();
    expect(concrete.isAbstract).toBe(false);
  });
});
