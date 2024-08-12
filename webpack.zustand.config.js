const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ZUSTAND_PORT } = require('./shared/ports.js');

module.exports = {
  mode: 'development',
  entry: './zustand/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist/zustand'),
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
      template: './zustand/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist/zustand'),
    compress: true,
    port: ZUSTAND_PORT,
    historyApiFallback: true,
  },
};
