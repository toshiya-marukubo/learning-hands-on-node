const stream = require('stream');
const fs = require('fs');
const util = require('util');

stream.finished(
  fs.createReadStream('src.txt').on('data', () => {}),
  (err) => {
    err ? console.error(err.message) : console.log('finished');
  } 
);
