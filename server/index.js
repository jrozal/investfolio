const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes');

// server routes
app.use('/', router);

// serve the client files
app.use('/', express.static(__dirname + '/../client/dist'));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});