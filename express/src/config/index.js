const server = {
  HOST_NAME: '127.0.0.1', // 主机名称
  PROT: 3000, // 端口号
  PREFIX: '/api', // 路由统一访问前缀
  MYSQL_DEV: {
    host: '127.0.0.1',
    user: 'root',
    password: 'hd@123213',
    prot: 3306,
    database: 'blog'
  }
};

module.exports = server;