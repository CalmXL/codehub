const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');

const userRouter = require('../router/user.router');
const phoneRouter = require('../router/phone.router');

const app = new koa();

app.use(cors());

app.use(bodyParser());
app.use(userRouter.routes());
app.use(userRouter.allowedMethods());
app.use(phoneRouter.routes());
app.use(phoneRouter.allowedMethods());

module.exports = app;
