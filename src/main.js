const koa = require('koa');
const { SERVER_PORT } = require('./config/server');

const app = new koa();

app.use((ctx, next) => {
  ctx.body = '服务器访问成功';
});

app.listen(SERVER_PORT, () => {
  console.log('codehub is starting success!!!');
});
