require('dotenv').config();

const config = {
  db: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: 'investfolio',
    dialect: 'mysql'
  },
  finnhubAPI: process.env.FINNHUB_API_KEY,
  twelvedataAPI: process.env.TWELVEDATA_API
};

module.exports = config;