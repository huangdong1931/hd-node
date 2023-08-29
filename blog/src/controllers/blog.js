// 获取博客列表数据
const getBlogList = (params) => {
  // 获取接口参数
  console.log('参数', params);
  // 查询数据库
  // 返回数据
  return [
    {
      id: 1,
      title: '标题1',
      content: '内容1',
      autonr: '张三',
      createAt: 1693163325674
    },
    {
      id: 2,
      title: '标题2',
      content: '内容2',
      autonr: '李四',
      createAt: 1693163350929
    }
  ]
};
// 获取博客详情数据
const getBlogDetail = (params) => {
  // 获取接口参数
  console.log('参数:', params);
  return {
    id: 1,
    title: '标题1',
    content: '内容1',
    autonr: '张三',
    createAt: 1693163325674
  }
};
// 新增博客
const postBolgAdd = (params, body) => {
  console.log('body:', params, body);
  return { id: 3 };  
};
// 更新博客
const postBolgUpdate = (params, body) => {
  console.log('body', params, body);
  return true
};
// 删除博客
const postBolgDelete = (params, body) => {
  console.log('body', params, body);
  return true
};

module.exports = {
  getBlogList,
  getBlogDetail,
  postBolgAdd,
  postBolgUpdate,
  postBolgDelete
}