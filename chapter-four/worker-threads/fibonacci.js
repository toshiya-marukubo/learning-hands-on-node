'use strict';
const fibonacci = require('../mult-process/fibonacci');
const {workerData, parentPort} = require('worker_threads');

parentPort.postMessage(fibonacci(workerData));
