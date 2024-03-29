import { PageLoader } from 'widgets/PageLoader'
import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { routerConfig } from 'app/routes/model/routeConfig'

import { PrivateRouter } from './PrivateRouter'

export const AppRouter: React.FC = () => (
  <Suspense fallback={<PageLoader />}>
    <Switch>
      {routerConfig.map((route) => {
        if (route.private) {
          return <PrivateRouter key={route.path} roles={route.roles} {...route} />
        }

        return <Route key={route.path} {...route} render={() => <route.component />} />
      })}
    </Switch>
  </Suspense>
)
