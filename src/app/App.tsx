import { Link } from 'react-router-dom'

import { withTheme } from '../core'
import { AppRouter } from 'routes'
import { Navbar } from 'core/component/Navbar'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default withTheme(App)
