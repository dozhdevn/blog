import { Suspense } from 'react'
import { compose } from 'redux'
import { BrowserRouter } from 'react-router-dom'

import { AppRouter } from 'app/routes'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { withRedux } from 'shared/lib/hocs/withRedux'
import { withErrorBoundary } from 'shared/lib/hocs/withErrorBoundary'
import { withAuth } from 'shared/lib/hocs/withAuth'

import { useSelector } from 'react-redux'
import { getUserInited } from 'entities/User/model/selectors/getUserInited'
import { Flex } from 'shared/ui/Flex'
import { withTheme } from 'shared/lib/hocs/withTheme'
import './app.scss'

const App: React.FC = () => {
  const inited = useSelector(getUserInited)
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Загрузка</div>}>
        <div className='app'>
          <Navbar />
          <Flex align='stretch'>
            <Sidebar />
            {inited && <AppRouter />}
          </Flex>
        </div>
      </Suspense>
    </BrowserRouter>
  )
}

export default compose<React.FC>(withRedux, withTheme, withErrorBoundary, withAuth)(App)
