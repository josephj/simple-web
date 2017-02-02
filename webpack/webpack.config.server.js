const universal = require('universal-webpack');
const settings = require('./universal-webpack-settings');
const config = require('./webpack.config.js');

module.exports = universal.serverConfiguration(config, settings);

