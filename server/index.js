const express = require('express');

const app = express();

require('dotenv').config();

const router = require('./routers');

const port = process.env.PORT || 3000;

app.use(express.static('./front'));

app.use(router);

app.listen(port, () => {
  console.log(`Listenning on http://localhost:${port}`);
});

module.exports = app;
