import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
// Test the SHIPPED parser (the compiled JS that `cp -r modules/ dist/modules/` publishes) through
// its FILE-based API, so the parser creates the SourceFile with ITS OWN typescript module. The
// test must not import typescript itself: if the test's copy and the parser's copy ever resolve
// differently (hoisting varies by environment), SyntaxKind numbers diverge and every node
// mis-dispatches — that exact cross-instance skew made this suite fail in CI only.
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
}
`;

test('parses array-destructured tuple-typed method params', async () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'parse-tuple-params-'));
  const filePath = path.join(dir, 'tuple-params.ts');
  fs.writeFileSync(filePath, TUPLE_PARAM_SOURCE);
  try {
    const file = await new TypescriptParser().parseFile(filePath, dir);

    const classDeclaration = file.declarations.find((d: { name?: string }) => d.name === 'CursorDriver');
    expect(classDeclaration).toBeTruthy();
    const moveMouse = classDeclaration.methods.find((m: { name: string }) => m.name === 'moveMouse');
    expect(moveMouse).toBeTruthy();
    // The tuple-bound parameter parses into an array-bound declaration carrying both elements.
    const boundParam = moveMouse.parameters[moveMouse.parameters.length - 1];
    expect(boundParam.parameters.map((p: { name: string }) => p.name)).toEqual(['x', 'y']);
    expect(boundParam.parameters.map((p: { type?: string }) => p.type)).toEqual(['number', 'number']);
  } finally {
    fs.rmdirSync(dir, { recursive: true });
  }
});
