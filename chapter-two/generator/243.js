/*
function* resetableGeneratorFunc() {
  let count = 0;
  while(true) {
    console.log(count);
    if (yield count++) {
      count = 0;
    }
  }
}
const resetableGenerator = resetableGeneratorFunc();
resetableGenerator.next();
resetableGenerator.next();
resetableGenerator.next(true);
resetableGenerator.next();
resetableGenerator.next();
resetableGenerator.next();
*/

function* tryCatchGeneratorFunc() {
  try {
    console.log('success');
    yield 1
  } catch(err) {
    console.log('catch the error', err);
    yield 2
  }
}

const tryCatch = tryCatchGeneratorFunc();
tryCatch.next();
tryCatch.throw(new Error('error'));
tryCatch.next();
tryCatch.next();
