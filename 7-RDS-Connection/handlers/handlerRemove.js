'use strict';
const pool = require('../connection');

module.exports.RDSDelete = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  
  const userId = event.pathParameters.id;

  const sql = "DELETE FROM USERS WHERE ID = ? ;"

  pool.getConnection(function(err, connection){
    if (err) throw err;

    connection.query(sql, [userId], function(error, results){
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
