import { GaleriaFotosProps } from '@/slices/GaleriaFotos'
import { PrismicRichText } from '@prismicio/react'
import { SliderGaleriaFotos } from './SliderGaleriaFotos'

export const SliceGaleriaFotos = (props: GaleriaFotosProps) => {
  return (
    <div className={Wrapper}>
      <div className={ContainerBox}>
        <header className={HeaderBox}>
          {props.slice.primary.title && (
            <h2 className={TitleBox}>{props.slice.primary.title}</h2>
          )}

          {props.slice.primary.text && (
            <div className={DescriptionBox}>
              <PrismicRichText field={props.slice.primary.text} />
            </div>
          )}
        </header>

        <div className={BodyBox}>
          <div className={SliderBox}>
            <SliderGaleriaFotos items={props.slice.items} />
          </div>
        </div>
      </div>
    </div>
  )
}

const Wrapper = `
  py-12
`
const ContainerBox = ``
const HeaderBox = `
`
const TitleBox = `
  mb-4
  text-3xl
  font-serif
  text-orange-500
  text-center
`
const DescriptionBox = `
  mb-12
  max-w-[680px]
  mx-auto
`
const BodyBox = ``
const SliderBox = ``
