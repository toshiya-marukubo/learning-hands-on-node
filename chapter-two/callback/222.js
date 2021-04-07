function parseJSONAsync(json, cb) {
  setTimeout(() => {
    try {
      cb(null, JSON.parse(json));
    } catch (err) {
      cb(err);
    }
  }, 1000);
}

parseJSONAsync('not JSON', (err, result) => {
  console.log('result of parse', err, result);
});
