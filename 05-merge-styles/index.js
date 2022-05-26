(function merge() {
  const fs = require('fs/promises');
  const path = require('path');
  const dest = path.join(__dirname, 'project-dist');
  fs.mkdir(dest, { recursive: true });
  const bundle = path.join(__dirname, 'project-dist', 'bundle.css');
  fs.readdir(dest, {withFileTypes: true}).then (files => {
    for (let file of files) {
      if(file.name === 'bundle.css') {
        fs.unlink(path.join(dest, 'bundle.css'));
      }
    }
    fs.readdir(path.join(__dirname, 'styles'), {withFileTypes: true}).then (files => {
      for (let file of files) {
        const dir = path.join(__dirname, 'styles', file.name);
        if (path.extname(dir) === '.css') {
          let arr = [];
          arr.push(fs.readFile(dir, 'utf8'));
          Promise.all(arr).then (data => {
            fs.appendFile(bundle, data);
          });
        }
      }
    });
  });
}());