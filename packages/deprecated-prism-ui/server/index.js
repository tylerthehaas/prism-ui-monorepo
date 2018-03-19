const path = require('path');
const util = require('util');
const cors = require('cors');
const express = require('express');
const compress = require('compression');
const style = require('./style');

const server = express();
const port = process.env.PORT || 3000;
const docsPath = path.join(__dirname, '..', 'docs');
const iconsPath = path.join(__dirname, '..', 'icons');
const fontsPath = path.join(__dirname, '..', 'fonts');

server
  .use(compress({threshold: 0}))
  .use('/css', style)
  .use('/fonts', cors(), express.static(fontsPath))
  .use('/icons', express.static(iconsPath))
  .use('/docs', express.static(docsPath));

server.listen(port, err => {
  if (err) {
    console.info('Error: ' + util.inspect(err));
  } else {
    console.info('Server started listening on http://localhost:' + port);
  }
});
