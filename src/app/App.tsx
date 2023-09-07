import { Suspense } from 'react'
import { compose } from 'redux'
import { BrowserRouter } from 'react-router-dom'

import { AppRouter } from 'routes'
import { Navbar } from 'core/components/Navbar'
import { Sidebar } from 'core/components/Sidebar'
import { withRedux } from 'core/hocs/withRedux'
import { withErrorBoundary } from 'core/hocs/withErrorBoundary'
import { withAuth } from 'core/hocs/withAuth'
import { withTheme } from '../core'

import './app.scss'

const App: React.FC = () => (
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

export default compose<React.FC>(withRedux, withTheme, withErrorBoundary, withAuth)(App)
