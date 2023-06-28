const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '192.168.219.111',
  port: '3306',
  user: 'root',
  password: '0000',
  database: 'login-test'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});