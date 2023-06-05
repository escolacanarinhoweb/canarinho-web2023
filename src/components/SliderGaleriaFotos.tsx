import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import { PrismicNextImage } from '@prismicio/next'

interface SliderGaleriaFotosProps {
  items: any[]
}

export const SliderGaleriaFotos = ({ items }: SliderGaleriaFotosProps) => {
  return (
    <div className={Wrapper}>
      <Swiper
        className={Slider}
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {items.map((item, index) => (
          <SwiperSlide className={Slide} key={index}>
            <div className={SlideContent}>
              <div className={Figure}>
                <PrismicNextImage className={ImageBox} field={item.photo} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

const Wrapper = ``
const Slider = ``
const Slide = ``
const SlideContent = `
  p-12
  bg-white
`
const Figure = ``
const ImageBox = ``
