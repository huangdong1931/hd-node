// node运行服务的环境变量
// console.log(process.env);

/**
 * 用来获取命令行参数
 * @params 第一个参数 node可执行程序绝对路径
 * @params 第二个参数 当前执行文件的绝对路径
 * @params 数组后面的参数是 命令行额外的参数 eg node index.js -a 
 * @return 数组
 */
// console.log(process.argv);

// 返回当前工作路径
// console.log(process.cwd());

// node的编译配置相关参数
// console.log(process.config);

// 返回当前进程id
// console.log(process.pid);

// 返回和设置当前进程的名称
// process.title = "主进程";
// console.log(process.title); 

// 返回当前node进程已经运行了多长时间（单位是秒
// console.log(process.uptime());

// 返回进程占用的内存，单位为字节
// console.log(process.memoryUsage());

// 返回当前node的版本
// console.log(process.version);

// 返回node的版本，以及依赖库的版本
// console.log(process.versions);

// process.nextTick(fn) node 中的微任务
// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// process.nextTick(() => {
//   console.log("process.nextTick");
// });

// child_process
// node提供的child_process模块，可以很容易的衍生出一个子进程，而且子进程之间可以通过事件消息系统进行互相通信
const cp = require("child_process");
console.log('cp:', cp);