const path = require('path');
const custom = require('../webpack.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = async ({ config, mode }) => {
  config.module.rules.push(
    {
      loader: require.resolve('file-loader'),
      options: {
        name: 'fonts/[name].[ext]',
      },
      test: /\.(eot|ttf|woff|woff2)$/,
    },
    {
      exclude: /node_modules/,
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        require.resolve('css-loader'),
        {
          loader: require.resolve('postcss-loader'),
          options: {
            plugins: [
              postcssPresetEnv({
                browsers: ['last 2 versions', 'ie >= 11'],
              }),
            ],
          },
        },
        {
          loader: require.resolve('resolve-url-loader'),
        },
        {
          loader: require.resolve('sass-loader'),
          options: {
            sourceMap: true,
            sourceMapContents: false,
          },
        },
      ],
    }
  );

  config.plugins.push(new MiniCssExtractPlugin());

  return config;
};
