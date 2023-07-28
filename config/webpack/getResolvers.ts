import { ResolveOptions } from 'webpack'
import { WebpackOptions } from './types/config'

export const getResolvers = (options: WebpackOptions): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules']
  }
}
