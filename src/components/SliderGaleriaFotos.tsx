import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { PrismicNextImage } from '@prismicio/next'
import { useRef } from 'react'

import 'swiper/css'
import { ButtonIcon } from './ButtonIcon'

interface SliderGaleriaFotosProps {
  items: any[]
}

export const SliderGaleriaFotos = ({ items }: SliderGaleriaFotosProps) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className={Wrapper}>
      <Swiper
        className={Slider}
        wrapperClass={SliderTrack}
        spaceBetween={20}
        slidesPerView={1}
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current
        }}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current
        }}
        breakpoints={{
          1170: {
            slidesPerView: 3
          }
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide className={Slide} key={index}>
            <div className={SlideContent}>
              <div className={Figure}>
                <PrismicNextImage
                  className={ImageBox}
                  field={item.photo}
                  priority
                  fallbackAlt=""
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className={ButtonPrev} ref={prevRef}>
          <ButtonIcon icon="arrow-left" color="orange" />
        </div>

        <div className={ButtonNext} ref={nextRef}>
          <ButtonIcon color="orange" />
        </div>
      </Swiper>
    </div>
  )
}

const Wrapper = ``
const Slider = `
  pb-20
`
const SliderTrack = `
  pb-20
`
const Slide = ``
const SlideContent = `
  w-full
`
const Figure = `
  w-full
  h-[320px]
  bg-black
  overflow-hidden
  rounded-2xl
  relative
`
const ImageBox = `
  w-full
  h-full
  object-cover
`

const ButtonPrev = `
  swiper-button-prev
  w-10
  h-10
  flex
  items-center
  justify-center
  absolute
  left-1/2
  bottom-[18px]
  z-50
  transform
  -translate-x-[120%]
  after:hidden
  !pointer-events-auto
  cursor-pointer
`
const ButtonNext = `
  swiper-button-next
  w-10
  h-10
  flex
  items-center
  justify-center
  absolute
  right-1/2
  bottom-[18px]
  z-50
  translate-x-[120%]
  after:hidden
  !pointer-events-auto
  cursor-pointer
`
