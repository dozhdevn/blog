import { SwiperProvider, useSwiperContext } from 'widgets/layouts/SwiperProvider'

import 'swiper/css'

const SwiperComponent = () => {
  const { Swiper, isLoaded } = useSwiperContext()

  if (!isLoaded) {
    return null
  }

  return (
    <Swiper.Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <Swiper.SwiperSlide>Slide 1</Swiper.SwiperSlide>
      <Swiper.SwiperSlide>Slide 2</Swiper.SwiperSlide>
      <Swiper.SwiperSlide>Slide 3</Swiper.SwiperSlide>
      <Swiper.SwiperSlide>Slide 4</Swiper.SwiperSlide>
    </Swiper.Swiper>
  )
}

const TestSwiper = () => (
  <SwiperProvider>
    <SwiperComponent />
  </SwiperProvider>
)

export default TestSwiper
