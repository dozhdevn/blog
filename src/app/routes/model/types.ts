import { RoutePath } from './routePaths'

export interface RouterConfig {
  path: RoutePath
  component: React.FC
  exact?: boolean
  private?: boolean
}
