const dotenv = require('dotenv').config();

const config = {
  db: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: 'investfolio',
    dialect: 'postgres'
  },
  finnhubApiKey: process.env.FINNHUB_API_KEY,
};

module.exports = config;