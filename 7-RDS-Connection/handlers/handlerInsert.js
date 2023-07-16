'use strict';
const pool = require('../connection');

module.exports.RDSInsert = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  
  const body = JSON.parse(event.body);
  
  const sqlCreate = {
    USERNAME: body.username,
    NAME: body.name,
  };

  const sql = `INSERT INTO USERS SET ? ;`

  pool.getConnection(function(err, connection){
    if (err) throw err;

    connection.query(sql, [sqlCreate], function(error, results){
      if (error) {
        callback({
          statusCode: 400,
          headers: { 'Content-Type': 'application/json' },
          body: context.fail(JSON.stringify({
            success: false,
            message: error,
          }))
        });
      } else {
        callback(null, {
          statusCode: 200,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            success: true,
            message: 'OK',
            data: results,
          })
        });
        connection.release();
      }
    });
  });
};
