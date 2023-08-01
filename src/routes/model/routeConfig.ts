import { MainPage } from 'pages/MainPage'
import { RouterConfig } from './types'
import { AboutPage } from 'pages/AboutPage'
import { RoutePath } from './routePaths'

export const routerConfig: RouterConfig[] = [
  {
    path: RoutePath.MAIN,
    component: MainPage,
    exact: true,
  },
  {
    path: RoutePath.ABOUT,
    component: AboutPage,
    exact: true,
  },
]
