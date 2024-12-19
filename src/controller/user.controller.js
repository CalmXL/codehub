const userService = require('../service/user.service');

class UserController {
  async create(ctx, next) {
    const user = ctx.request.body;

    const result = await userService.create(user);

    ctx.body = {
      message: '用户创建成功',
      data: result,
    };
  }

  async getUsers(ctx, next) {
    const result = await userService.getUsers();

    ctx.body = {
      message: '获取用户列表成功',
      data: result,
    };
  }
}

module.exports = new UserController();
