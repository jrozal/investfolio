const api = require('../api');
const { models } = require('../database/');
const { calculatePortfolioData } = require('../helpers');
const { setCache } = require('../services/cache');

function getMarketIndexData(req, res) {
  api.getMarketIndexData()
    .then(data => {
      setCache(req.route.path, data);
      res.status(200).send(data)
    })
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
    .then(data => {
      setCache(req.route.path, data);
      res.status(200).send(data)
    })
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

function updatePortfolioData(req, res) {
  const symbol = req.body.symbol;
  const updatedRecord = {
    description: req.body.description,
    shares: req.body.quantity,
    pricePaid: req.body.pricePaid,
  };

  return models.portfolio
    .update(updatedRecord,{
      where: { symbol: symbol }
    })
    .then(data => {
      res.statusMessage = 'Update success';
      res.status(204).end();
    })
    .catch(err => res.status(500).send(err))
};

function addPortfolioData(req, res) {
  const newRecord = {
    symbol: req.body.symbol,
    description: req.body.description,
    shares: req.body.quantity,
    pricePaid: req.body.pricePaid
  };

  return models.portfolio
    .create(newRecord)
    .then(data => res.status(201).send(data))
    .catch(err => res.status(500).send(err))
};

function deletePortfolioData(req, res) {
  const symbol = req.body.symbol;

  return models.portfolio
    .destroy({
      where: {
        symbol: symbol
      }
    })
    .then(data => {
      res.statusMessage = 'Deletion success';
      res.status(204).end();
    })
    .catch(err => res.status(500).send(err))
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

module.exports = {
  getMarketIndexData,
  getPortfolioData,
  updatePortfolioData,
  addPortfolioData,
  deletePortfolioData
};