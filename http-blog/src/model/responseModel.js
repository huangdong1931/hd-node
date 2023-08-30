// 基类
class BaseModel {
  constructor(data, message) {
    if (typeof data === 'string') {
      this.message = data;
      data = null;
      message = null;

    }
    if (data) this.data = data;
    if (message) this.message = message;
  }
};
// 成功类
class SucessModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.code = 0;
  }
};
// 失败类
class failModel extends BaseModel {
  constructor(data, message) {
    super(data, message);
    this.code = -1;
  }
};

module.exports = {
  SucessModel,
  failModel
}