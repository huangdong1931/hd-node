const mysql = require('mysql');
// 创建连接
const cnn = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'hd@123213',
  prot: 3306,
  database: 'blog'
});
// 开始连接
cnn.connect();
// 执行SQL
const sql = `select * from blog_list`;
cnn.query(sql, (err, res) => {
  if (err) {
    return console.error(err);
  }
  console.log('res:', res);
});
// 关闭连接
cnn.end();