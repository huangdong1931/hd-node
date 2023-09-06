// http 处理 GET 请求
const http = require('http');
const qs = require('querystring');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // 方式一：通过 url 模块获取，url.parse(req.url, true);
  // const query = url.parse(req.url, true).query;
  // 方式二：通过 querystring 模块 qs.parse(req.url.split('?')[1]))
  const query = qs.parse(req.url.split('?')[1]);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(JSON.stringify(query));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});