// Same exported name as src/beta/Shape.ts. Neither declaration is Loadable, so the build prunes the
// name and it never reaches the generated index: ordinary TypeScript, not a shared name to refuse.
export type Shape = { sides: number };
