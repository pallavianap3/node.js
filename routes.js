const path = require('path');
const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        if (method === 'GET') {
            // Read messages from file
            const messagesFilePath = path.join(__dirname, 'messages.txt');
            const messages = fs.readFileSync(messagesFilePath, 'utf-8').split('\n').filter(msg => msg.trim() !== '');

            res.setHeader('Content-Type', 'text/html');
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form>');

            // Display existing messages
            if (messages.length > 0) {
                res.write('<h2>Existing Messages:</h2>');
                res.write('<ul>');
                messages.forEach(message => {
                    res.write('<li>' + message + '</li>');
                });
                res.write('</ul>');
            }

            res.write('</body></html>');
            return res.end();
        } else if (method === 'POST') {
            const body = [];
            req.on('data', chunk => {
                body.push(chunk);
            });

            req.on('end', () => {
                const parsedBody = Buffer.concat(body).toString();
                const newMessage = parsedBody.split('=')[1];

                // Append new message to the file
                const messagesFilePath = path.join(__dirname, 'messages.txt');
                fs.appendFileSync(messagesFilePath, newMessage + '\n');

                // Redirect to home after adding message
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        }
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My first page</title></head>');
        res.write('<body><h1>Hello, World!</h1></body>');
        res.write('</html>');
        res.end();
    }
};

module.exports = requestHandler;
