const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: '[name].css',
    disable: process.env.NODE_ENV !== 'production'
});

module.exports = [{
  name: 'docs',
  entry: {
    'docs': path.resolve('./docs/docs.scss'),
  },
  output: {
    path: path.resolve('./docs'),
    filename: '[name].css.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }],
        fallback: 'style-loader'
      })
    }]
  },
  plugins: [
    extractSass
  ]
}, {
  name: 'css',
  entry: {
    'prism': path.resolve('./src/scss/prism.scss'),
    'prism-norm': path.resolve('./src/scss/prism-norm.scss'),
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].css.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: extractSass.extract({
        use: [{
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }],
        fallback: 'style-loader'
      })
    }]
  },
  plugins: [
    extractSass
  ]
}];