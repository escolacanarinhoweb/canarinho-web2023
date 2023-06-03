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

interface TemplateHomeProps {
  header: TemplateHeaderProps
  home: {
    slices: any[]
  }
}

export const TemplateHome = (props: TemplateHomeProps) => {
  return (
    <div className={Wrapper}>
      <TemplateHeader {...props.header} />
      <main className={Main}>
        <SmootherProvider>
          <SliceZone
            slices={props.home.slices}
            components={{
              banner_home: BannerHome,
              modalidades: Modalidades,
              nossa_escola: NossaEscola,
              tour_virtual: TourVirtual,
              video_youtube: VideoYoutube,
              depoimentos: Depoimentos,
              fotos_instagram: FotosInstagram
            }}
          />
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
