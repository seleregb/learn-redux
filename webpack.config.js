var path = require('path');
var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackRootPlugin = require('html-webpack-root-plugin');
var args = require('yargs').argv;

// parameters
var isProd = args.mode;
var baseName = '%PUBLIC_URL%';

module.exports = {
  entry: './client/reduxstagram.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './static/[name].bundle.js',
  },
  devServer: {
    historyApiFallback: true,
    port: 7700
  },
  module: {
    rules: [
      // js
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: path.join(__dirname, 'client'),
        options: {
          // This is a feature of `babel-loader` for webpack (not Babel itself).
          // It enables caching results in ./node_modules/.cache/babel-loader/
          // directory for faster rebuilds.
          cacheDirectory: true,
          plugins: ['react-hot-loader/babel'],
        }
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
      title: 'Reduxstagram',
      template: './index.html',
      filename: path.resolve(__dirname, './dist/index.html'),
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    // new HtmlWebpackRootPlugin()
  ]
}