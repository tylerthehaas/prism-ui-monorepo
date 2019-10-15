const path = require('path');
const nodeModules = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname),
  entry: path.join(__dirname, 'index.ts'),
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(sa|sc|c)ss$/,
        use: [
          'style-loader',
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        exclude: /node_modules/,
        test: /\.js/,
        use: [
          {
            loader: 'babel-loader',
            options: { babelrc: true },
          },
        ],
      },
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        loader: 'url-loader',
        test: /.ttf(\?[a-z0-9=.]+)?$/,
      },
    ],
  },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '/dist'),
    library: 'prismui',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: [path.resolve('./components'), path.resolve('./node_modules')],
  },
  externals: [nodeModules()],
};
