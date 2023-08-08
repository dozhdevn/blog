import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { RouterConfig } from './types'
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
