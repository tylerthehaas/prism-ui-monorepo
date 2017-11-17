const path = require('path');
const util = require('util');
const express = require('express');
const compress = require('compression');
const style = require('./style');

const server = express();
const port = process.env.PORT || 3000;
const staticPath = path.join(__dirname, '..', 'docs');

server
  .use(compress({threshold: 0}))
  .use('/css', style)
  .use('/docs', express.static(staticPath));

server.listen(port, err => {
  if (err) {
    console.info('Error: ' + util.inspect(err));
  } else {
    console.info('Server started listening on http://localhost:' + port);
  }
});
