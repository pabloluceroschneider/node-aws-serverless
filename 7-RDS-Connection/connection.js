const mysql = require('mysql');

const configDB = {
  connectionLimit : 10,
  host: 'rds-test.ctoprwud2pwt.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'adminadmin',
  port: '3306',
  database: 'RDSCurso',
  debug: true,
};

var pool = mysql.createPool(configDB);

module.exports = pool;