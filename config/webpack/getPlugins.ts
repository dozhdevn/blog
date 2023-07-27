import webpack from 'webpack'

import HtmlWebpackPlugin from 'html-webpack-plugin'
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
  ]

  return plugins
}
