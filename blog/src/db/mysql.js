/**
 * 导入sql第三方模块
 * 导入MySQL环境配置文件
 */
const mysql = require('mysql');
const CONFIG = require('../config/db');

// 创建连接
const cnn = mysql.createConnection(CONFIG);
// 开始连接
cnn.connect();
// 执行SQL
const execSql = (sql) => {
  return new Promise((resolve,  reject) => {
    try {
      cnn.query(sql, (err, res) => {
        if (err) reject(err);
        resolve(res);
      })
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  execSql
}

