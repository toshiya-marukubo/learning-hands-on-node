/*
const cache = {};
function parseJSONAsync(json, cb) {
  setTimeout(() => {
    try {
      cb(null, JSON.parse(json))
    } catch (err) {
      cb(err);
    }
  }, 1000)
}
function parseJSONAsyncWithCache(json, cb) {
  const cached = cache[json];
  if (cached) {
    cb(cached.err, cached.result);
    return
  }
  parseJSONAsync(json, (err, result) => {
    cache[json] = {err, result}
    cb(err, result);
  }, false);
}
parseJSONAsyncWithCache(
 '{"message": "HELLO"}',
 (err, result) => {
   console.log('result 1', err, result);
   parseJSONAsyncWithCache(
     '{"message": "HELLO"}',
     (err, result) => {
       console.log('result 2', err, result);
     }
   );
   console.log('finished result 2');
 }
);
console.log('finished result 1');
*/
const cache = {};
function parseJSONAsync(json, cb) {
  setTimeout(() => {
    try {
      cb(null, JSON.parse(json))
    } catch (err) {
      cb(err);
    }
  }, 1000)
}
function parseJSONAsyncWithCache(json, cb) {
  const cached = cache[json];
  if (cached) {
    cb(cached.err, cached.result);
    return
  }
  parseJSONAsync(json, (err, result) => {
    cache[json] = {err, result}
    cb(err, result);
  }, false);
}
parseJSONAsyncWithCache(
 '{"message": "HELLO"}',
 (err, result) => {
   console.log('result 1', err, result);
   parseJSONAsyncWithCache(
     '{"message": "HELLO"}',
     (err, result) => {
       console.log('result 2', err, result);
     }
   );
   console.log('finished result 2');
 }
);
console.log('finished result 1');
