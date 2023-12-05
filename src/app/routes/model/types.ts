export interface RouterConfig {
  path: string
  component: React.FC
  exact?: boolean
  private?: boolean
}
