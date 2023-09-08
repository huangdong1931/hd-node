const mysql = require('mysql');
const { MYSQL_DEV } = require('../config/index');

const db = mysql.createPool(MYSQL_DEV);

module.exports = db;