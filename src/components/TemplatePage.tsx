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
import { BGPageTop } from '@/svgs/BGPageTop'

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
            <div className={PageBgTopBox}>
              <BGPageTop className={PageBgTop} />
            </div>

            <div className={PageContainer}>
              <header className={PageHeader}>
                {props.page.data.image.url && (
                  <div className={PageFigure}>
                    <PrismicNextImage
                      className={PageImage}
                      field={props.page.data.image}
                      priority
                    />
                  </div>
                )}

                <div
                  className={`${PageTitle} ${
                    props.page.data.image.url ? '' : 'pt-32'
                  }`}
                >
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

            <div className={PageBgBottomBox}>
              <svg
                viewBox="0 0 1920 139"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className={PageBgBottom}
              >
                <path
                  d="M1.21081e-05 0.499832L1.21518e-05 -0.000167852L1920 0L1920 0.5C1920 1 1490.2 139 960 139C429.8 139 1.20643e-05 0.999832 1.21081e-05 0.499832Z"
                  fill="currentColor"
                />
              </svg>
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
  bg-gray-25
`
const PageBgTopBox = `
  w-full
  absolute
  top-0
  left-0
`
const PageBgTop = `
  w-full
  h-[300px]
`
const PageBgBottomBox = `
  h-[200px]
  bg-yellow-400
  bg-[url('/images/textureYellow.png')]
  bg-repeat
  bg-[length:400px_400px]
  text-gray-25
`
const PageBgBottom = ``
const PageContainer = `
  ${ContainerTiny}
  pt-32
  relative
`
const PageHeader = ``
const PageFigure = `
  w-full
  max-w-[680px]
  mx-auto
  h-[380px]
  mt-6
  mb-12
  relative
  rounded-2xl
  overflow-hidden
  after:content
  after:w-full
  after:h-full
  after:absolute
  after:top-0
  after:left-0
  after:z-10
  after:bg-blue-500
  after:opacity-30
  after:mix-blend-hard-light
`
const PageImage = `
  w-full
  h-full
  object-cover
  bg-gray-50
`
const PageTitle = ``
const PageBody = `
`
const PageContent = `
  py-16
  grid
  grid-cols-[1fr_auto]
  items-center
  justify-center
`
const PageText = `
  textLong
  max-w-[680px]
  mx-auto
`
const PageSideBar = ``
const PageSlices = ``
