import { getIsAuth } from 'entities/User/model/selectors/getIsAuth'
import { useSelector } from 'react-redux'
import { Redirect, RouteProps, Route } from 'react-router-dom'
import { RoutePath } from '../model/routePaths'

export interface PrivateRouterProps extends RouteProps {}

export const PrivateRouter: React.FC<PrivateRouterProps> = (props) => {
  const isAuth = useSelector(getIsAuth)

  if (!isAuth) {
    return <Redirect to={RoutePath.MAIN} />
  }

  return <Route {...props} />
}
