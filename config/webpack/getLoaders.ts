import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { RuleSetRule } from 'webpack'

import { WebpackOptions } from './types/config'

export const getLoaders = (options: WebpackOptions): RuleSetRule[] => {
  const { isDev } = options

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const svgLoader = {
    test: /\.svg$/,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack'],
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const cssLoader = {
    // test: /\.s[ac]ss$/i,
    test: /\.(sass|css|scss)$/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: /\.module\.scss$/,
            localIdentName: isDev ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:5]',
          },
        },
      },
      'sass-loader',
    ],
  }

  return [typescriptLoader, fileLoader, svgLoader, cssLoader]
}
