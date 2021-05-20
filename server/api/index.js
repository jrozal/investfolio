const axios = require('axios');
const config = require('../../config');
const { twelvedataApiKey, finnhubApiKey } = config;
const { parseIndexData } = require('../helpers');

const twelvedataURL = `https://api.twelvedata.com/time_series?symbol=SPX, NDX, RUT, BTC/USD&interval=1day&outputsize=2&apikey=${twelvedataApiKey}`;
const finnhubURL = 'https://finnhub.io/api/v1';

const getMarketIndexData = () => {
  console.log('requesting index data')
  return axios.get(twelvedataURL)
    .then(res => parseIndexData(res.data))
    .catch(err => err)
};

const getPortfolioData = (symbols) => {
  console.log('requesting stock data');
  let reqestUrls = [];
  let to = Math.floor((new Date().getTime()) / 1000); // unix time in seconds
  let from = to - 86400; // 24 hrs ago

  symbols.forEach((symbol) => {
    if (symbol.includes('USD')) {
      let newSymbol = symbol.split('/').join('') + 'T';
      reqestUrls.push(
        axios.get(`${finnhubURL}/crypto/candle?symbol=BINANCE:${newSymbol}&resolution=D&from=${from}&to=${to}&token=${finnhubApiKey}`)
      )
    } else {
      reqestUrls.push(
        axios.get(`${finnhubURL}/quote?symbol=${symbol}&token=${finnhubApiKey}`)
      )
    }
  });

  return Promise.all(reqestUrls)
    .then(res => {
      let results = [];

      symbols.forEach((symbol, i) => {
        results.push(
          {
            symbol: symbol,
            data: res[i].data
          }
        )
      })

      return results;
    })
    .catch(err => console.log(err))
};

module.exports = { getMarketIndexData, getPortfolioData };