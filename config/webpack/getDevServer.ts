import { WebpackOptions } from './types/config'

import { Configuration as DevServerConfiguration} from 'webpack-dev-server'

export const getDevServer = (options: WebpackOptions): DevServerConfiguration => {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true
  }
}
