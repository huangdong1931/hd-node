/**
 * 项目启动文件
 */

const { PROT, HOST_NAME } = require('../src/config/index');

const app = require('../app');

// 监听端口
app.listen(PROT, () => {
  console.log(`server is running at http://${HOST_NAME}:${PROT}`);
})