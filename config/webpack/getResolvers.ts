import { ResolveOptions } from 'webpack'

export const getResolvers = (): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
  }
}
