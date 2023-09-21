import { Fs } from '@brentbahry/util';
import { ConversationTemplate } from '../ConversationTemplate';
import path from 'path';
import tConfig from './tsconfig.json';

export const createPackageConversationTemplate: ConversationTemplate = {
  name: 'Create Package',
  keywords: [
    'package',
    'create package',
    'create',
  ],
  description: 'Create a npm package',
  questions: [
    { text: `What should the package name be?` },
    { text: `What should the package version be?`, optional: true },
    { text: `Is this a typescript project?` },
    { text: `Are there any default dependencies you'd like to include?`, optional: true },
  ],
  instructions: async () => {
    const jestConfig = await Fs.readFile(path.join(__dirname, `./jest.config.js`));
    const tsConfig = await Fs.readFile(path.join(__dirname, `./tsconfig.json`));
    return [
      `Create a new npm package with the provided name, version (if one wasn't provided, default to 0.1), and any default dependencies provided`,
      `Add these scripts: "start": "node ./dist/index.js", "test": "jest"`,
      `Add these dev dependencies: jest`,
      `If it's a typescript project, add these dev dependencies: @types/jest, ts-jest`,
      `If it's a typescript project, add these scripts: "watch": "tsc -w -p ."`,
      `Create an index file in the package directory (choose extension based on if it's a typescript project or not)`,
      `Create src and test folders in the package directory`,
      `Create a jest.config.js file in the test directory with the following content: ${jestConfig}`,
      `Create a .gitignore file in the package directory that ignores the node_modules and dist directories`,
      `If it's a typescript project, create a tsconfig.json file in the pakage directory with the following content: ${tsConfig}`,
      `Install the package`,
    ];
  },
}