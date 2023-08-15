/* eslint-disable i18next/no-literal-string */
import { Suspense } from 'react'
import { compose } from 'redux'
import { BrowserRouter } from 'react-router-dom'

import { AppRouter } from 'routes'
import { Navbar } from 'core/components/Navbar'
import { Sidebar } from 'core/components/Sidebar'
import { withRedux } from 'core/hocs/withRedux'
import { withErrorBoundary } from 'core/hocs/withErrorBoundary'
import { withTheme } from '../core'

import './app.scss'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Загрузка</div>}>
        <div className='app'>
          <Navbar />
          <div className='content-page'>
            <Sidebar />
            <AppRouter />
          </div>
        </div>
      </Suspense>
    </BrowserRouter>

  )
}

export default compose(withRedux, withTheme, withErrorBoundary)(App)
