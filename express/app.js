/**
 * 导入 express 框架
 */

const express = require('express');

// 创建express服务实例
const app = express();

// 定义常量
const PORT = 3000;
const LOCAL_HOST = 'http://127.0.0.1';

// 监听 GET 请求
app.get('/todo/:id', (req, res) => {
  res.send(`GET ${req.params.id}`);
});

// 监听 POST 请求
app.post('/todos', (req, res) => {
  res.send(`POST`);
});

// 监听 PUT 请求
app.put('/todos/:id', (req, res) => {
  res.send(`PUT ${req.params.id}`);
});

// 监听 DELETE 请求
app.delete('/todos/:id', (req, res) => {
  res.send(`DELETE ${req.params.id}`);
});

// 监听端口
app.listen('3000', () => {
  console.log(`Server is running on ${LOCAL_HOST}:${PORT}`);
});