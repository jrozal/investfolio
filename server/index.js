const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const router = require('./routes');

app.use(bodyParser.json());

// establish database connection
const db = require('../database');

// server routes
app.use('/', router);

// serve the client files
app.use('/', express.static(__dirname + '/../client/dist'));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});