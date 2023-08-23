const http = require('http');
const requestHandler = require('./routes'); // Replace with the actual path to your requestHandler module

const server = http.createServer(requestHandler);

const PORT = 3010; // Choose a port number
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
