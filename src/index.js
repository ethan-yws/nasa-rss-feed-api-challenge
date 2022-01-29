const express = require('express');
const { port } = require('./config/default.config');
const app = express();

app.get('/');

app.listen(port, () => {
  console.log(`NASA RSS Feed app listening at http://localhost:${port}`);
});
