const api = require('../api');
const { models } = require('../../database/');
const { calculatePortfolioData } = require('../helpers');

function getMarketIndexData(req, res) {
  api.getMarketIndexData()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
};

async function getPortfolioData(req, res) {
  const symbols = await getPortfolioSymbolsFromDb();
  const apiResponse = await getLiveMarketData(symbols);
  const queryResponse = await getPortfolioDataFromDb();

  Promise.all([apiResponse, queryResponse])
    .then(([apiData, queryData]) => {
      return calculatePortfolioData(apiData, queryData);
    })
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
};

function getPortfolioDataFromDb() {
  return models.portfolio
    .findAll({
      order: [
        ['symbol', 'ASC']
      ],
      raw: true
    })
    .then(data => data)
    .catch(err => err)
};

function getPortfolioSymbolsFromDb() {
  return models.portfolio
    .findAll({
      order: [
        ['symbol', 'ASC']
      ],
      attributes: ['symbol'],
      raw: true
    })
    .then(data => {
      return data.map((record) => {
        return record.symbol
      })
    })
    .catch(err => err);
};

function getLiveMarketData(symbols) {
  return api.getPortfolioData(symbols);
}

module.exports = { getMarketIndexData, getPortfolioData };