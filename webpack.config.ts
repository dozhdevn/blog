import path from 'path'

import { Configuration } from 'webpack'
import { WebpackEnv, WebpackPath } from './config/webpack/types/config'
import { getWebpackConfig } from './config/webpack/getWebpackConfig'

export default (env: WebpackEnv): Configuration => {
  const paths: WebpackPath = {
    entry: path.resolve('src', 'index.tsx'),
    output: path.resolve('build'),
    html: path.resolve('public', 'index.html'),
    src: path.resolve('src'),
  }

  const mode = env.mode || 'development'
  const isDev = mode === 'development'

  const PORT = env.port || 3000
  const apiUrl = env.apiUrl || 'http://localhost:8000'

  const config: Configuration = getWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
    apiUrl,
  })

  return config
}
