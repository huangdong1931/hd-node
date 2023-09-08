const mysql = require('mysql');
const { MYSQL_ENV } = require('../config/index');

const db = mysql.createPool(MYSQL_ENV);

module.exports = db;