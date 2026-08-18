#!/usr/bin/env node

import { build } from './build';

(async function () {
  try {
    await build({ fix: process.argv.includes('--fix') });
  } catch (error: any) {
    // Contract conflicts are a diagnosis for humans — print the message, not a stack trace.
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  }
})();
