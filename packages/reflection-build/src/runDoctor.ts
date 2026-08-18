#!/usr/bin/env node

import { ReflectionDoctor } from './ReflectionDoctor';

(async function () {
  try {
    const packageDir = process.env.INIT_CWD || process.cwd();
    const skipList = (process.env.SKIP_REFLECTION_LOAD || '')
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    const doctor = new ReflectionDoctor(packageDir, { skipList });

    const explainIndex = process.argv.indexOf('--explain');
    if (explainIndex !== -1) {
      const target = process.argv[explainIndex + 1];
      if (!target) {
        console.error(`usage: reflection-doctor [--explain <name|qualifiedName>]`);
        process.exit(1);
      }
      const explanation = await doctor.explain(target);
      console.log(explanation.text);
      return;
    }

    const report = await doctor.diagnose();
    console.log(report.text);
    // Diagnostic exit code: orphans/drift fail CI-style callers.
    process.exit(report.healthy ? 0 : 1);
  } catch (error: any) {
    console.error(error instanceof Error ? error.message : error);
    process.exit(1);
  }
})();
