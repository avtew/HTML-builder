(function copyDir() {
  const fs = require('fs/promises');
  const path = require('path');
  const src = path.join(__dirname, 'files');
  const dest = path.join(__dirname, 'files-copy');
  fs.mkdir(dest, { recursive: true });
  fs.readdir(src, {withFileTypes: true}).then (files => {
    for (let file of files) {
      fs.copyFile(path.join(src, file.name), path.join(dest, file.name));
    }
  });
}());