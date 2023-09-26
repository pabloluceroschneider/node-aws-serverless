const mysql = require('mysql');

const configDB = {
  connectionLimit : 10,
  host: 'fake.asdqweasd.us-east-1.rds.fakeamazonaws.com',
  user: 'fakeuser',
  password: 'fakepassword',
  port: '3306',
  database: 'RDSCurso',
  debug: true,
};

var pool = mysql.createPool(configDB);

module.exports = pool;
