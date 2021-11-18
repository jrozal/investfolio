const dotenv = require('dotenv').config();

const config = {
  db: {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PW,
    database: process.env.DB_NAME,
    dialect: 'postgres'
  },
  finnhubApiKey: process.env.FINNHUB_API_KEY,
};

module.exports = config;