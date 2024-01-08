import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage'
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
    path: `${RoutePath.PROFILE}/:id`,
    component: ProfilePage,
    exact: true,
    private: true,
  },
  {
    path: RoutePath.ARTICLES,
    component: ArticlesPage,
    exact: true,
    private: true,
  },
  {
    path: RoutePath.ARTICLE_DEATAILS,
    component: ArticleDetailsPage,
    exact: true,
    private: true,
  },
  {
    path: RoutePath.NOT_FOUND,
    component: NotFoundPage,
  },
]
