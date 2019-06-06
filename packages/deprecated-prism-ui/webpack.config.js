const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dashboard = require('webpack-dashboard/plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');

const NODE_ENV = process.env.NODE_ENV || 'development';
// Run production build in test env for the CI
const isProd = NODE_ENV === 'production' || NODE_ENV === 'test';

module.exports = {
  context: path.resolve(__dirname),
  devServer: {
    contentBase: './docs',
    historyApiFallback: true,
    overlay: false,
    publicPath: 'http://127.0.0.1:3000',
    stats: { colors: true },
    watchContentBase: true,
  },
  devtool: isProd ? 'hidden-source-map' : 'cheap-module-source-map',
  entry: isProd
    ? {
      docs: './docs/index.js',
      main: './components/index.js',
    }
    : {
      main: [
        'webpack-dev-server/client?http://0.0.0.0:3000',
        './docs/index.js',
      ],
    },
  mode: isProd ? 'production' : 'development',
  module: {
    rules: [
      {
        include: /node_modules\/prismjs/,
        test: /\.css/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              sourceMap: !isProd,
            },
          },
        ],
      },
      {
        exclude: /node_modules/,
        test: /\.scss/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              sourceMap: !isProd,
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
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              sourceMapContents: false
            }
          },
        ],
      },
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
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
        test: /\.(svg|eot|ttf|woff|woff2)$/,
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
    minimize: isProd,
    minimizer: [
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minSize: 1,
          name: 'vendor',
          test: /node_modules/,
        },
        default: false,
      },
    },
  },
  output: {
    filename: `[name]${isProd ? '.[chunkhash]' : ''}.js`,
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(NODE_ENV) },
    }),
    new HtmlWebpackPlugin({
      cache: false,
      chunksSortMode: 'dependency',
      minify: isProd,
      template: './docs/index.html',
    }),
    new MiniCssExtractPlugin(),
  ].concat(isProd ? [] : [new Dashboard()]),
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    modules: [path.resolve('./components'), 'node_modules'],
  },
};
