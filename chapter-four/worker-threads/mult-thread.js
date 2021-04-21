'use strict';
const {worker, threadId} = require('worker_threads');

console.log('main threads', threadId);

const cpuCount = require('os').cpus().length;

for (let i = 0; i < cpuCount; i++) {
  const worker = new Worker(__dirname + '/web-app.js');
  console.log('sub threads', worker.threadId);
}
