require('dotenv').config();
const path = require('path');
const express = require('express');
const compression = require('compression');
const expressStaticGzip = require('express-static-gzip');
const cors = require('cors');
const helmet = require('helmet');

const whitelist = process.env.OCT_VAULT_SITES_CORS_WHITELIST || [
  `https://vision-${process.env.NODE_ENV}.appreciatehub.com`,
];

const app = express();
const { PORT } = process.env || 3000;
const CACHE_CONTROL = 'private, max-age=3600';

app.use(express.static(path.join(__dirname, '../dist')));

app.use(
  cors({
    methods: ['GET'],
  }),
);

app.use(compression());
app.use(express.static(path.resolve(`${__dirname}`, 'dist')));
app.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept',
  );
  next();
});

// Activate helmet's non-defaults...
// Super strict CSP.
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
    },
  }),
);

// Block all the Adobe things.
app.use(helmet.permittedCrossDomainPolicies());

// Don't reveal our inbound traffic.
app.use(helmet.referrerPolicy({ policy: 'same-origin' }));

app.options('*', cors(), (req, res) => {
  res.set('Allow', 'OPTIONS, GET');
  res.set('Content-Length', '0');
  res.set('Cache-Control', CACHE_CONTROL);

  if (whitelist.includes(req.headers.origin)) {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  }
  res.set(
    'Access-Control-Allow-Headers',
    'authorization,content-type,x-client-id,x-request-id',
  );
  res.send();
});

app.get('/octhc', (req, res) => {
  res.status(200).send('Ok');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal server error');
});

// app.get('*', (req, res) => {
//   res.sendFile(indexHTML);
// });

app.use((req, res) => {
  res.status(404).send('Not found');
});

app.listen(PORT, err =>
  // eslint-disable-next-line no-console
  err ? console.error(err) : console.info(`Server listening on ${PORT}`),
);
