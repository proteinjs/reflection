import { Loadable } from '@proteinjs/reflection';

export interface Plugin extends Loadable {
  id: string;
}

export class AlphaPlugin implements Plugin {
  id = 'alpha';
}

export class AardvarkPlugin implements Plugin {
  id = 'aardvark';
}
