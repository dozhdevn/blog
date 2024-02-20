import { useState, useLayoutEffect } from 'react'

type ScreenType = 'isMobile' | 'isTablet' | 'isDesktop'
type ScreenValues = Record<ScreenType, boolean>

const queries = {
  isMobile: '(width <= 767px)',
  isTablet: '(width >= 768px) and (width <= 1199px)',
  isDesktop: '(width >= 1200px)',
}

export const useMatchMedia = (): ScreenValues => {
  const mediaQueryLists = Object.values(queries).map((query) => matchMedia(query))

  const getValues = () => mediaQueryLists.map((list) => list.matches)

  const [values, setValues] = useState(getValues)

  useLayoutEffect(() => {
    const handler = () => setValues(getValues)

    mediaQueryLists.forEach((list) => list.addEventListener('change', handler))

    return () => mediaQueryLists.forEach((list) => list.removeEventListener('change', handler))
  }, [])

  return Object.keys(queries).reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
    }),
    {} as ScreenValues,
  )
}
