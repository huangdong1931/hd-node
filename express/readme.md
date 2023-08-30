# express 框架
Express 不对 odeJS 已有的特性进行二次抽象，只是在它之上拓展了 web 应用所需的基本功能
1. 内部依然使用的是 http 模块
2. 请求对象继承自 http.IncomingMessage
3. 响应对象继承自 http.ServerResponse