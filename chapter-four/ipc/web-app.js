'use strict';
const http = require('http');
const fibonacci = require('../mult-process/fibonacci');
const pid = process.pid;

process.on('message', (port) => {
  console.log(pid, 'start web server ' + port + '.');
  http.createServer((req, res) => {
    const n = Number(req.url.substr(1));
    if (Number.isNaN(n)) {
      return res.end();
    }
    const response = fibonacci(n);
    process.send({pid, response});
    res.end(response.toString());
  }).listen(port);
});
