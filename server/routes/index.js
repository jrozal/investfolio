const router = require('express').Router();
const controller = require('../controllers');
const { cache } = require('../services/cache');

router.get('/index-data', cache, controller.getMarketIndexData);

router.get('/portfolio-data', cache, controller.getPortfolioData);

router.patch('/portfolio-data', controller.updatePortfolioData)

router.post('/portfolio-data', controller.addPortfolioData)

router.delete('/portfolio-data', controller.deletePortfolioData)

module.exports = router;