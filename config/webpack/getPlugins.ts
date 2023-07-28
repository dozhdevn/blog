import webpack from 'webpack'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { WebpackOptions } from './types/config'

export const getPlugins = (
  options: WebpackOptions
): webpack.WebpackPluginInstance[] => {
  const { paths } = options

  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
  ]

  return plugins
}