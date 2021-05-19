require('dotenv').config();

const config = {
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pw: process.env.DB_PW,
    name: 'investfolio'
  },
  finnhubAPI: process.env.FINNHUB_API_KEY,
  twelvedataAPI: process.env.TWELVEDATA_API
};

module.exports = config;