const webpack = require('webpack')

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    port: process.env.PORT || 8080,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.name': JSON.stringify('Codevolution'),
    }),
  ],
}
