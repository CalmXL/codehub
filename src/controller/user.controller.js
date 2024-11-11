const userService = require('../service/user.service');

class UserController {
  async create(ctx, next) {
    const user = ctx.request.body;

    const { username, password } = user;

    // 判断 参数是否传递
    if (!username || !password) {
      ctx.body = {
        code: -1001,
        message: '用户名或者密码不能为空',
      };
      return;
    }

    // 查询数据库中是否存在
    const userInfo = await userService.findUserByName(username);

    if (userInfo.length) {
      ctx.body = {
        code: -1002,
        message: '用户名已经被占用！！！',
      };
      return;
    }

    const result = await userService.create(user);

    ctx.body = {
      message: '用户创建成功',
      data: result,
    };
  }
}

module.exports = new UserController();
