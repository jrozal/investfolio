const router = require('express').Router();
const controller = require('../controllers');

router.get('/index-data', controller.getMarketIndexData);

router.get('/portfolio-data', controller.getPortfolioData);

router.put('/portfolio-data', controller.updatePortfolioData)

router.post('/portfolio-data', controller.addPortfolioData)

router.delete('/portfolio-data', controller.deletePortfolioData)

module.exports = router;