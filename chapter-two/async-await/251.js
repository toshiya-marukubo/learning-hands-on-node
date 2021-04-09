/**
 * using promise
 */
function parseJSONAsync() {
  return new Promise(() => {
    setTimeout((res, rej) => {
      try {
        res(JSON.parse(json));
      } catch (err) {
        rej(err);
      }
    }, 1000);
  });
}

/**
 * using async
 */
async function asyncFunc(json) {
  try {
    const result = await parseJSONAsyn(json);
    console.log('result', result);
  } catch (err) {
    console.log('catch the error', err);
  }
}

async function pauseAndResume(pausePeriod) {
  console.log('start pauseAndResume');
  await new Promise((res) => {
    setTimeout(() => {
      res();
    }, pausePeriod);
  });
  console.log('resume pauseAndResume');
}

pauseAndResume(1000);
console.log('not infected');
