import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
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
  {
    path: RoutePath.NOT_FOUND,
    component: NotFoundPage,
  },
]
