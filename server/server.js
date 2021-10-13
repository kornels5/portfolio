const http = require('http');
require('dotenv').config();

const requestListener = function(req, res) {
    res.writeHead(200);
    res.end('Hello World!');
}

const server = http.createServer(requestListener);
server.listen(process.env.PORT, () => {
    console.log('Server is running on port: ' + process.env.PORT);
});