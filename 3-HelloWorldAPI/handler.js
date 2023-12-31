'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello World from API',
        params: event.pathParameters.id,
        input: event,
      },
      null,
      2
    ),
  };
};
