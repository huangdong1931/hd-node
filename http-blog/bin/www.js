/**
 * 项目入口文件
 * 搭建本地服务器应用
 */

const http = require('http');
// const op = require('opn');

const HOST_NAME = '127.0.0.1';
const PORT = 3000;

// 引入接口请求处理模块
const serverHandle = require('../app');

const server = http.createServer(serverHandle);

server.listen(PORT, HOST_NAME, () => {
  console.log(`Server is running on http://${HOST_NAME}:${PORT}`);
  // op(`http://${HOST_NAME}:${PORT}/api/blog/list`);
});