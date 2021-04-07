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

const toBeFulfilled = parseJSONAsync('{"foo": 1}');
const toBeRejected = parseJSONAsync('json');
console.log('promise');
console.log(toBeFulfilled);
console.log(toBeRejected);
setTimeout(() => {
  console.log('one second later');
  console.log(toBeFulfilled);
  console.log(toBeRejected);
}, 1000);
