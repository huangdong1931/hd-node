// const jwt = require('jsonwebtoken');
// const jwtKey = 'asdasdasdasdasdassdfasd';

// wt.sign(
//   { user },
//   jwtKey,
//   { expiresIn: '30s' },
//   (err, token) => {
//     res.status(200).json({ user, message: '登录成功', token })
//   }
// );

// const headers = req.headers;
//   const token = headers['authorization'];
//   if (!token) return res.status(401).send('token不能为空');
//   jwt.verify(token, jwtKey, (err, payload) => {
//     if (err) res.status(401).end(err);
//     res.status(200).send({ message: '认证成功', payload });
//   })

const db = require('../db/index');

// 校验类
class Check {
  constructor({ username, password }) {
    this.username = username;
    this.password = password;
  }
  required(res) {
    if (!this.username || !this.password) return false;
    return true;
  }
}

// 创建用户
const registerUser = (req, res) => {
  res.send('创建用户成功');
}
// 修改密码
const updateUser = (req, res) => {
  res.send('用户密码修改成功');
}
// 用户登录
const userLogin = (req, res) => {
  const check = new Check(req.body);
  if (!check.required()) res.status(400).send('用户名、密码不能为空');
  res.send('用户登录成功');
}

module.exports = {
  registerUser,
  updateUser,
  userLogin
}