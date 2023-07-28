import { Configuration } from 'webpack'
import { WebpackOptions } from './types/config'
import { getPlugins } from './getPlugins'
import { getLoaders } from './getLoaders'
import { getResolvers } from './getResolvers'
import { getDevServer } from './getDevServer'

export const getWebpackConfig = (options: WebpackOptions): Configuration => {
  const { paths, mode, isDev } = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].bundle.js',
      path: paths.output,
      clean: true,
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    plugins: getPlugins(options),
    module: {
      rules: getLoaders(options),
    },
    resolve: getResolvers(options),
    devServer: isDev ? getDevServer(options): undefined,
  }
}
