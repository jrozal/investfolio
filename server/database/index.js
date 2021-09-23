const config = require('../config');
const { db: { database, username, password, host, dialect } } = config;
const Sequelize = require('sequelize');

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: dialect
});

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database', error);
  }
};

// import models
const modelDefiners = [
  require('./models/portfolio.model')
];

// define models
for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

dbConnection();

module.exports = sequelize;