module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        {
          loader: 'sass-loader',
          options: {
            // @ref https://www.npmjs.com/package/node-sass-glob-importer
            // [CAUTION] use sass-loader@7.x.x to use 'importer'!!
            importer: require('node-sass-glob-importer')(),
          },
        },
      ],
    },
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    },
    {
      test: /\.stories\.tsx?$/,
      loaders: [
        {
          loader: require.resolve('@storybook/source-loader'),
          options: { parser: 'typescript' },
        },
      ],
      enforce: 'pre',
    },
  );

  return config;
};
