import React, { Suspense } from 'react'
import { Counter } from './components/Counter'
import { Switch, Route, Link } from 'react-router-dom'

import './index.scss'
import { MainPageLazy } from './pages/MainPage'
import { AboutPageLazy } from './pages/AboutPage'

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

export default App
