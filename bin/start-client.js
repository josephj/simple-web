var webpack = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config = require('../webpack/webpack.config.development');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    https: false,
    quiet: false,
    colors: true,
    stats: 'errors-only'
}).listen(9989, 'localhost', function (err, result) {
    if (err) {
      console.log(err);
    }

    console.log('Listening at localhost:9989');
});
