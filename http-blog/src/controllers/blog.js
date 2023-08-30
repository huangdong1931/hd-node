/**
 * 导入SQL封装类 返回 promise
 */
const { execSql } = require('../db/mysql');

// 获取博客列表数据
const getBlogList = (params) => {
  // 根据标题、作者模糊查询
  let { title, author } = params;
  let sql = `SELECT * from blog_list `;
  if (title) sql = `${sql} WHERE title LIKE '%${title}%' `
  if (author) sql = `${sql} AND author like '%${author}%';`
  // 返回查询结果
  return execSql(sql)
};

// 获取博客详情数据
const getBlogDetail = (params) => {
  // 根据 id 查询
  let { id } = params;
  let sql = `SELECT * FROM blog_list WHERE id = ${id};`
  // 返回查询结果
  return execSql(sql)
};

// 新增博客
const postBolgAdd = async (params, body) => {
  let { title, content, author, creatTime } = body;
  let sql = `INSERT INTO blog_list (title, content, creatTime, author) values('${title}','${content || null}', ${creatTime || Date.now()}, '${author}');`
  const result = await execSql(sql);
  return result.affectedRows === 1;
};

// 更新博客
const postBolgUpdate = async (params, body) => {
  let { id, title, content, author, creatTime } = body;
  let sql = `UPDATE blog_list SET title = '${title}', content = '${content || null}', author = '${author}', creatTime = '${creatTime || Date.now()}' WHERE id = ${id};`;
  const result = await execSql(sql);
  return result.affectedRows === 1;
};

// 删除博客
const postBolgDelete = async (params, body) => {
  let { id } = body;
  let sql = `DELETE  FROM blog_list WHERE id = ${id};`
  const result = await execSql(sql);
  return result.affectedRows === 1;
};

module.exports = {
  getBlogList,
  getBlogDetail,
  postBolgAdd,
  postBolgUpdate,
  postBolgDelete
}