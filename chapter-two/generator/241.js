/**
 * generator function
 */
function* generatorFunc() {
  console.log('start generator function');
  console.log('yield 1');
  yield 1
  console.log('yield 2');
  yield 2
  console.log('yield 3');
  yield 3 
  return 'return value'
}
/*
const generator = generatorFunc();
generator.next();
generator.next();
generator.next();
*/
/*
const generator2 = generatorFunc();
const iterator = generator2[Symbol.iterator]();
iterator.next();
iterator.next();
iterator.next();
iterator.next();

console.log(iterator === generator2);
*/
/*
const generator3 = generatorFunc();
for (const v of generator3) {
  console.log('for...of', v);
}
*/
