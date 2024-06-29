const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { REDUX_CAVEMAN_PORT } = require('./shared/ports.js');

module.exports = {
  mode: 'development',
  entry: './redux-caveman/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist/redux-caveman'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './redux-caveman/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist/redux-caveman'),
    compress: true,
    port: REDUX_CAVEMAN_PORT,
    historyApiFallback: true,
  },
};
