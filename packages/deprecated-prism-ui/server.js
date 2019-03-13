const path = require("path");
const express = require("express");
const compression = require("compression");
const pathToDist = path.join(__dirname, "dist");
const pathToIndex = path.join(pathToDist, "index.html");
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

app.get("*", (req, res) => {
  res.sendFile(pathToIndex);
});

app.listen(
  PORT,
  err =>
    // eslint-disable-next-line no-console
    err ? console.error(err) : console.info(`Server listening on ${PORT}`),
);
