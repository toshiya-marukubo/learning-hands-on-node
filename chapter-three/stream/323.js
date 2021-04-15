const fs = require('fs');
const filewriteStream = fs.createWriteStream('dest.txt');

filewriteStream.write('Hello\n');
filewriteStream.write('Hello\n');
filewriteStream.end();
fs.readFileSync('dest.txt', 'utf-8');
