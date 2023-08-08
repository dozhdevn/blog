/* eslint-disable i18next/no-literal-string */
import { Suspense } from 'react'

import { AppRouter } from 'routes'
import { Navbar } from 'core/components/Navbar'
import { Sidebar } from 'core/components/Sidebar'
import { withTheme } from '../core'

import './app.scss'

function App() {
  return (
    <Suspense fallback={<div>Загрузка</div>}>
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
