import React from 'react'
import { Counter } from './components/Counter'
import { Switch, Route, Link } from 'react-router-dom'

import './index.scss'
import { MainPage } from './pages/MainPage'
import { AboutPage } from './pages/AboutPage'

const App = () => {
  return (
    <div className='app'>
      <Link to='/'>MAIN</Link>
      <Link to='/about'>ABOUT</Link>
      <Switch>
        <Route path='/' exact component={MainPage} />
        <Route path='/about' exact component={AboutPage} />
      </Switch>
    </div>
  )
}

export default App
