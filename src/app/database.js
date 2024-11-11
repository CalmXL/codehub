const mysql = require('mysql2');

const connectPool = mysql.createPool({
  host: '101.132.255.125',
  port: 3306,
  database: 'codehub',
  user: 'root',
  password: 'xL1210...',
  connectionLimit: 5,
});

// 2. 获取连接是否成功

connectPool.getConnection((err, connection) => {
  if (err) {
    console.log('获取连接失败~', err);
    return;
  }

  // 2. 尝试和数据库建立连接
  connection.connect((err) => {
    if (err) {
      console.log('和数据库交互失败');
    } else {
      console.log('数据库连接成功, 可以操作');
    }
  });
});

// 获取连接池中的连接对象
const connection = connectPool.promise();
module.exports = connection;
