const http = require('http');
const url = require('url');

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Parse the URL from the request
    const parsedUrl = url.parse(req.url, true);

    // Get the pathname from the parsed URL
    const pathname = parsedUrl.pathname;

    // Set the response headers
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Determine the response based on the pathname
    if (pathname === '/home') {
        res.end('Welcome home');
    } else if (pathname === '/about') {
        res.end('Welcome to About Us page');
    } else if (pathname === '/node') {
        res.end('Welcome to my Node Js project');
    } else {
        res.end('Hello, welcome to our server');
    }
});

// Start the server on port 3000
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
