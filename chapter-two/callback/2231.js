const cache = {};

function parseJSONAsync(json, cb) {
  setTimeout(() => {
    try {
      cb(null, JSON.parse(json));
    } catch (err) {
      cb(err);
    }
  }, 1000);
}
function parseJSONAsyncWithCache(json, cb) {
  const cached = cache[json];
  if (cached) {
    /**
     * if only for node.js
     */
    process.nextTick(() => {
      cb(cached.err, cached.result);
    });
    /**
     * if browser
     */
     /*
    queueMicrotask(() => {
      cb(cached.err, cached.result);
    });
    */
    /**
     * promise
     */
    /*
    Promise.resolve().then(() => {
      cb(cached.err, cached.result);
    });
    */
    return;
  }
  parseJSONAsync(json, (err, result) => {
    cache[json] = {err, result};
    cb(err, result);
  });
}

parseJSONAsyncWithCache('{"Message": "Hello"}', (err, result) => {
  console.log('Result one', err, result);
  parseJSONAsyncWithCache('{"Message": "Hello"}', (err, result) => {
    console.log('Result two', err, result);
  });
  console.log('Finished result two');
});
console.log('Finished one');
