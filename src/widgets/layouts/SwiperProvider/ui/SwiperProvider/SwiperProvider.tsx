import React, {
  useEffect, useMemo, useRef, useState,
} from 'react'

import { SwiperType } from '../../types/swiper'
import { SwiperContext } from '../../libs/SwiperContext'

const getAsyncSwiperModules = async (): Promise<SwiperType> => {
  const Swiper = await import('swiper/react')
  return Swiper
}

const SwiperProvider = ({ children }: React.PropsWithChildren) => {
  const SwiperRef = useRef<SwiperType>()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!SwiperRef.current) {
      getAsyncSwiperModules().then((res) => {
        SwiperRef.current = res
        setIsLoaded(true)
      })
    }
  }, [])

  const value = useMemo(
    () => ({
      Swiper: SwiperRef.current,
      isLoaded,
    }),
    [isLoaded],
  )

  return <SwiperContext.Provider value={value}>{children}</SwiperContext.Provider>
}
export default SwiperProvider
