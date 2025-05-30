const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, '../public'),
    },
    historyApiFallback: true,
    port: 3000,
    hot: true,
    open: true,
    client: {
      overlay: true,
    }
  },
  optimization: {
    runtimeChunk: 'single',
  }
});