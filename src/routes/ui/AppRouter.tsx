import React, { Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import { Route, Switch } from 'react-router-dom'
import { routerConfig } from 'routes/model/routeConfig'

export const AppRouter: React.FC = () => {
  const { t } = useTranslation()

  return (
    <Suspense fallback={<div>{t('Загрузка')}</div>}>
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
