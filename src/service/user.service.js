const connection = require('../app/database');

class UserService {
  async create(user) {
    // 1. 获取用户
    const { username, password } = user;
    // 2. 拼接 sql
    const statement = 'insert into `user` (name, password) values (?, ?)';
    // 3. 执行 sql
    const [result] = await connection.execute(statement, [username, password]);
    return result;
  }

  async findUserByName(name) {
    const statement = 'select * from `user` where name = ?';
    const [values] = await connection.execute(statement, [name]);
    return values;
  }

  async getUsers() {
    const statement = 'select * from `user`';
    const [values] = await connection.execute(statement);
    return values;
  }
}

module.exports = new UserService();
