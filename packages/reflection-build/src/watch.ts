import * as gulp from 'gulp';
import { exec } from 'child_process';
import * as path from 'path';

function getBuildScript(): string {
  return process.env.BUILD_SCRIPT || 'build';
}

function timestamp(): string {
  return new Date().toTimeString().slice(0, 8);
}

function formatElapsed(ms: number): string {
  return ms >= 1000 ? `${(ms / 1000).toFixed(2)} s` : `${ms} ms`;
}

// Run the package build script, always signaling completion so the watcher stays alive.
// `--silent` suppresses npm's per-script banner (and propagates to nested `npm run` calls),
// so each build reduces to a clear start/end line plus any real build output.
function runBuild(cb: (error?: any) => void): void {
  const start = Date.now();
  console.log(`[${timestamp()}] build started`);

  exec(`npm run --silent ${getBuildScript()}`, (err, stdout, stderr) => {
    const output = [stdout, stderr]
      .map((stream) => stream.trim())
      .filter(Boolean)
      .join('\n');
    if (output) {
      console.log(output);
    } else if (err) {
      console.log(err.message);
    }

    // Trailing newline separates consecutive builds into discrete, scannable blocks.
    const result = err ? 'FAILED' : 'succeeded';
    console.log(`[${timestamp()}] build ${result} in ${formatElapsed(Date.now() - start)}\n`);
    cb();
  });
}

export function watch(): void {
  // Build once at startup, then watch for changes.
  runBuild(() => {
    const watcher = gulp.watch(
      [
        path.resolve(process.cwd(), 'src/**/*'),
        path.resolve(process.cwd(), 'test/**/*'),
        path.resolve(process.cwd(), 'index.ts'),
      ],
      (cb) => runBuild(cb)
    );

    watcher.on('error', (err: any) => {
      console.log(`[${timestamp()}] watch error: ${err.toString()}`);
    });
  });
}
