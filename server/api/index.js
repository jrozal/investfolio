const axios = require('axios');
const config = require('../../config');
const { twelvedataApiKey, finnhubApiKey } = config;
const { parseIndexData } = require('../helpers');

function getMarketIndexData() {
  const twelvedataURL = `https://api.twelvedata.com/time_series?symbol=SPX, NDX, RUT, BTC/USD&interval=1day&outputsize=2&apikey=${twelvedataApiKey}`;

  return axios.get(twelvedataURL)
    .then(res => parseIndexData(res.data))
    .catch(err => err)
};

function generateFinnhubUrls(symbols) {
  const finnhubURL = 'https://finnhub.io/api/v1';
  const to = Math.floor((new Date().getTime()) / 1000); // unix time in seconds
  const from = to - 86400; // 24 hrs ago
  let urls = [];

  symbols.forEach((symbol) => {
    if (symbol.includes('USD')) {
      let newSymbol = symbol.split('/').join('') + 'T';
      urls.push(
        axios.get(`${finnhubURL}/crypto/candle?symbol=BINANCE:${newSymbol}&resolution=D&from=${from}&to=${to}&token=${finnhubApiKey}`)
      );
    } else {
      urls.push(
        axios.get(`${finnhubURL}/quote?symbol=${symbol}&token=${finnhubApiKey}`)
      );
    }
  });

  return urls;
};

function getPortfolioData(symbols) {
  const requestUrls = generateFinnhubUrls(symbols);

  return Promise.all(requestUrls)
    .then(res => {
      let results = [];

      symbols.forEach((symbol, i) => {
        results.push({
          symbol: symbol,
          data: res[i].data
        })
      })
      return results;
    })
    .catch(err => console.log(err))
};

module.exports = { getMarketIndexData, getPortfolioData };