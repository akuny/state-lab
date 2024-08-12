const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CEREBRAL_TO_ZUSTAND_PORT } = require('./shared/ports.js');

module.exports = {
  mode: 'development',
  entry: './cerebral-to-zustand/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist/cerebral-to-zustand'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['babel-plugin-cerebral'],
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './cerebral-to-zustand/index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist/cerebral-to-zustand'),
    compress: true,
    port: CEREBRAL_TO_ZUSTAND_PORT,
    historyApiFallback: true,
  },
};
