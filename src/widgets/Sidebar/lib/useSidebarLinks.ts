import { getAuthData } from 'entities/User'
import { useSelector } from 'react-redux'
import HomeIcon from 'shared/assets/icons/svg/home.svg'
import AboutIcon from 'shared/assets/icons/svg/about.svg'
import ProfileIcon from 'shared/assets/icons/svg/profile.svg'
import ArticlesIcon from 'shared/assets/icons/svg/articles.svg'
import { RoutePath, getRouteProfile } from 'shared/constants/routing'

import { SideBarLinkType } from '../model/types'

export const useSidebarLinks = () => {
  const user = useSelector(getAuthData)

  const sidebarLinksList: SideBarLinkType[] = [
    {
      to: RoutePath.MAIN,
      title: 'Главная',
      icon: HomeIcon,
    },
    {
      to: RoutePath.ABOUT,
      title: 'О сайте',
      icon: AboutIcon,
    },
    {
      to: getRouteProfile(user?.id),
      title: 'Профиль',
      icon: ProfileIcon,
      visibleOnlyAuth: true,
    },
    {
      to: RoutePath.ARTICLES,
      title: 'Статьи',
      icon: ArticlesIcon,
      visibleOnlyAuth: true,
    },
  ]

  return sidebarLinksList
}
