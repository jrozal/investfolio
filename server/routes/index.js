const router = require('express').Router();
const controller = require('../controllers');

router.get('/getIndexData', controller.getMarketIndexData);

router.get('/getPortfolioData', controller.getPortfolioData);

router.put('/updatePortfolioData', controller.updatePortfolioData)

router.post('/addPortfolioData', controller.addPortfolioData)

router.delete('/deletePortfolioData', controller.deletePortfolioData)

module.exports = router;