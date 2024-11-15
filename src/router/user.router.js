const KoaRouter = require('@koa/router');
const UserController = require('../controller/user.controller');
const { verifyUser } = require('../middleware/user.middleware');

const userRouter = new KoaRouter({ prefix: '/user' });

userRouter.post('/', verifyUser, UserController.create);

module.exports = userRouter;
