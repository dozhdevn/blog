export type WebpackMode = 'production' | 'development'

export interface WebpackPath {
  entry: string
  output: string
  html: string
  src: string
}

export interface WebpackOptions {
  mode: WebpackMode
  paths: WebpackPath
  isDev: boolean
  port: number
}

export type WebpackEnv = Pick<WebpackOptions, 'mode' | 'port'>
