const http = require('http');

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello, my name is Pallavi!');
});

const port = 4000;

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});