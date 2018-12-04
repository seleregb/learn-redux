var path = require('path');
var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ReactRootPlugin = require("html-webpack-react-root-plugin");
var postStylus = require('poststylus');

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
    path: path.resolve(__dirname, "./docs/static"),
    // publicPath: path.relative(__dirname, "/"),
    filename: "[name].bundle.js"
  },
  plugins: [
    // new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      title: 'Learn Redux',
      inject: 'body'
    }),
    // new ReactRootPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': 'production'
      }
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
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
      chunks: 'all',
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.styl$/,
          chunks: 'all',
          enforce: true
        }
      }
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
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader',
            options: {
              use: [
                postStylus(['autoprefixer']),
              ],
              modules: true,
            },
          },
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     // you can specify a publicPath here
          //     // by default it use publicPath in webpackOptions.output
          //     publicPath: '../'
          //   },
          // }
        ],
        exclude: /node_modules/,
      },
    ]
  }
};
