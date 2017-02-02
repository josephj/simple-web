const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config.js');

config.entry.main = [
    `webpack-dev-server/client?http://localhost:9899`,
    'webpack/hot/only-dev-server',
    config.entry.app
];

config.output = {
    filename: '[name].js',
    path: path.join(__dirname, '../'),
    publicPath: 'https://localhost:9899/assets/'
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
      'react-hot-loader',
      {
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'stage-1', 'react']
        }
      }
    ]
};

module.exports = config;

