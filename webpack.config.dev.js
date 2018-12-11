var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './client/reduxstagram.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './static/[name].bundle.js',
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 7770
  },
  module: {
    rules: [
      // js
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'client')
      },
      // CSS
      {
        test: /\.styl$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'client'),
        use: ['style-loader', 'css-loader', 'stylus-loader']
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: path.resolve(__dirname, './dist/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
}