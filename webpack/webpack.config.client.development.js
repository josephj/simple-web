const path = require('path');
const webpack = require('webpack');
const universal = require('universal-webpack');
const config = require('./webpack.config.js');
const settings = require('./universal-webpack-settings');

config.entry.app = [
  'react-hot-loader/patch',
  `webpack-dev-server/client?http://localhost:9989`,
  'webpack/hot/only-dev-server',
  config.entry.app
];

config.output = {
  filename: '[name].js',
  path: path.join(__dirname, '../build/client'),
  publicPath: 'http://localhost:9989/assets/'
};

config.plugins = config.plugins || [];
config.plugins.push(
  new webpack.HotModuleReplacementPlugin()
);

config.devtool = '#eval-source-map';

config.module.rules[0] = {
  test: /\.jsx?$/,
  exclude: [/node_modules/],
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['es2015', 'stage-1', 'react'],
        plugins: ['react-hot-loader/babel']
      }
    }
  ]
};

module.exports = universal.clientConfiguration(config, settings);

