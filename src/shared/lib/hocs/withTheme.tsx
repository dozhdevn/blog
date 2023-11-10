import { useSelector } from 'react-redux'

import { getTheme } from 'app/core/model/selectors/getTheme'

import { useLayoutEffect } from 'react'
import { Theme } from 'app/core/model/types/types'

const LOCAL_STORAGE_THEME_KEY = 'theme'

export const withTheme = <Props extends Record<string, unknown>>(Component: React.FC<Props>) =>
  (props: Props) => {
    const theme = useSelector(getTheme)

    useLayoutEffect(() => {
      document.documentElement.dataset.theme = theme

      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme || Theme.LIGHT)
    }, [theme])

    return <Component {...props} />
  }
