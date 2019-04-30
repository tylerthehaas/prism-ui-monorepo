const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dashboard = require('webpack-dashboard/plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const postcssPresetEnv = require('postcss-preset-env');
const nodeModules = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV || 'development';
// Run production build in test env for the CI
const isProd = NODE_ENV === 'production' || NODE_ENV === 'test';

module.exports = {
  mode: 'production',
  context: path.resolve(__dirname),
  devtool: 'hidden-source-map',
  entry: './components/index.js',
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
