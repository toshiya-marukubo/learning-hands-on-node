'use strict';
const http = require('http');
const {Worker} = require('worker_threads');

http.createServer((req, res) => {
  const n = Number(req.url.substr(1));
  if (Number.isNaN(n)) {
    return res.end();
  }
  new Worker(__dirname + '/fibonacci.js', {workerData: n})
    .on('message', (result) => {
      res.end(result.toString());
    });
}).listen(3000);
