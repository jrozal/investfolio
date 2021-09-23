const { Sequelize, DataTypes } = require('sequelize');

const Portfolio = (sequelize) => {
  sequelize.define('portfolio', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    symbol: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shares: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    pricePaid: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  }, {
    // disable auto pluralization of model names
    freezeTableName: true
  });
};

module.exports = Portfolio;

