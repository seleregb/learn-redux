var path = require('path');
var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './client/reduxstagram.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: './static/[name].bundle.js',
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
      template: './index.html',
      filename: path.resolve(__dirname, './dist/index.html'),
    }),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          warnings: false
        }
      })
    ]
  },
  resolve: {
    alias: {
      'react': 'preact-compat',
      'react-dom': 'preact-compat'
    }
  }
}