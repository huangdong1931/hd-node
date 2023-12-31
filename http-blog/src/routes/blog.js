// 获取响应类
const { SucessModel, failModel } = require('../model/responseModel');

// 获取业务处理函数
const {
  getBlogList,
  getBlogDetail,
  postBolgAdd,
  postBolgUpdate,
  postBolgDelete
} = require('../controllers/blog');

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
    params: {},
    control: getBlogDetail,
  },
  add: {
    method: 'POST',
    path: '/api/blog/add',
    params: {},
    body: {},
    control: postBolgAdd
  },
  update: {
    method: 'POST',
    path: '/api/blog/update',
    params: {},
    body: {},
    control: postBolgUpdate
  },
  delete: {
    method: 'POST',
    path: '/api/blog/delete',
    params: {},
    body: {},
    control: postBolgDelete
  }
}

// 博客路由入口处理函数
const handlerBlogRoute = async (req, res) => {
  try {
    // 获取请求方式
    const method = req.method;
    // 获取请求配置
    const interfaceType = req.path.split('/').pop();
    // 获取接口配置
    const request = interfaceConfig[interfaceType];

    // 获取请求参数
    Object.assign(request.params, req.query);
    if (request.body) {
      Object.assign(request.body, req.body);
    }
    
    if (method === request.method && req.path === request.path) {
      const result = request.body ? 
        await request.control(request.params, request.body) :
        await request.control(request.params);
      return new SucessModel(result);
    };
  } catch (e) {
    console.log(e);
  }
};

module.exports = handlerBlogRoute;