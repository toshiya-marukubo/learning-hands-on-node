/*
const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
});

server.on('listening', () => {
});

server.listen(8000);
*/

/**
 * call back pattern.
 */
const http = require('http');
const server = http.createServer((req, res) => {
});

server.listen(8000, () => {
});
