import { Swiper, SwiperSlide } from 'swiper/react'
import { DepoimentosSliceDefaultItem, Simplify } from '../../prismicio-types'
import { PrismicRichText } from '@prismicio/react'
import { Navigation } from 'swiper'
import { useRef } from 'react'

import 'swiper/css'
import { ButtonIcon } from './ButtonIcon'

interface SliderDepoimentosProps {
  items: Simplify<DepoimentosSliceDefaultItem>[]
}

export const SliderDepoimentos = ({ items }: SliderDepoimentosProps) => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className={Wrapper}>
      <Swiper
        loop
        centeredSlides
        className={Slider}
        wrapperClass={SliderTrack}
        spaceBetween={50}
        slidesPerView={3}
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
      >
        {items.map((item, index) => (
          <SwiperSlide className={Slide} key={index}>
            <div className={SlideContent}>
              <div className={Quote}>
                <svg
                  width="50"
                  height="38"
                  viewBox="0 0 50 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M46.7993 16.6027C44.6641 14.8024 42.8746 13.9098 41.4029 13.9098C41.4961 12.9758 42.2248 11.4558 43.5635 9.36242C44.9166 7.26824 46.5206 5.50771 48.3778 4.08082C48.2321 2.29403 47.317 0.933194 45.6461 0C42.2654 1.03989 39.0821 3.02738 36.0852 5.987C33.1027 8.94833 30.7286 12.2552 28.9916 15.9363C27.2547 19.603 26.3794 23.1241 26.3794 26.4707C26.3794 29.819 27.4402 32.4594 29.5746 34.38C31.7106 36.2989 34.4415 37.26 37.7696 37.26C41.0978 37.26 43.9753 35.9 46.3757 33.1927C48.7752 30.4855 49.9818 27.4852 49.9818 24.2046C49.9953 20.9367 48.921 18.4039 46.7993 16.6027ZM20.4779 16.6036C18.3428 14.8032 16.5397 13.9098 15.0679 13.9098C15.1611 12.9758 15.8898 11.4558 17.2294 9.36242C18.5817 7.26824 20.1602 5.50771 21.9768 4.08082C21.8311 2.25423 20.916 0.906942 19.2587 0.0135491C14.2198 1.57508 9.73757 5.10801 5.8527 10.5768C1.95343 16.043 0.00463867 20.8978 0.00463867 25.1378C0.00463867 29.3787 1.07902 32.4594 3.24048 34.38C5.40109 36.3006 8.14634 37.26 11.4745 37.26C14.8027 37.26 17.6675 35.9 20.0806 33.1927C22.4801 30.4855 23.6875 27.4852 23.6875 24.2046C23.674 20.9376 22.6131 18.4039 20.4779 16.6036Z"
                    fill="#60B5E4"
                  />
                </svg>
              </div>

              <div className={Testimony}>
                <PrismicRichText field={item.testimony} />
              </div>

              <div className={Name}>{item.name}</div>
            </div>
          </SwiperSlide>
        ))}

        <div className={ButtonPrev} ref={prevRef}>
          <ButtonIcon icon="arrow-left" color="blue" />
        </div>
        <div className={ButtonNext} ref={nextRef}>
          <ButtonIcon color="blue" />
        </div>
      </Swiper>
    </div>
  )
}

const Wrapper = `
`
const Slider = `
  pb-20
  sliderDepoimento
`
const SliderTrack = `
  pb-20
`
const Slide = ``
const SlideContent = `
  min-h-[320px]
  p-12
  bg-white
  rounded-2xl
`
const Quote = `
  mb-8
`
const Testimony = `
  mb-8
`
const Name = `
  font-serif
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
