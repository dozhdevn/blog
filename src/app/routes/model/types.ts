import { UserRole } from 'entities/User'

export interface RouterConfig {
  path: string
  component: React.FC
  exact?: boolean
  private?: boolean
  roles?: UserRole[]
}
