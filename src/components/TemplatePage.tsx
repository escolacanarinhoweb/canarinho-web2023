'use client'

import { SmootherProvider } from '@/contexts/SmootherContext'
import { TemplateHeader, TemplateHeaderProps } from './TemplateHeader'
import { KeyTextField } from '@prismicio/client'
import { TemplateFooter, TemplateFooterProps } from './TemplateFooter'
import { PrismicRichText, SliceZone } from '@prismicio/react'
import { ContainerSmall, ContainerTiny } from './Container'
import { PageDocument } from '../../prismicio-types'
import { PrismicNextImage } from '@prismicio/next'
import { TitlePage } from './TitlePage'
import TourVirtual from '@/slices/TourVirtual'
import Documentos from '@/slices/Documentos'
import GaleriaFotos from '@/slices/GaleriaFotos'
import VejaTambem from '@/slices/VejaTambem'
import VideoYoutube from '@/slices/VideoYoutube'

interface TemplatePageProps {
  header: TemplateHeaderProps
  page: PageDocument
  footer: TemplateFooterProps
}

export const TemplatePage = (props: TemplatePageProps) => {
  return (
    <div className={Wrapper}>
      <TemplateHeader {...props.header} />
      <main className={Main}>
        <SmootherProvider>
          <div className={Page}>
            <div className={PageContainer}>
              <header className={PageHeader}>
                <div className={PageImage}>
                  {props.page.data.image && (
                    <PrismicNextImage field={props.page.data.image} />
                  )}
                </div>

                <div className={PageTitle}>
                  <TitlePage title={props.page.data.title as KeyTextField} />
                </div>
              </header>

              <div className={PageBody}>
                <div className={PageContent}>
                  <div className={PageText}>
                    {props.page.data.texto && (
                      <PrismicRichText field={props.page.data.texto} />
                    )}
                  </div>

                  <div className={PageSideBar}>
                    <SliceZone
                      slices={props.page.data.slices}
                      components={{
                        veja_tambem: VejaTambem
                      }}
                    />
                  </div>
                </div>

                <div className={PageSlices}>
                  <SliceZone
                    slices={props.page.data.slices}
                    components={{
                      tour_virtual: TourVirtual,
                      documentos: Documentos,
                      galeria_fotos: GaleriaFotos,
                      video_youtube: VideoYoutube
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <TemplateFooter {...props.footer} />
        </SmootherProvider>
      </main>
    </div>
  )
}

const Wrapper = `
  homePage
`
const Main = `
`
const Page = `
  bg-white
`
const PageContainer = `
  ${ContainerTiny}
  pt-32
`
const PageHeader = ``
const PageImage = ``
const PageTitle = ``
const PageBody = `
  py-32
`
const PageContent = `
  grid
  grid-cols-[1fr_auto]
`
const PageText = ``
const PageSideBar = ``
const PageSlices = ``
