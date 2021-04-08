/*
function parseJSONAsync(json) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      try {
        res(JSON.parse(json));
      } catch (err) {
        rej(err);
      }
    }, 1000);
  });
}

function* asyncWithGeneratorFunc(json) {
  try {
    const result = yield parseJSONAsync(json);
    console.log('result', result);
  } catch (err) {
    console.log('catch the error', err);
  }
}

const asyncGenerator1 = asyncWithGeneratorFunc('{"foo": 1}');
const promise1 = asyncGenerator1.next().value;
promise1.then((result) => {
  asyncGenerator1.next(result);
});

const asyncGenerator2 = asyncWithGeneratorFunc('error jaon');
const promise2 = asyncGenerator2.next().value;
promise2.catch((err) => {
  asyncGenerator2.throw(err)
});
*/

function parseJSONAsync(json) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      try {
        res(JSON.parse(json));
      } catch (err) {
        rej(err);
      }
    }, 1000);
  });
}
function* asyncWithGeneratorFunc(json) {
  try {
    const result = yield parseJSONAsync(json);
    console.log('result', result);
  } catch (err) {
    console.log('catch the error', err);
  }
}
function handleAsyncWithGenerator(generator, resolved) {
  const {done, value} = generator.next(resolved);
  if (done) {
    return Promise.resolve(value);
  }
  return value.then((resolved) => {
    handleAsyncWithGenerator(generator, resolved),
    (err) => {
      generator.throw(err);
    }
  });
}

handleAsyncWithGenerator(asyncWithGeneratorFunc('{"foo": 1}'));
handleAsyncWithGenerator(asyncWithGeneratorFunc('not json'));
