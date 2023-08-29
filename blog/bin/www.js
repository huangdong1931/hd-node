const http = require('http');
// const op = require('opn');

const serverHandle = require('../app');

const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer(serverHandle);

server.listen(port, hostName, () => {
  console.log(`Server is running on http://${hostName}:${port}`);
  // op(`http://${hostName}:${port}/api/blog/list`);
});