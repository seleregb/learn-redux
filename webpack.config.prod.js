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
  entry: {
    "app": [
      "@babel/polyfill",
      "./client/reduxstagram"
    ]
  },
  output: {
    path: path.resolve(__dirname, "./docs"),
    publicPath: "/",
    filename: "[name].bundle.js"
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
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       uglifyOptions: {
  //         cache: true,
  //         parallel: true,
  //         sourceMap: true,
  //         warnings: false
  //       }
  //     })
  //   ],
  //   splitChunks: {
  //     chunks: 'all',
  //     // cacheGroups: {
  //     //   vendors: {
  //     //     test: /[\\/]node_modules[\\/]/,
  //     //     name: 'vendors',
  //     //     chunks: 'all'
  //     //   },
  //     //   styles: {
  //     //     name: 'styles',
  //     //     test: /\.css$/,
  //     //     chunks: 'all',
  //     //     enforce: true
  //     //   }
  //     // }
  //   }
  // },
  module: {
    rules: [
      // js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: ['babel-loader'],
        include: path.join(__dirname, 'client'),
        // options: {
        //   presets: ["@babel/preset-env"]
        // }
      },
      // CSS
      {
        test: /\.styl$/,
        include: path.join(__dirname, 'client'),
        use: ['style-loader', 'css-loader', 'stylus-loader']
      }
    ]
  }
};
