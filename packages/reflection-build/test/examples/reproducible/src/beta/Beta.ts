import { Plugin } from '../alpha/Alpha';

export class BetaPlugin implements Plugin {
  id = 'beta';
}

export const betaSetting: Plugin = { id: 'beta-setting' };
