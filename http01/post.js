// node.js 处理 GET 请求 通过第三方工具来实现
const http = require('http');
const opn = require('opn');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    let postData = '';
    // chulk 返回的是二进制流程 需要转字符串
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
  opn(`http://${hostname}:${port}/`);
})