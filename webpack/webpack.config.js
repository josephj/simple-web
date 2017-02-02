const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './app.client.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-1', 'react']
        }
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: [
          'style-loader',
          {
            loader: "css-loader",
            options: {
              camelCase: true,
              modules: true,
              localIdentName: '[hash:base64:8]--[local]'
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(png|gif|jpg)$/,
        loader: 'url-loader',
        options: {
          limit: 25000
        }
      },
      {
        test: /\.(otf|eot|svg|ttf|woff)/,
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    ]
  },
  resolve: {
    modules: [
      path.join(__dirname, '../node_modules')
    ]
  },
}

