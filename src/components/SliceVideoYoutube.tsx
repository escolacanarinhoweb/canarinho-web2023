import { VideoYoutubeProps } from '@/slices/VideoYoutube'
import { ContainerSmall, ContainerTiny } from './Container'
import { useEffect, useState } from 'react'

export const SliceVideoYoutube = (props: VideoYoutubeProps) => {
  const [currentVideo, setCurrentVideo] = useState<string | null>(null)

  useEffect(() => {
    function extrairIdDoVideo(url: string) {
      let id = ''

      // Padrões de expressão regular
      const padroes = [
        /(?:https?:\/\/(?:www\.)?youtube\.com\/watch\?v=|https?:\/\/youtu\.be\/|https?:\/\/www\.youtube.com\/embed\/)([\w-]{11})/,
        /(?:https?:\/\/(?:www\.)?youtube\.com\/watch\?[^&]+\bv=|https?:\/\/youtu\.be\/|https?:\/\/www.youtube.com\/embed\/)([\w-]{11})/
      ]

      // Loop através dos padrões e extrair o ID do vídeo
      for (let i = 0; i < padroes.length; i++) {
        const match = url.match(padroes[i])
        if (match && match[1]) {
          id = match[1]
          break
        }
      }

      return id
    }

    const videoId = extrairIdDoVideo(props.slice.primary.video.embed_url)
    setCurrentVideo(videoId)
  }, [props.slice.primary.video.embed_url])

  return (
    <div className={Wrapper}>
      <div className={Container}>
        <iframe
          className={Video}
          src={`https://www.youtube.com/embed/${currentVideo}?rel=0}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

const Wrapper = `
  pt-40
  pb-20
`
const Container = `
  ${ContainerTiny}
`
const Video = `
  w-full
  aspect-video
`
