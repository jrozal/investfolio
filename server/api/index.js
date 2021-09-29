const axios = require('axios');
const config = require('../config');
const { finnhubApiKey } = config;
const { parseIndexData } = require('../helpers');
const finnhubURL = 'https://finnhub.io/api/v1';

function getMarketIndexData() {
  const symbols = ['SPY', 'QQQ', 'IWM', 'BTC/USD'];

  const urls = symbols.map((symbol) => {
    if (symbol !== 'BTC/USD') {
      return (axios.get(`${finnhubURL}/quote?symbol=${symbol}&token=${finnhubApiKey}`));
    } else {
      return (axios.get('https://api.pro.coinbase.com/products/BTC-USD/stats'))
    }
  });

  return Promise.all(urls)
    .then(results => {
      return results.map((res, i) => {
        return {
          symbol: symbols[i],
          ...res.data
        }
      });
    })
    .then(data => parseIndexData(data))
    .catch(err => err)
};

function generateFinnhubUrls(symbols) {
  const to = Math.floor((new Date().getTime()) / 1000); // unix time in seconds
  const from = to - 86400; // 24 hrs ago
  let urls = [];

  symbols.forEach((symbol) => {
    if (symbol.includes('USD')) {
      // let newSymbol = symbol.split('/').join('') + 'T';
      let newSymbol = symbol.split('/').join('-');
      urls.push(
        // axios.get(`${finnhubURL}/crypto/candle?symbol=BINANCE:${newSymbol}&resolution=D&from=${from}&to=${to}&token=${finnhubApiKey}`)
        axios.get(`https://api.pro.coinbase.com/products/${newSymbol}/stats`)
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
      console.log(results)
      return results;
    })
    .catch(err => console.log(err))
};

module.exports = { getMarketIndexData, getPortfolioData };