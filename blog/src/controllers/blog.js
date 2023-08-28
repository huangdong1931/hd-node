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

module.exports = {
  getBlogList
}