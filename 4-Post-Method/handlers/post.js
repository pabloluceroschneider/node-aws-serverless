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

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};