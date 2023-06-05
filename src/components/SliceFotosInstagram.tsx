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
                <TitleArea title={props.slice.primary.title} />
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
            <div className={FigureBox} key={index}>
              <PrismicNextImage className={ImageBox} field={item.photo} />
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
const HeaderBox = ``
const TitleBox = ``
const SubtitleBox = ``
const ButtonBox = ``
const GridBox = `
  grid
  grid-cols-3
  gap-4
`
const ItemBox = ``
const FigureBox = `
  w-full
  h-[300px]
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
`
const ImageBox = `
  w-full
  h-full
  object-cover
`
