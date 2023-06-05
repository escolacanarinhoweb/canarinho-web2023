import { Swiper, SwiperSlide } from 'swiper/react'
import { DepoimentosSliceDefaultItem, Simplify } from '../../prismicio-types'
import { PrismicRichText } from '@prismicio/react'

import 'swiper/css'

interface SliderDepoimentosProps {
  items: Simplify<DepoimentosSliceDefaultItem>[]
}

export const SliderDepoimentos = ({ items }: SliderDepoimentosProps) => {
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
              <div className={Testimony}>
                <PrismicRichText field={item.testimony} />
              </div>

              <div className={Name}>{item.name}</div>
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
const Testimony = `
  mb-8
`
const Name = `
  font-serif
`
