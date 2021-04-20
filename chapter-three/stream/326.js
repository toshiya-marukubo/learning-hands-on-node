const fs = require('fs');
const stream = require('stream');

/*
fs.createReadStream('no-such-file.txt')
  .pipe(fs.createWriteStream('dest.txt'))
  .on('error', (error) => {
    console.log('error event', error.message);
  });
*/

/*
fs.createReadStream('no-such-file.txt')
  .on('error', error => console.log('error event', error.message))
  .pipe(fs.createWriteStream('dest.txt'))
  .on('error', error => console.log('error event', error.message));
*/
/*
stream.pipeline(
  fs.createReadStream('no-such-file.txt'),
  fs.createWriteStream('dest.txt'),
  err => err ? console.error('got an error', err.message) : console.log('finished')
);
*/

stream.pipeline(
  fs.createReadStream('no-such-file.txt'),
  fs.createWriteStream('dest.txt'),
  (err) => {
    if (err) {
      console.error('got an error', err.message);
    } else {
      console.log('finished');
    }
  }
);

