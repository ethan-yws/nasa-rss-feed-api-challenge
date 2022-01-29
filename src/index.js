const express = require('express');
const { port } = require('./config/default.config');
const { router } = require('./api/routes/rssFeed.routes');
const app = express();

app.use('/', router);

app.listen(port, () => {
  console.log(`NASA RSS Feed app listening at http://localhost:${port}`);
});
