// 获取博客列表
const getBlogList = (req, res) => {
  res.send('获取博客列表');
};
// 获取博客详情
const getBlogListDetail = (req, res) => {
  res.send('获取博客详情');
};
// 新增博客
const addBlog = (req, res) => {
  res.send('新增博客');
};
// 修改博客
const updateBlog = (req, res) => {
  res.send('修改博客');
};
// 删除博客
const deleteBlog = (req, res) => {
  res.send('删除博客');
};

module.exports = {
  getBlogList,
  getBlogListDetail,
  addBlog,
  updateBlog,
  deleteBlog
}