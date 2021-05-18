const router = require('express').Router();
const controller = require('../controllers');

router.get('/getIndexData', controller.getIndexData);

module.exports = router;