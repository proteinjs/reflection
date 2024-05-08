const fs = require('fs');
const path = require('path');

const modulesPath = path.resolve('../../../../modules');
const targetPath = path.resolve('./modules');

try {
  if (fs.existsSync(targetPath)) fs.unlinkSync(targetPath);

  fs.symlinkSync(modulesPath, targetPath, 'junction'); // Use 'junction' for directories on Windows
} catch (error) {
  console.error('Failed to create symlink:', error);
}
