const fs = require('fs/promises');
const path = require('path');
fs.readdir(path.join(__dirname, 'secret-folder'), {withFileTypes: true})
  .then (files => {
    for (let file of files) {
      const dir = (path.join(__dirname, 'secret-folder', file.name));
      const name = path.basename(dir, path.extname(dir));
      const ext = path.extname(dir).slice(1);
      if (file.isFile() === true) {
        fs.stat(dir).then (stats => { 
          console.log(name + ' - ' + ext + ' - ' + stats.size + 'b');
        });
      }
    }
  });