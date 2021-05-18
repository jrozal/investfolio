const axios = require('axios');
const config = require('../../config');
const API = config.twelvedataAPI;
const { parseIndexData } = require('./parse.js');

const indicesURL = `https://api.twelvedata.com/time_series?symbol=SPX, NDX, RUT, BTC/USD&interval=1day&outputsize=2&apikey=${API}`;

const getIndexData = () => {
  console.log('requesting index data')
  return axios.get(indicesURL)
    .then(res => parseIndexData(res.data))
    .catch(err => err)
};

module.exports = { getIndexData };