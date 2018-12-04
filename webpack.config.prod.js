var path = require('path');
var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const ReactRootPlugin = require("html-webpack-react-root-plugin");

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
    new HtmlWebpackPlugin({
      title: 'Learn Redux',
      inject: 'body'
    }),
    // new ReactRootPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': 'production'
      }
    })
  ],
  optimization: {
    // minimizer: [
    //   new UglifyJsPlugin({
    //     uglifyOptions: {
    //       cache: true,
    //       parallel: true,
    //       sourceMap: true,
    //       warnings: false
    //     }
    //   })
    // ],
    splitChunks: {
      chunks: 'all'
    }
  },
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
