const mysql = require('mysql2/promise');
const config = require('../config');
const { db: { database, username, password, host, dialect } } = config;

const initialize = async () => {
  try {
    const connection = await mysql.createConnection({
      host: host,
      user: username,
      password: password
    });

    // create database if it does not exists
    connection.query(`CREATE DATABASE IF NOT EXISTS \`${database}\`;`)
    .then((data) => {
      console.log(`New database "${database}" created!`)
    })
    .then(() => {
      connection.end();
      console.log('Closing connection');
    })
    .catch((error) => {
      console.log('Error creating new database', error);
    });

  } catch (error) {
    console.error(error);
  }
}

// run 'npm run db-init' to create the database
initialize();