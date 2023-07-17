'use strict';

module.exports.ping = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const { name, age } = JSON.parse(event.body);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `${name} is ${age} years old`,
        input: event,
      },
      null,
      2
    ),
  };
};
