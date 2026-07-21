import * as ts from 'typescript';
// Test the SHIPPED parser (the compiled JS that `cp -r modules/ dist/modules/` publishes), not a
// re-transpile of its source — this is the exact code consumers' reflection builds execute.
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { TypescriptParser } = require('../modules/typescript-parser/TypescriptParser');

/**
 * A class method with an array-destructured, tuple-typed parameter — e.g.
 * `moveMouse(client: Client, [x, y]: [number, number])` — crashed the parser with
 * "Cannot read properties of undefined (reading 'map')": the vendored typescript-parser predates
 * TS 4.0's rename of TupleTypeNode.elementTypes to elements.
 */
const TUPLE_PARAM_SOURCE = `
export class CursorDriver {
  private cursor = { x: 0, y: 0 };

  async moveMouse(client: unknown, [x, y]: [number, number]): Promise<void> {
    this.cursor = { x, y };
  }

  standalone([a, b]: [string, boolean]): string {
    return b ? a : '';
  }
}
`;

test('parses array-destructured tuple-typed method params', () => {
  const sourceFile = ts.createSourceFile(
    'tuple-params.ts',
    TUPLE_PARAM_SOURCE,
    ts.ScriptTarget.ES2015,
    true,
    ts.ScriptKind.TS
  );
  const parser = new TypescriptParser();

  const file = parser.parseTypescript(sourceFile, process.cwd());

  const classDeclaration = file.declarations.find((d: { name?: string }) => d.name === 'CursorDriver');
  expect(classDeclaration).toBeTruthy();
  const moveMouse = classDeclaration.methods.find((m: { name: string }) => m.name === 'moveMouse');
  expect(moveMouse).toBeTruthy();
  // The tuple-bound parameter parses into an array-bound declaration carrying both elements.
  const boundParam = moveMouse.parameters[moveMouse.parameters.length - 1];
  expect(boundParam.parameters.map((p: { name: string }) => p.name)).toEqual(['x', 'y']);
  expect(boundParam.parameters.map((p: { type?: string }) => p.type)).toEqual(['number', 'number']);
});
