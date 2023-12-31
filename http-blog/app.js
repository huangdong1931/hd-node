/**
 * qs node内置模块 解析格式化URL参数
 * blog node路由模块
 */
const qs = require('querystring');
const blog = require('./src/routes/blog')

// 处理POST请求参数 返回一个promise
const handlePost = (req, res) => {
  return new Promise((resolve, reject) => {
    try {
      if (req.method !== 'POST') {
        return resolve({});
      }
      if (req.headers['content-type'] !== 'application/json') {
        return resolve({});
      }
      let postData = '';
      req.on('data', (data) => {
        postData += data.toString();
      });
      req.on('end', () => {
        if (!postData) return resolve({});
        return resolve(JSON.parse(postData))
      });
    } catch (e) {
      return reject(e);
    }
  });
};

// 接口请求入口处理函数
const serverHandle = async (req, res) => {
  // 设置相应头
  res.setHeader('Content-Type', 'application/json');
  // 设置请求path
  req.path = req.url.split('?')[0];

  // 处理GET请求参数
  req.query = qs.parse(req.url.split('?')[1]) || {};
  // 处理POST请求参数
  const result = await handlePost(req, res);
  req.body = result; 

  // 获取博客数据
  const blogData = await blog(req, res);
  // 返回博客数据
  if (blogData) return res.end(JSON.stringify(blogData));
  // 错误处理
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.write('404 Not Found');
  res.end();
};

module.exports = serverHandle;
