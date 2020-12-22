const mysql = require('mysql');
const { config } = require('./config');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: config.user,
  password: config.password,
  database: config.database,
});

connection.connect(function (err) {
  if (err) throw err;
  console.log('Connected!');
});

module.exports = connection;
