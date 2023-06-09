import { PrismicRichText } from '@prismicio/react'
import { FooterDocument } from '../../prismicio-types'
import { FormContact } from './FormContact'
import { SubtitleArea } from './SubtitleArea'
import { TitleArea } from './TitleArea'
import { ContainerSmall } from './Container'
import { RiveLogo } from './RiveLogo'
import { MapContent } from './MapContent'
import { useEffect, useState } from 'react'

export interface TemplateFooterProps extends FooterDocument {}

export const TemplateFooter = (props: TemplateFooterProps) => {
  const [markers, setMarkers] = useState<
    {
      latitude: number
      longitude: number
      title: string
      content: string
    }[]
  >([])

  const {
    title_map,
    subtitle_map,
    title_form,
    subtitle_form,
    title_unity1,
    title_unity2,
    info_unity1,
    info_unity2,
    localization_unity1,
    localization_unity2,
    copyright
  } = props.data

  useEffect(() => {
    // @ts-ignore
    setMarkers([
      {
        latitude: props.data.localization_unity1.latitude,
        longitude: props.data.localization_unity1.longitude,
        // @ts-ignore
        title: props.data.title_unity1,
        // @ts-ignore
        content: props.data.info_unity1
      },
      {
        latitude: props.data.localization_unity2.latitude,
        longitude: props.data.localization_unity2.longitude,
        // @ts-ignore
        title: props.data.title_unity2,
        // @ts-ignore
        content: props.data.info_unity2
      }
    ])
  }, [props.data])

  return (
    <div className={Wrapper} id="contato">
      <div className={ContainerBox}>
        <div className={Row1}>
          <div className={MapBox}>
            <div className={MapTitleBox}>
              <TitleArea color="blue" title={title_map} />
            </div>

            <div className={MapSubtitleBox}>
              <SubtitleArea subtitle={subtitle_map} />
            </div>

            <div className={MapContentBox}>
              <MapContent markers={markers} />
            </div>
          </div>

          <div className={FormBox}>
            <div className={FormTitleBox}>
              <TitleArea color="blue" title={title_form} />
            </div>

            <div className={FormSubtitleBox}>
              <SubtitleArea subtitle={subtitle_form} />
            </div>

            <div className={FormContentBox}>
              <FormContact />
            </div>
          </div>
        </div>

        <div className={Row2}>
          <div className={UnityBox}>
            <div className={UnityTitleBox}>{title_unity1}</div>

            <div className={UnityInfoBox}>
              <PrismicRichText field={info_unity1} />
            </div>
          </div>

          <div className={UnityBox}>
            <div className={UnityTitleBox}>{title_unity2}</div>

            <div className={UnityInfoBox}>
              <PrismicRichText field={info_unity2} />
            </div>
          </div>

          <div className={LogoBox}>
            <RiveLogo />
          </div>
        </div>

        <div className={CopyBox}>{copyright}</div>
      </div>
    </div>
  )
}

const Wrapper = `
  text-white
`
const ContainerBox = `
  ${ContainerSmall}
`
const Row1 = `
  grid
  grid-cols-2
  gap-8
`
const MapBox = `
`
const MapTitleBox = `
  mb-2
`
const MapSubtitleBox = `
  mb-4
`
const MapContentBox = `
  h-[400px]
  rounded-md
  overflow-hidden
`
const FormBox = ``
const FormTitleBox = `
  mb-2
`
const FormSubtitleBox = `
  mb-4
`
const FormContentBox = ``
const Row2 = `
  pt-12
  grid
  grid-cols-[1fr_1fr_auto]
  items-center
`
const UnityBox = ``
const UnityTitleBox = `
  mb-2
  font-serif
  text-blue-500
  text-lg
`
const UnityInfoBox = ``
const LogoBox = `
  w-48
`
const CopyBox = `

  py-12
  text-center
`
