import { getIsAuth } from 'entities/User/model/selectors/getIsAuth'
import { useSelector } from 'react-redux'
import { Redirect, RouteProps, Route } from 'react-router-dom'
import { UserRole } from 'entities/User/model/types/user'
import { isAccessByRole } from 'entities/User/model/selectors/roleSelectors'
import { RoutePath } from '../model/routePaths'

export interface PrivateRouterProps extends RouteProps {
  roles?: UserRole[]
}

export const PrivateRouter: React.FC<PrivateRouterProps> = ({ roles, ...props }) => {
  const isAuth = useSelector(getIsAuth)
  const hasAccessByRole = useSelector(isAccessByRole(roles || []))

  if (!isAuth) {
    return <Redirect to={RoutePath.MAIN} />
  }

  if (!hasAccessByRole) {
    return <Redirect to={RoutePath.FORBIDDEN} />
  }

  return <Route {...props} />
}
