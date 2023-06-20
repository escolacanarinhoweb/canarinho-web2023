import { FotosInstagramProps } from '@/slices/FotosInstagram'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { TitleArea } from './TitleArea'
import { SubtitleArea } from './SubtitleArea'
import { ButtonText } from './ButtonText'
import { ContainerSmall } from './Container'

export const SliceFotosInstagram = (props: FotosInstagramProps) => {
  return (
    <div className={Wrapper}>
      <div className={ContainerBox}>
        <div className={GridBox}>
          <div className={ItemBox}>
            <div className={HeaderBox}>
              <div className={TitleBox}>
                <TitleArea color="blue" title={props.slice.primary.title} />
              </div>

              <div className={SubtitleBox}>
                <SubtitleArea subtitle={props.slice.primary.subtitle} />
              </div>

              <div className={ButtonBox}>
                <PrismicNextLink field={props.slice.primary.button_link}>
                  <ButtonText text={props.slice.primary.button_text} />
                </PrismicNextLink>
              </div>
            </div>
          </div>
          {props.slice.items.map((item, index) => (
            <div className={ItemBox} key={index}>
              <div className={FigureBox}>
                <PrismicNextLink field={props.slice.primary.button_link}>
                  <PrismicNextImage
                    className={ImageBox}
                    field={item.photo}
                    fallbackAlt=""
                  />
                </PrismicNextLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Wrapper = `
  py-20
`
const ContainerBox = `
  ${ContainerSmall}
`
const HeaderBox = `
  flex
  flex-col
  gap-4
  mb-8
  items-center
  text-white
`
const TitleBox = ``
const SubtitleBox = ``
const ButtonBox = ``
const GridBox = `
  flex
  flex-col
  lg:grid
  lg:grid-cols-3
  lg:grid-rows-2
  gap-4
`
const ItemBox = `
  fotoInstagram__item
  h-[200px]
  lg:h-[300px]
`
const FigureBox = `
  w-full
  h-full
  overflow-hidden
  rounded-md
  relative
  after:content
  after:w-full
  after:h-full
  after:absolute
  after:top-0
  after:left-0
  after:z-10
  after:bg-blue-500
  after:opacity-50
  after:mix-blend-hard-light
  after:pointer-events-none
  group
`
const ImageBox = `
  w-full
  h-full
  object-cover
  group-hover:scale-105
  transition-all
  duration-500
`
