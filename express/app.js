/**
 * 配置各种中间件
 */

const express = require('express');
const cors = require('cors');
const app = express();

// 获取常量配置
const { PREFIX } = require('./src/config/index');

// 注册跨域中间件
app.use(cors());

// 注册参数解析中间件
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 注册路由中间件
const routes = require('./src/routes/index');
for (let routeName in routes) {
  app.use(`${PREFIX}/${routeName}`, routes[routeName]);
}

// 注册静态资源中间件
app.use(express.static('./public'));

// 注册错误监控中间件
const errorHandle = (err, req, res, next) => {
  console.log('error:', err.message);
  res.status(500).send('服务器异常', err.message);
};
app.use(errorHandle);

module.exports = app;