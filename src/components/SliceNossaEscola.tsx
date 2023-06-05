import { NossaEscolaProps } from '@/slices/NossaEscola'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import { ContainerSmall } from './Container'
import { TitleArea } from './TitleArea'
import { ButtonText } from './ButtonText'
import { SubtitleArea } from './SubtitleArea'
import { RivePlane } from './RivePlane'
import { RiveSpinning } from './RiveSpinning'

export const SliceNossaEscola = (props: NossaEscolaProps) => {
  return (
    <div className={Wrapper}>
      <div className={ContainerBox}>
        <div className={GridBox}>
          <div className={ContentBox}>
            <div className={PlaneBox}>
              <RivePlane />
            </div>

            <div className={SpinningBox}>
              <RiveSpinning />
            </div>
            <div className={TitleBox}>
              <TitleArea color="yellow" title={props.slice.primary.title} />
            </div>

            <div className={SubtitleBox}>
              <SubtitleArea subtitle={props.slice.primary.subtitle} />
            </div>

            <div className={TextBox}>
              <PrismicRichText field={props.slice.primary.text} />
            </div>

            <div className={LinkBox}>
              <PrismicNextLink field={props.slice.primary.button_link}>
                <ButtonText
                  text={props.slice.primary.button_text}
                  color="yellow"
                />
              </PrismicNextLink>
            </div>
          </div>

          <div className={FigureBox}>
            <PrismicNextImage
              className={ImageBox}
              field={props.slice.primary.thumb}
            />
          </div>
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
const GridBox = `
  grid
  grid-cols-[1fr_auto]
  items-center
  relative
  after:rounded-tr-full
  after:rounded-br-full
  after:content-['']
  after:w-[90%]
  after:h-full
  after:absolute
  after:top-0
  after:left-0
  after:bg-white
  after:drop-shadow-baseLeft
  after:z-0
`
const ContentBox = `
  py-20
  flex
  flex-col
  justify-center
  items-center
  relative
  z-10
`
const PlaneBox = `
  w-[200px]
  h-[200px]
  absolute
  top-0
  left-0
`
const SpinningBox = `
  w-[200px]
  h-[200px]
  absolute
  -bottom-8
  right-0
`
const TitleBox = `
  mb-2
  text-center
`
const SubtitleBox = `
  mb-4
  text-center
`
const TextBox = `
  mb-8
  max-w-[680px]
`
const LinkBox = ``
const FigureBox = `
  w-[300px]
  h-[300px]
  relative
  rounded-full
  overflow-hidden
  shadow-2xl
  relative
  z-10
  after:content
  after:w-full
  after:h-full
  after:absolute
  after:top-0
  after:left-0
  after:z-10
  after:bg-blue-500
  after:opacity-90
  after:mix-blend-hard-light
`
const ImageBox = `
  w-full
  h-full
  object-cover
`
