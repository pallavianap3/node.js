const http = require('http');

const server = http.createServer((req, res) => {
  // Your request handling logic here
  console.log(req);
});

const port = 2001;
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});


