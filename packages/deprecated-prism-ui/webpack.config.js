const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: '[name].css',
    disable: process.env.NODE_ENV !== 'production'
});

module.exports = [{
  name: 'css',
  entry: {
    'type': path.resolve('./src/scss/type/type.scss'),
    'common': path.resolve('./src/scss/common.scss'),
    'common-def': path.resolve('./src/scss/common.def.scss'),
    'demo': path.resolve('./demo/demo.scss'),
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
  ],
  devServer: {
    contentBase: path.join(__dirname, 'demo'),
    compress: true
  }
}];