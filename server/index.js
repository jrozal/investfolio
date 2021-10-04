const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const router = require('./routes');

app.use(cors({ origin: 'http://localhost:3000' }));

// establish database connection
const db = require('./database');

// server routes
app.use('/api', router);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});