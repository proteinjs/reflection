import { Loadable } from '@proteinjs/reflection';

// One file declares Gear twice, in TypeScript's type and value spaces: one declaring file, so the
// name is not shared, though it reaches the index. Only a name declared by two FILES is refused.
export interface Gear extends Loadable {
  teeth: number;
}

export const Gear = { teeth: 12 };
