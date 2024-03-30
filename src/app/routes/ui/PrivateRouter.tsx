import { getIsAuth } from 'entities/User/model/selectors/getIsAuth'
import { useSelector } from 'react-redux'
import { Redirect, RouteProps, Route } from 'react-router-dom'
import { isAccessByRole } from 'entities/User/model/selectors/roleSelectors'
import { UserRole } from 'entities/User'
import { getRouteForbidden, getRouteMain } from 'shared/constants/routing'

export interface PrivateRouterProps extends RouteProps {
  roles?: UserRole[]
}

export const PrivateRouter: React.FC<PrivateRouterProps> = ({ roles, ...props }) => {
  const isAuth = useSelector(getIsAuth)
  const hasAccessByRole = useSelector(isAccessByRole(roles || []))

  if (!isAuth) {
    return <Redirect to={getRouteMain()} />
  }

  if (!hasAccessByRole) {
    return <Redirect to={getRouteForbidden()} />
  }

  return <Route {...props} />
}
