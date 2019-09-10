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
        require.resolve('style-loader'),
        require.resolve('css-loader'),
        require.resolve('resolve-url-loader'),
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

  return config;
};
