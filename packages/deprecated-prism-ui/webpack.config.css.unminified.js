const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeModules = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname),
  entry: './components/index.js',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'resolve-url-loader',
          'sass-loader',
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
        test: /.(woff|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
      },
    ],
  },
  output: {
    filename: 'app.bundle.js',
    path: path.join(__dirname, '/css-only'),
    library: 'prismui',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'prism.css',
    }),
  ],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: [path.resolve('./components'), path.resolve('./node_modules')],
  },
  externals: [nodeModules()],
};
