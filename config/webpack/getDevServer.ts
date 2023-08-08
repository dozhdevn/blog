import { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import { WebpackOptions } from './types/config'

export const getDevServer = (options: WebpackOptions): DevServerConfiguration => ({
  port: options.port,
  open: true,
  historyApiFallback: true,
})
