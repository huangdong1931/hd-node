# express 框架
Express 不对 nodeJS 已有的特性进行二次抽象，只是在它之上拓展了 web 应用所需的基本功能
1. 内部依然使用的是 http 模块
2. 请求对象继承自 http.IncomingMessage
3. 响应对象继承自 http.ServerResponse

# 中间件分类
中间件一定有next方法且必须放在最后，没有next方法则是路由，中间件一般在路由之前进行注册
1. 应用级中间件
<script>
  // 绑定到 app 实例上的中间件叫应用级的中间件
  const express = require('express');
  const app = express();
  app.use((req, res, next) => { next() });
  app.get((req, res, next) => { next() });
  app.post((req, res, next) => { next() });
</script>
2. 路由级中间件
<script>
  // 绑定到 express.Router() 实例上的中间件叫路由级的中间件
  const express = require('express');
  const router = express.Router();
  router.use((req, res, next) => { next() });
</script>
3. 错误级中间件
作用：捕获整个项目中发生的异常错误，防止项目异常崩溃
错误中间件必须包含四个参数且顺序为(err, req, res, next)
错误级别的中间件注册在路由之后，出现错误则会被捕获执行，用来捕获项目异常，防止崩溃
<script>
  app.get('/', (req, res) => {
    throw new Error('服务异常');
    res.send('hello');
  })

  app.use((err, req, res, next) => {
    console.log('error:', err.message);
    res.send('服务器异常', err.message)
  })
</script>
4. 内置中间件
<script>
  // 静态资源托管 可以很方便的创建一个静态资源服务器 访问多个静态资源目录则多次调用 express.static() 即可
  express.static('public');
  // 添加前缀
  app.use('/pubilc',  express.static('public'))
  // 解析JSON格式请求体数据
  express.json();
  // 解析url-encoded格式请求体数据
  express.urlencoded();

  // usage
  // 配置解析 application/json 格式数据的中间件，默认情况下，如果不配置此中间件则 req.body 等于 undefined
  app.use(express.json());
  // 配置解析 application/x-www-form-urlencoded 格式数据的内置中间件
  app.use(express.urlencoded({ extended: false }));
</script>
5. 第三方中间件