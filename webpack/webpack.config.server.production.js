const webpack = require('webpack');
const universal = require('universal-webpack');
const settings = require('./universal-webpack-settings');
const config = require('./webpack.config.js');

config.plugins = config.plugins || [];
config.plugins = config.plugins.concat(
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.env.BABEL_ENV': JSON.stringify('production'),
        __CLIENT__: false,
        __SERVER__: true,
        __PRODUCTION__: true,
        __DEVELOPMENT__: false,
        __DEVTOOLS__: false
    })
);

module.exports = universal.serverConfiguration(config, settings);

