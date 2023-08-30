/**
 * 导入 express 框架
 */

const express = require('express');

// 创建express服务实例
const app = express();

/**
 * 配置 Express 内置解析格式的中间件
 * 1. express.json() 解析 application/json 格式
 * express.json()的作用是将JSON格式的请求体转换为JavaScript对象
 * 它使用Node.js内置的querystring模块将原始的JSON字符串解析成对象
 * 并将该对象作为req.body属性绑定到请求对象上
 * 2. express.urlencoded() 解析 application/x-www-form-urlencoded 格式
 */
app.use(express.json());
app.use(express.urlencoded());

// 定义常量
const PORT = 3000;
const LOCAL_HOST = 'http://127.0.0.1';

// 监听 GET 请求
app.get('/todo/:id', (req, res) => {
  res.status(200).send(`GET ${req.params.id}`)
});

// 监听 POST 请求
app.post('/todos', (req, res) => {
  res.status(200).send(`POST`);
});

// 监听 PUT 请求
app.put('/todos/:id', (req, res) => {
  res.status(200).send(`PUT ${req.params.id}`);
});

// 监听 DELETE 请求
app.delete('/todos/:id', (req, res) => {
  res.status(200).send(`DELETE ${req.params.id}`);
});

// 监听端口
app.listen('3000', () => {
  console.log(`Server is running on ${LOCAL_HOST}:${PORT}`);
});