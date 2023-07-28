import { lazy } from 'react'

export const AboutPageLazy = lazy(() =>
  new Promise(() => {
    setTimeout(() => import('./AboutPage'), 1000)
  })
)
