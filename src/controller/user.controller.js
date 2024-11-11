class UserController {
  create(ctx, next) {
    const user = ctx.request.body;

    console.log(user);

    ctx.body = '用户创建成功';
  }
}

module.exports = new UserController();
