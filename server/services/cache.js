const redis = require('redis');
const client = redis.createClient();

const setCache = (key, value) => {
  client.setex(key, 60, JSON.stringify(value));
};

const cache = (req, res, next) => {
  const key = req.route.path;
  client.get(key, (error, data) => {
    if (error) res.status(400).send(error);
    if (data !== null) res.status(200).send(JSON.parse(data));
    else next();
  });
};

module.exports = {
  setCache,
  cache
};