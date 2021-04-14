const fs = require('fs');
const crypto = require('crypto');
const zlib = require('zlib');

fs.writeFileSync('src.txt', 'hello world');
compressionFileWithStream('src.txt');

function copyFile(src, dest, cb) {
  fs.readFile(src, (err, data) => {
    if (err) {
      return cb(err);
    }
    fs.writeFile(dest, data, cb);
  });
}

function copyFileWithStream(src, dest, cb) {
  fs.createReadStream(src)
    .pipe(fs.createWriteStream(dest))
    .on('finish', cb);
}

function encryptFileWithStream(src) {
  fs.createReadStream('src.txt')
    .pipe(crypto.createHash('sha256'))
    .pipe(fs.createWriteStream('dest.txt'))
    .on('finish', () => {
      console.log('finish to copy');
    });
}

function compressionFileWithStream(src) {
  fs.createReadStream('src.txt')
    .pipe(crypto.createHash('sha256'))
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('dest.txt'))
    .on('finish', () => {
      console.log('finish to copy');
    });
}
