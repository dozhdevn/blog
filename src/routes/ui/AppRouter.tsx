import React, { Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { routerConfig } from 'routes/model/routeConfig'

export const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routerConfig.map(({ component: Component, ...route }) => (
          <Route
            key={route.path}
            {...route}
            render={() => (
              <div className='page-wrapper'>
                <Component />
              </div>
            )}
          />
        ))}
      </Switch>
    </Suspense>
  )
}
