import { Suspense } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import { MainPageLazy } from './pages/MainPage'
import { AboutPageLazy } from './pages/AboutPage'
import { withTheme } from './core'

import './index.scss'

const App = () => {
  return (
    <div className='app'>
      <Link to='/'>MAIN</Link>
      <Link to='/about'>ABOUT</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/' exact component={MainPageLazy} />
          <Route path='/about' exact component={AboutPageLazy} />
        </Switch>
      </Suspense>
    </div>
  )
}

export default withTheme(App)
