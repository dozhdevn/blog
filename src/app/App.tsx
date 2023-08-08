import { Suspense } from 'react'

import { useTranslation } from 'react-i18next'
import { AppRouter } from 'routes'
import { Navbar } from 'core/components/Navbar'
import { Sidebar } from 'core/components/Sidebar'
import { withTheme } from '../core'

import './app.scss'

function App() {
  const { t } = useTranslation()

  return (
    <Suspense fallback={t('Загрузка')}>
      <div className='app'>
        <Navbar />
        <div className='content-page'>
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  )
}

export default withTheme(App)
