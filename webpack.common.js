const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    index: './src/js/index.js',
    search: './src/js/search.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/views/index.pug',
      filename: 'index.html',
      favicon: './src/images/logo.svg',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: './src/views/search.pug',
      filename: 'search.html',
      favicon: './src/images/logo.svg',
      chunks: ['search'],
    }),
  ],
};
