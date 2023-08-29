// node.js 处理 GET 请求 通过浏览器url来完成
const http = require('http');
const qs = require('querystring');
const opn = require('opn');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const params = qs.parse(req.url.split('?')[1]);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(JSON.stringify(params));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  opn(`http://${hostname}:${port}/`);
});