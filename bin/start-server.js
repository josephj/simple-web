const universal = require('universal-webpack');
const settings = require('../webpack/universal-webpack-settings');
const config = require('../webpack/webpack.config');

universal.server(config, settings);

