const path = require('path');

module.exports = async ({config, _mode}) => {
  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [require.resolve('@storybook/addon-storysource/loader')],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.tsx?$/,
    include: path.resolve(__dirname, '../src'),
    use: [require.resolve('react-docgen-typescript-loader')],
  });

  config.resolve.extensions.push('.ts', '.tsx');

  config.resolve.alias = {
    'react-native': 'react-native-web',
  };

  return config;
};
