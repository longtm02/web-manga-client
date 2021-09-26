const webpack = require('webpack')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    https: true,
    hot: true,
    open: true,
    historyApiFallback: true,
    contentBase: './',
    port: process.env.PORT || 3000,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ReactRefreshWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Vishwas'),
    }),
  ],
}
