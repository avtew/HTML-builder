const fs = require('fs');
const path = require('path');
const { stdin, stdout } = process;
const stream  = fs.createWriteStream(path.join(__dirname, 'text.txt'));
stdout.write('Добро пожаловать в систему\nВведите текст для записи\nВведите exit или нажмите ctrl + c для выхода\n');
stdin.on('data', chunk => {
  if(chunk.toString().trim() === 'exit') {
    stdout.write('До свидания');
    process.exit();
  } else {
    stream.write(chunk);
  }
});
process.on('SIGINT', () => {
  stdout.write('До свидания');
  process.exit();
});