/*
setTimeout(() => {
  console.log('1');
}, 1000);
console.log('2');
*/
/*
const array1 = [0, 1, 2, 3];
const array2 = array1.map((element) => {
  console.log(`convert ${element}`);
  return element * 10.0;
});
console.log('finished to convert', array2);
*/
/**
 * readdir - to call files name by array.
 */
const fs = require('fs');
fs.readdir('foo', (err, files) => {
  console.log('result');
  console.log('err', err);
  console.log('files', files);
});
