'use strict';

var moment = require('moment-timezone');
moment.locale('es');

module.exports.GetMoment = async (event) => {
  try {
    const timeSec = new Date().getTime();    
    const timeTZ = moment.tz(timeSec, 'America/Mexico_City');
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'OK',
        data: { timeSec, timeTZ },
      }),
    }
  } catch (error) {
    return {
      statusCode: 400,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Error',
        error: error.message
      }),
    };    
  }
};
