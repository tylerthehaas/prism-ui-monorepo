const path = require('path');
const express = require('express');
const sass = require('node-sass');
const styleRoute = express.Router();
const includePaths = [ path.join(__dirname, '..', 'src', 'scss') ];
const outputStyle = 'compressed';

function overridePrimary(color) {
  return /[0-9A-F]{6}$/i.test(color)
    ? `$psm-color-primary-base: #${color};`
    : '';
}

function getMount(path) {
  return path
    ? `/${path.split('/')[1]}`
    : '';
}

function overrideMount(fpath) {
  return fpath
    ? `$psm-mount-location: '/${fpath}';`
    : '';
}

function doImport(normalize) {
  return normalize
    ? "@import 'prism-norm.scss';"
    : "@import 'prism.scss';";
}

styleRoute.get('/:color?/prism.css', function (req, res) {
  const forwardedPath = req.get('x-forwarded-path');
  const data = overridePrimary(req.params.color) + overrideMount(getMount(forwardedPath)) + doImport(req.query.norm);

  function success(result) {
    res.type('css').send(result.css.toString());
  }

  function error(err) {
    res.status(500).send('Unable to process due to error:' + err);
  }

  sass.render({data, includePaths, outputStyle}, (err, result) => {
    return err
      ? error(err)
      : success(result);
  });
});

module.exports = styleRoute;