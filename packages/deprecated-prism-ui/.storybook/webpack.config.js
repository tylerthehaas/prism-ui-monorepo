module.exports = async ({ config }) => {
  config.module.rules.push(
    {
      exclude: /node_modules/,
      test: /\.scss$/,
      use: [
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
