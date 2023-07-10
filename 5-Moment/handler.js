'use strict';

var moment = require('moment-timezone');
moment.locale('es');

module.exports.GetMoment = async (event) => {
  try {
    const timeSec = new Date().getTime();    
    const timeTZ = moment.tz(timeSec, 'America/Mexico_City');
    const timeL = moment(timeTZ).format('L');
    const timelll = moment(timeTZ).format('lll');
    
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'OK',
        data: { timeSec, timeTZ, timeL, timelll },
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
