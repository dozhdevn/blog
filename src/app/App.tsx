import { Suspense } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import { MainPage } from '../pages/MainPage'
import { AboutPage } from '../pages/AboutPage'
import { withTheme } from '../core'

const App = () => {
  return (
    <div className='app'>
      <Link to='/'>MAIN</Link>
      <Link to='/about'>ABOUT</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/about' exact component={AboutPage} />
        </Switch>
      </Suspense>
    </div>
  )
}

export default withTheme(App)
