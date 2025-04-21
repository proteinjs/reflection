import * as gulp from 'gulp';
import { exec } from 'child_process';
import * as path from 'path';

function getBuildScript(): string {
  return process.env.BUILD_SCRIPT || 'build';
}

// Utility function to execute shell commands
function executeCommand(command: string, cb: (error?: any) => void): void {
  exec(command, (err, stdout, stderr) => {
    if (err) {
      console.error(err.message);
    }
    if (stderr) {
      console.error(stderr);
    }
    if (stdout) {
      console.log(stdout);
    }

    cb(); // Always call the callback to signal task completion
  });
}

// Task to run the package build script
gulp.task('build', (cb) => {
  const scriptName = getBuildScript();
  const command = `npm run ${scriptName}`;
  executeCommand(command, cb);
});

gulp.task('watch', () => {
  const watcher = gulp.watch(
    [
      path.resolve(process.cwd(), 'src/**/*'),
      path.resolve(process.cwd(), 'test/**/*'),
      path.resolve(process.cwd(), 'index.ts'),
    ],
    gulp.series('build')
  );

  watcher.on('error', function (this: typeof watcher, err: any) {
    console.error('Error:', err.toString());
    this.emit('end'); // End the task to allow the watch task to continue
  });
});

gulp.task('default', gulp.series('build', 'watch')); // run build once at the start
