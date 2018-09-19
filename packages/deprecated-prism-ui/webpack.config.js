const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Dashboard = require("webpack-dashboard/plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const postcssPresetEnv = require("postcss-preset-env");

const babelrc = require("./package.json").babel;

const NODE_ENV = process.env.NODE_ENV || "development";
const isProd = NODE_ENV === "production";

module.exports = {
  context: path.resolve(__dirname),
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    hot: true,
    overlay: false,
    publicPath: "http://127.0.0.1:3000",
    stats: { colors: true },
  },
  devtool: isProd ? "hidden-source-map" : "cheap-module-source-map",
  entry: {
    main: isProd
      ? "./components/index.js"
      : [
          "webpack-dev-server/client?http://0.0.0.0:3000",
          "webpack/hot/only-dev-server",
          "./components/index.js",
        ],
  },
  mode: isProd ? "production" : "development",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.scss/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              localIdentName: "[name]__[local]___[hash:base64:5]",
              sourceMap: !isProd,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                postcssPresetEnv({
                  browsers: ["last 2 versions", "ie >= 11"],
                }),
              ],
            },
          },
          "sass-loader",
        ],
      },
      {
        exclude: /node_modules/,
        test: /\.jsx?$/,
        use: [
          {
            loader: "babel-loader",
            options: babelrc,
          },
        ],
      },
      {
        loader: "url-loader",
        options: {
          limit: 8192,
        },
        test: /.(ico|png|jpg|svg)(\?[a-z0-9=.]+)?$/,
      },

      {
        loader: "file-loader",
        test: /.(woff(2)?|eot|ttf)(\?[a-z0-9=.]+)?$/,
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
          chunks: "initial",
          minSize: 1,
          name: "vendor",
          test: /node_modules/,
        },
        default: false,
      },
    },
  },
  output: {
    filename: `[name]${isProd ? ".[chunkhash]" : ""}.js`,
    path: path.join(__dirname, "./dist"),
    publicPath: "/",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": { NODE_ENV: JSON.stringify(NODE_ENV) },
    }),
    new HtmlWebpackPlugin({
      cache: false,
      chunksSortMode: "dependency",
      template: "templates/docs.html",
    }),
    new MiniCssExtractPlugin(),
  ].concat(isProd ? [] : [new Dashboard()]),
  resolve: {
    extensions: [".js"],
    modules: [path.resolve("./components"), "node_modules"],
  },
};
