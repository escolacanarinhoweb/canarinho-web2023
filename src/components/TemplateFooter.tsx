import { PrismicRichText } from '@prismicio/react'
import { FooterDocument } from '../../prismicio-types'
import { FormContact } from './FormContact'
import { SubtitleArea } from './SubtitleArea'
import { TitleArea } from './TitleArea'
import { ContainerSmall } from './Container'
import { RiveLogo } from './RiveLogo'
import { MapContent } from './MapContent'

export interface TemplateFooterProps extends FooterDocument {}

export const TemplateFooter = (props: TemplateFooterProps) => {
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
  return (
    <div className={Wrapper}>
      <div className={ContainerBox}>
        <div className={Row1}>
          <div className={MapBox}>
            <div className={MapTitleBox}>
              <TitleArea title={title_map} />
            </div>

            <div className={MapSubtitleBox}>
              <SubtitleArea subtitle={subtitle_map} />
            </div>

            <div className={MapContentBox}>
              <MapContent
                latitude={localization_unity1.latitude}
                longitude={localization_unity1.longitude}
                zoom={'12'}
              />
            </div>
          </div>

          <div className={FormBox}>
            <div className={FormTitleBox}>
              <TitleArea title={title_form} />
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

const Wrapper = ``
const ContainerBox = `
  ${ContainerSmall}
`
const Row1 = `
  grid
  grid-cols-2
`
const MapBox = ``
const MapTitleBox = ``
const MapSubtitleBox = ``
const MapContentBox = ``
const FormBox = ``
const FormTitleBox = ``
const FormSubtitleBox = ``
const FormContentBox = ``
const Row2 = `
  grid
  grid-cols-3
`
const UnityBox = ``
const UnityTitleBox = ``
const UnityInfoBox = ``
const LogoBox = ``
const CopyBox = ``
