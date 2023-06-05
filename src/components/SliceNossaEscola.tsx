import { NossaEscolaProps } from '@/slices/NossaEscola'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import { ContainerSmall } from './Container'
import { TitleArea } from './TitleArea'
import { ButtonText } from './ButtonText'
import { SubtitleArea } from './SubtitleArea'

export const SliceNossaEscola = (props: NossaEscolaProps) => {
  return (
    <div className={Wrapper}>
      <div className={ContainerBox}>
        <div className={ContentBox}>
          <div className={TitleBox}>
            <TitleArea title={props.slice.primary.title} />
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
  )
}

const Wrapper = `
  py-20
`
const ContainerBox = `
  ${ContainerSmall}
  grid
  grid-cols-[1fr_auto]
`
const ContentBox = `
  max-w-[680px]
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
`
const LinkBox = ``
const FigureBox = `
  w-[300px]
  h-[300px]
  relative
  rounded-full
  overflow-hidden
  shadow-2xl
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
