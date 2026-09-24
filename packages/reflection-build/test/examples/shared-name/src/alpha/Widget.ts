import { Loadable } from '@proteinjs/reflection';

// Same exported name as src/beta/Widget.ts: the declaration contract.
export interface Widget extends Loadable {
  id: string;
}
