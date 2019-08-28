var path = require('path');
var webpack = require('webpack');

module.exports = {
  // devtool: 'source-map',
  mode: 'development',
  entry: path.resolve(__dirname, 'client') + '/reduxstagram.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
},
  module: {
    rules: [
    // js
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          babelrc: false,
          presets: ['@babel/env','@babel/react']
        }
      }
    },
    // CSS
    {
      test: /\.styl$/,
      use: ['style-loader', 'css-loader', 'stylus-loader']
    }
    ]
  }
};
