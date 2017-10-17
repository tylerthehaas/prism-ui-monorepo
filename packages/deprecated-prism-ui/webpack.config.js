const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: '[name].css',
    disable: process.env.NODE_ENV !== 'production'
});

module.exports = [{
  name: 'css',
  entry: {
    common: path.resolve('./src/scss/common.scss')
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
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
  ],
  devServer: {
    contentBase: path.join(__dirname, 'demo'),
    compress: true
  }
}];