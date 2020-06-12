const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin({}),
      new UglifyJsPlugin({})
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    historyApiFallback: true,
    port: 3000
  },
  plugins: [
    new HTMLPlugin({
      filename: 'index.html',
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  resolve: {
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      { test: /\.js$/, 
        exclude: /node_modules/, 
        loader: "babel-loader" 
      }
    ],
  },
};