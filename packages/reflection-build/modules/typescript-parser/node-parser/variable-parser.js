'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.parseVariable = void 0;
const typescript_1 = require('typescript');
const VariableDeclaration_1 = require('../declarations/VariableDeclaration');
const TypescriptHeroGuards_1 = require('../type-guards/TypescriptHeroGuards');
const parse_utilities_1 = require('./parse-utilities');
const parseType_1 = require('./changes/parseType');
/**
 * Parse a variable. Information such as "is the variable const" are calculated here.
 *
 * @export
 * @param {(Resource | CallableDeclaration)} parent
 * @param {VariableStatement} node
 */
function parseVariable(parent, node) {
  const isConst = node.declarationList.getChildren().some((o) => o.kind === typescript_1.SyntaxKind.ConstKeyword);
  if (node.declarationList && node.declarationList.declarations) {
    node.declarationList.declarations.forEach((o) => {
      const declaration = new VariableDeclaration_1.VariableDeclaration(
        o.name.getText(),
        isConst,
        parse_utilities_1.isNodeExported(node),
        parseType_1.parseType(o),
        node.getStart(),
        node.getEnd()
      );
      if (TypescriptHeroGuards_1.isCallableDeclaration(parent)) {
        parent.variables.push(declaration);
      } else {
        parent.declarations.push(declaration);
      }
    });
  }
}
exports.parseVariable = parseVariable;
