import webpack from 'webpack'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { WebpackOptions } from './types/config'

export const getPlugins = (
  options: WebpackOptions,
): webpack.WebpackPluginInstance[] => {
  const { paths, isDev, apiUrl } = options

  const plugins = [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new webpack.DefinePlugin({
      __IS__DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
  ]

  return plugins
}
