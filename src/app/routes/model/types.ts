import { UserRole } from 'entities/User/model/types/user'

export interface RouterConfig {
  path: string
  component: React.FC
  exact?: boolean
  private?: boolean
  roles?: UserRole[]
}
