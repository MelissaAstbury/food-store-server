const mysql = require('mysql2/promise');
const { config } = require('./config');

const connection = mysql.createPool({
  host: '127.0.0.1',
  user: config.user,
  password: config.password,
  database: config.database,
  waitForConnections: true,
  connectionLimit: 100,
  queueLimit: 0,
});

// connection.connect(function (err) {
//   if (err) throw err;
//   console.log('Connected!');
// });

module.exports = connection;
