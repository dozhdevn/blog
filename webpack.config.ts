import  path from 'path'
import * as webpack from 'webpack'

import HtmlWebpackPlugin from 'html-webpack-plugin'

const config: webpack.Configuration  = {
  mode: 'development',
  entry: path.resolve('src', 'index.ts'),
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve('dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('public', 'index.html'),
    }),
    new webpack.ProgressPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}
export default config