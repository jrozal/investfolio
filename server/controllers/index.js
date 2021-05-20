const api = require('../api');
const { models } = require('../../database/');
const { calculatePortfolioData } = require('../helpers');

const getMarketIndexData = (req, res) => {
  api.getMarketIndexData()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
};

const getPortfolioData = (req, res) => {
  const apiResponse = models.portfolio
    .findAll({ attributes: ['symbol'], raw: true })
    .then(data => {
      let symbols = [];
      data.forEach((record) => {
        symbols.push(record.symbol)
      });
      return symbols;
    })
    .then((symbols) => {
      return api.getPortfolioData(symbols);
    })
    .catch(err => err);

  const queryResponse = models.portfolio
    .findAll({ raw: true })
    .then(data => data)
    .catch(err => err)

  Promise.all([apiResponse, queryResponse])
    .then(([apiData, queryData]) => {
      return calculatePortfolioData(apiData, queryData);
    })
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
};

module.exports = { getMarketIndexData, getPortfolioData };