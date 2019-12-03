require('dotenv').config();
const path = require('path');
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const fetch = require('node-fetch');

const whitelist = process.env.OCT_VAULT_SITES_CORS_WHITELIST || [
  `https://vision-${process.env.NODE_ENV}.appreciatehub.com`,
];

const app = express();
const { PORT } = process.env || 3000;
const CACHE_CONTROL = 'private, max-age=3600';

app.use(express.static(path.join(__dirname, 'storybook-static')));

app.use(
  cors({
    methods: ['GET'],
  }),
);

app.use(compression());
app.use(express.static(path.resolve(`${__dirname}`, 'storybook-static')));
app.use(express.static(path.resolve(`${__dirname}`, 'legacy')));

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
      'style-src': [
        "'self'",
        "'unsafe-inline'",
        'https://fonts.googleapis.com',
      ],
      'img-src': ['*', 'data:'],
      'font-src': [
        "'self'",
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
      ],
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

// for some resaon it REALLY wants the next parameter in there and doesn't work otherwise. Don't ask me.
// eslint-disable-next-line
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal server error');
});

app.use('/legacy', express.static(`${__dirname}/legacy`));

app.use((req, res) => {
  res.status(404).send('Not found');
});

app.listen(PORT, err =>
  // eslint-disable-next-line no-console
  err ? console.error(err) : console.info(`Server listening on ${PORT}`),
);
