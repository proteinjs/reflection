import { Loadable } from '@proteinjs/reflection';

export type LoadableForeignType = Loadable & { z: number };

export type OptionalLoadableForeignType = Loadable & { z: number };

export const implementsOptionalLoadableForeignType: OptionalLoadableForeignType = { z: 1 };

export type NotLoadableForeignType = { z: number };

export interface LoadableForeignInterface extends Loadable {
  z: number;
}

export interface OptionalLoadableForeignInterface extends Loadable {
  z: number;
}

export class ImplementsOptionalLoadableForeignInterface implements OptionalLoadableForeignInterface {
  z = 1;
}

export interface NotLoadableForeignInterface {
  z: number;
}

export abstract class LoadableForeignAbstractClass implements Loadable {
  abstract z: number;
}

export abstract class OptionalLoadableForeignAbstractClass implements Loadable {
  abstract z: number;
}

export class ImplementsOptionalLoadableForeignAbstractClass extends OptionalLoadableForeignAbstractClass {
  z = 1;
}

export abstract class NotLoadableForeignAbstractClass {
  abstract z: number;
}
