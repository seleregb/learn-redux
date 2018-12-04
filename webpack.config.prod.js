var path = require('path');
var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: [
    './client/reduxstagram.js'
  ],
  output: {
    path: path.join(__dirname, 'docs'),
    filename: '[name].bundle.js',
    // publicPath: '/static/'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': 'production'
      }
    }),
    new HtmlWebpackPlugin({
      title: "Learn Redux",
      inject: "body"
    })
  ],
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          cache: true,
          parallel: true,
          sourceMap: true,
          warnings: false
        }
      })
    ],
    splitChunks: {
      chunks: 'all',
      // cacheGroups: {
      //   vendors: {
      //     test: /[\\/]node_modules[\\/]/,
      //     name: 'vendors',
      //     chunks: 'all'
      //   },
      //   styles: {
      //     name: 'styles',
      //     test: /\.css$/,
      //     chunks: 'all',
      //     enforce: true
      //   }
      // }
    }
  },
  module: {
    rules: [
      // js
      {
        test: /\.js$/,
        loader: ['babel-loader'],
        include: path.join(__dirname, 'client')
      },
      // CSS
      {
        test: /\.styl$/,
        include: path.join(__dirname, 'client'),
        use: ['style-loader', 'css-loader', 'stylus-loader']
      },
      // {
      //   test: /\.styl$/,
      //   use: [
      //     {
      //       loader: 'stylus-loader',
      //       // options: {
      //       //   // you can specify a publicPath here
      //       //   // by default it use publicPath in webpackOptions.output
      //       //   publicPath: '../'
      //       // }
      //     },
      //     "css-loader", 'style-loader'
      //   ]
      // }
    ]
  }
};
