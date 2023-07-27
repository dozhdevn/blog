import path from 'path'

import { WebpackEnv, WebpackPath } from './config/webpack/types/config'
import { getWebpackConfig } from './config/webpack/getWebpackConfig'
import { Configuration } from 'webpack'

export default (env: WebpackEnv): Configuration => {
  const paths: WebpackPath = {
    entry: path.resolve('src', 'index.tsx'),
    output: path.resolve('build'),
    html: path.resolve('public', 'index.html'),
  }

  const mode = env.mode || 'development'
  const isDev = mode === 'development'

  const PORT = env.port || 3000

  const config: Configuration = getWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  })

  return config
}
