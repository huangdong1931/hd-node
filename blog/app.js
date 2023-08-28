const qs = require('querystring');
const blog = require('./src/routes/blog')

const serverHandle = (req, res) => {
  // 设置相应头
  res.setHeader('Content-Type', 'application/json');
  // 设置请求path
  req.path = req.url.split('?')[0];
  // 解析请求参数
  req.query = qs.parse(req.url.split('?')[1]) || null;
  // 过滤icon
  if (req.path !== '/favicon.ico') {
    // 获取博客数据
    const blogData = blog(req, res);
    // 返回博客数据
    if (blogData) return res.end(JSON.stringify(blogData));
    // 错误返回
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
  }
};

module.exports = serverHandle;
