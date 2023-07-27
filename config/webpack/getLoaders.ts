import { RuleSetRule } from 'webpack'

export const getLoaders = (): RuleSetRule[] => {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [typescriptLoader]
}
