'use client'

import { SmootherProvider } from '@/contexts/SmootherContext'
import { TemplateHeader, TemplateHeaderProps } from './TemplateHeader'
import { SliceZone } from '@prismicio/react'
import BannerHome from '@/slices/BannerHome'
import Modalidades from '@/slices/Modalidades'
import NossaEscola from '@/slices/NossaEscola'
import TourVirtual from '@/slices/TourVirtual'
import VideoYoutube from '@/slices/VideoYoutube'
import Depoimentos from '@/slices/Depoimentos'
import FotosInstagram from '@/slices/FotosInstagram'
import { TemplateFooter, TemplateFooterProps } from './TemplateFooter'

interface TemplateHomeProps {
  header: TemplateHeaderProps
  home: {
    slices: any[]
  }
  footer: TemplateFooterProps
}

export const TemplateHome = (props: TemplateHomeProps) => {
  return (
    <div className={Wrapper}>
      <TemplateHeader {...props.header} />
      <main className={Main}>
        <SmootherProvider>
          <div className={Block1}>
            <svg
              className={Ball}
              width="1008"
              height="1008"
              viewBox="0 0 1008 1008"
              fill="currentColor"
            >
              <circle cx="504" cy="504" r="504" />
            </svg>

            <SliceZone
              slices={props.home.slices}
              components={{
                banner_home: BannerHome
              }}
            />
          </div>

          <div className={Block2}>
            <SliceZone
              slices={props.home.slices}
              components={{
                modalidades: Modalidades,
                nossa_escola: NossaEscola,
                tour_virtual: TourVirtual
              }}
            />
          </div>

          <div className={Block3}>
            <SliceZone
              slices={props.home.slices}
              components={{
                video_youtube: VideoYoutube,
                depoimentos: Depoimentos,
                fotos_instagram: FotosInstagram
              }}
            />
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
const Block1 = `
  relative
`
const Ball = `
  w-[100vw]
  h-[100vw]
  aspect-[1/1]
  top-[calc(100vh-60px)]
  left-1/2
  transform
  -translate-x-1/2
  absolute
  text-white
  z-20
`
const Block2 = `
  relative
  z-20
`
const Block3 = `
  relative
  z-20
`
