require('dotenv').config();

const config = {
  db: {
    host: 'localhost',
    name: 'investfolio',
    user: process.env.DB_USER,
    pw: process.env.DB_PW,
    port: process.env.DB_PORT
  },
  finnhubAPI: process.env.FINNHUB_API_KEY,
  twelvedataAPI: process.env.TWELVEDATA_API
};

module.exports = config;