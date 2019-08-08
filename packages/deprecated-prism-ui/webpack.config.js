const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const nodeModules = require('webpack-node-externals');

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname),
  entry: './components/index.js',
  module: {
    rules: [
      {
        include: /node_modules\/prismjs/,
        test: /\.css/,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
        ],
      },
      {
        exclude: /node_modules/,
        test: /\.scss/,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                postcssPresetEnv({
                  browsers: ['last 2 versions', 'ie >= 11'],
                }),
              ],
            },
          },
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
        options: {
          limit: 8192,
          name: 'images/[name].[ext]',
        },
        test: /.(ico|png|jpg|svg)(\?[a-z0-9=.]+)?$/,
      },
      {
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
        test: /.(woff(2)?|eot|ttf)(\?[a-z0-9=.]+)?$/,
      },
      {
        loader: 'html-loader?interpolate=require',
        test: /\.(html)$/,
      },
      {
        exclude: /node_modules/,
        test: /\.css$/,
        loader: 'style-loader',
      },
      {
        exclude: /node_modules/,
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
    moduleIds: 'total-size',
    runtimeChunk: false,
  },
  output: {
    filename: 'app.bundle.js',
    path: path.join(__dirname, '/dist'),
    library: 'prismui',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: "typeof self !== 'undefined' ? self : this",
  },
  plugins: [new MiniCssExtractPlugin()],
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: [path.resolve('./components'), path.resolve('./node_modules')],
  },
  externals: [nodeModules()],
};
