const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { EXPERIMENT_TEMPLATE_PORT } = require('./shared/ports.js');

module.exports = {
  mode: 'development',
  entry: './experiment-template/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist/experiment-template'),
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
      template: './experiment-template/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist/experiment-template'),
    compress: true,
    port: EXPERIMENT_TEMPLATE_PORT,
    historyApiFallback: true,
  },
};
