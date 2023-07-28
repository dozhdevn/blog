import { useSelector } from 'react-redux'
import { getTheme } from '../model/selectors/getTheme'
import { useLayoutEffect } from 'react'
import { Theme } from '../model/types/types'

const LOCAL_STORAGE_THEME_KEY = 'theme'

export const withTheme =
  <Props,>(Component: React.FC<Props>) =>
  (props: Props) => {
    const theme = useSelector(getTheme)

    useLayoutEffect(() => {
      document.documentElement.dataset.theme = theme

      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme || Theme.LIGHT)
    }, [theme])

    return <Component {...props} />
  }
