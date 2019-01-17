const path = require("path");
const express = require("express");
const compression = require("compression");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app
  .use(
    cors({
      methods: ["GET"],
    }),
  )
  .use(compression())
  .use(express.static(path.resolve(`${__dirname}`, "dist")));

app.listen(
  PORT,
  err =>
    // eslint-disable-next-line no-console
    err ? console.error(err) : console.info(`Server listening on ${PORT}`),
);
