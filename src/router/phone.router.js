const KoaRouter = require('@koa/router');
const phoneController = require('../controller/phone.controller');

const phoneRouter = new KoaRouter({ prefix: '/phone' });

phoneRouter.get('/getProducts', phoneController.getProducts);

module.exports = phoneRouter;
