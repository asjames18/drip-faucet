const fetch = require('node-fetch')

const API_ENDPOINT = 'https://api.drip.community/prices/'

exports.handler = async (event, context) => {
  let res, data
  try {
    res = await fetch(API_ENDPOINT);
    data = await res.json();
    data = { price: data[data.length-1].value };
    
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: err.message
      })
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}