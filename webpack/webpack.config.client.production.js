const path = require('path');
const webpack = require('webpack');
const universal = require('universal-webpack');
const config = require('./webpack.config.js');
const settings = require('./universal-webpack-settings');
const WebpackCleanPlugin = require('clean-webpack-plugin');

config.devtool = 'source-map';

config.plugins = config.plugins || [];
config.plugins = config.plugins.concat(
  new WebpackCleanPlugin(
    [path.relative(config.context, config.output.path)],
    {root: config.context}
  ),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
    'process.env.BABEL_ENV': JSON.stringify('production'),
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
);

module.exports = universal.clientConfiguration(config, settings);

