const router = require('express').Router();
const controller = require('../controllers');

router.get('/getIndexData', controller.getMarketIndexData);

router.get('/getPortfolioData', controller.getPortfolioData);

module.exports = router;