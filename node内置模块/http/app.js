// http 处理 GET POST请求
const http = require('http');
const op = require('opn');

const localhostName = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url.split('?')[0];
  const query = req.url.split('?')[1];
  const responseData = {
    method,
    url,
    query
  }

  res.setHeader('Content-Type', 'application/json');

  if (method === 'GET') {
    res.end(JSON.stringify(responseData));
  }
  if (method === 'POST') {
    let postData = '';
    req.on('data', (chulk) => {
      postData += chulk.toString();
    })
    req.on('end', () => {
      responseData.data = postData;
      res.end(JSON.stringify(responseData));
    })
  }
})

server.listen(port, localhostName, () => {
  console.log(`Server running at http://${localhostName}:${port}/`);
  op(`http://${localhostName}:${port}/?name=zs&age=18`);
})