var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './client/reduxstagram.js'
  ],
  devServer: {
    contentBase: './dist',
    hot: true
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    // new webpack.optimize.OccurrenceOrderPlugin(), // not needed anymore
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      // js
      {
        test: /\.js$/,
        loader: "babel-loader",
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
        include: path.join(__dirname, 'client'),
        use: ['style-loader', 'css-loader', 'stylus-loader']
      }
    ]
  }
};
