import { Suspense } from 'react'

import { withTheme } from '../core'
import { AppRouter } from 'routes'
import { Navbar } from 'core/components/Navbar'
import { Sidebar } from 'core/components/Sidebar'

import './app.scss'

const App = () => {
  return (
    <Suspense fallback="loading">
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
