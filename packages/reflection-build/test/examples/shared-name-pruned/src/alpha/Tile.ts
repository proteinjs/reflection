import { Loadable } from '@proteinjs/reflection';

export interface Tile extends Loadable {
  id: string;
}

export class SquareTile implements Tile {
  id = 'square';
}
