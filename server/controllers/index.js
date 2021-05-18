const api = require('../api');

const getIndexData = (req, res) => {
  api.getIndexData()
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err))
};

module.exports = { getIndexData };