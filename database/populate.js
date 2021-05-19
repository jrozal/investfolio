const mockData = require('./mockData.js');
const sequelize = require('./index');

// populate the database with mock data
const populate = async () => {
  console.log('(Re)writing the mySQL database table(s), adding some mock data');

  try {
    await sequelize.sync({ force: true });
    console.log(`The investfolio database was just (re)created!`);

    await sequelize.models.portfolio.bulkCreate(mockData)
      .then(() => {
        console.log('Database was populated with mock data');
      });

    sequelize.close().then(() => console.log('Closing connection'));
  } catch (e) {
    return console.log(e);
  }
};

// use 'npm run db-seed' to execute
populate();