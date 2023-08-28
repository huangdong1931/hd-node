// 获取相应格式
const { SucessModel, failModel } = require('../model/responseModel');

// 获取业务处理函数
const { getBlogList } = require('../controllers/blog');

// 定义接口配置
const interfaceConfig = {
  list: {
    method: 'GET',
    path: '/api/blog/list',
    params: {},
    control: getBlogList,
  },
  detail: {
    method: 'GET',
    path: '/api/blog/detail',
  },
  add: {
    method: 'POST',
    path: '/api/blog/add',
  },
  update: {
    method: 'POST',
    path: '/api/blog/update',
  },
  delete: {
    method: 'POST',
    path: '/api/blog/delete',
  }
}

const handlerBlogRoute = (req, res) => {
  // 获取请求方式
  const method = req.method;
  // 获取请求配置
  const interfaceType = req.path.split('/').pop();
  // 获取接口配置
  const request = interfaceConfig[interfaceType];
  // 获取请求参数
  if (req.query) {
    Object.assign(request.params, req.query);
  }
  if (method === request.method && req.path === request.path) {
    const result = request.control(request.params)
    return new SucessModel(result);
  };
};

module.exports = handlerBlogRoute;