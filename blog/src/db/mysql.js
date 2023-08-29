const mysql = require('mysql');
const CONFIG = require('../config/db');

// 创建连接
const cnn = mysql.createConnection(CONFIG)

// 开始连接
cnn.connect();

// 执行SQL
const execSql = (sql) => {
  return new Promise((resolve,  ) => {
    try {
      cnn.query(sql, (err, res) => {
        if (err) reject(err);
        resolve(res);
      })
    } catch (e) {
      reject(e);
    } finally {
      // 关闭连接
      cnn.end();
    }
  });
};

module.exports = {
  execSql
}

