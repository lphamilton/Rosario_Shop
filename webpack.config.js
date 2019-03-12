var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + '/shop/src/index.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
   output: {
    filename: 'bundle.js',
    path: __dirname + '/shop/dist',
    publicPath: '/'
  }
};