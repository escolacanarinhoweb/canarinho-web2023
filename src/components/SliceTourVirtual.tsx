import { TourVirtualProps } from '@/slices/TourVirtual'
import { TitleArea } from './TitleArea'
import { SubtitleArea } from './SubtitleArea'
import { ButtonText } from './ButtonText'
import Image from 'next/image'
import { PrismicNextLink } from '@prismicio/next'
import { ContainerSmall } from './Container'

export const SliceTourVirtual = (props: TourVirtualProps) => {
  return (
    <div className={Wrapper}>
      <div className={ContainerBox}>
        <header className={HeaderBox}>
          <div className={TitleBox}>
            <TitleArea title={props.slice.primary.title} />
          </div>

          <div className={SubtitleBox}>
            <SubtitleArea subtitle={props.slice.primary.subtitle} />
          </div>
        </header>

        <div className={BodyBox}>
          <div className={ButtonsBox}>
            <PrismicNextLink
              className={ButtonBox}
              field={props.slice.primary.button1_link}
            >
              <ButtonText
                text={props.slice.primary.button1_text}
                color="blue"
              />
            </PrismicNextLink>

            <PrismicNextLink
              className={ButtonBox}
              field={props.slice.primary.button2_link}
            >
              <ButtonText
                text={props.slice.primary.button2_text}
                color="orange"
              />
            </PrismicNextLink>
          </div>

          <footer className={FooterBox}>
            <Image
              className={ImageBox}
              src="/images/schools.svg"
              width={500}
              height={500}
              alt="Ilustração de duas casas uma azul e outra laranja"
            />
          </footer>
        </div>
      </div>
    </div>
  )
}

const Wrapper = ``
const ContainerBox = `
  ${ContainerSmall}
  flex
  flex-col
  justify-center
  items-center
`
const HeaderBox = ``
const TitleBox = `
  mb-2
`
const SubtitleBox = `
  mb-4
`
const BodyBox = `
`
const ButtonsBox = `
  flex
  items-center
  justify-center
  gap-4
`
const ButtonBox = ``
const FooterBox = `
  mt-12
`
const ImageBox = ``
