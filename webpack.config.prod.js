var path = require('path');
var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var postStylus = require('poststylus');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: [
    "@babel/polyfill",
    "./client/reduxstagram"
  ],
  output: {
    path: path.join(__dirname, './dist/static'),
    filename: '[name].bundle.js',
    publicPath: '/dist/static/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Learn Redux',
      inject: 'body',
      filename: path.resolve(__dirname, './dist/index.html'),
      'meta': {
        'Content-Security-Policy': { 'http-equiv': 'Content-Security-Policy', 'content': 'default-src https:' },
        // Will generate: <meta http-equiv="Content-Security-Policy" content="default-src https:">
        // Which equals to the following http header: `Content-Security-Policy: default-src https:`
        'set-cookie': { 'http-equiv': 'set-cookie', content: 'name=value; expires=date; path=url' },
        // Will generate: <meta http-equiv="set-cookie" content="value; expires=date; path=url">
        // Which equals to the following http header: `set-cookie: value; expires=date; path=url`
      }
    }),
    // new ReactRootPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': 'production'
      }
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
        include: path.join(__dirname, 'client')
      },
      // CSS
      {
        test: /\.styl$/,
        include: path.join(__dirname, 'client'),
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
        ],
        exclude: /node_modules/,
      },
    ]
  }
};
