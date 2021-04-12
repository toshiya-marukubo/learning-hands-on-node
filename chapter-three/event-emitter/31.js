const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello world!');
  res.end();
});

server.on('listening', () => {

});

server.on('error', (err) => {
});

server.on('close', () => {

});

server.listen(8000);
