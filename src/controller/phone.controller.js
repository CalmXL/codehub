const phoneService = require('../service/phone.service');

class PhoneController {
  async getProducts(ctx, next) {
    const result = await phoneService.getProducts();
    ctx.body = {
      message: '获取数据成功',
      data: result,
    };
  }
}

module.exports = new PhoneController();
