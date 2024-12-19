const connection = require('../app/database');

class PhoneService {
  async getProducts() {
    const statement = 'select * from products';
    const [values, err] = await connection.execute(statement);
    return values;
  }
}

module.exports = new PhoneService();
