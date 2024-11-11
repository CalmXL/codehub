const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_IS_ALREADY_EXISTS,
} = require('../config/error');
const userService = require('../service/user.service');

const verifyUser = async (ctx, next) => {
  console.log(ctx.request.body);

  const user = ctx.request.body;
  const { username, password } = user;
  // 判断 参数是否传递
  if (!username || !password) {
    return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx);
  }

  // 查询数据库中是否存在
  const userInfo = await userService.findUserByName(username);

  if (userInfo.length) {
    return ctx.app.emit('error', NAME_IS_ALREADY_EXISTS, ctx);
  }
  // 执行下一个周期
  await next();
};

module.exports = {
  verifyUser,
};
