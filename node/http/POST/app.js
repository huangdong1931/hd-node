// http 处理 POST 请求
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let postData = '';
    req.on('data', (chulk) => {
      postData += chulk.toString();
    });
    req.on('end', () => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(postData);
    })
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('hello');
  }
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})