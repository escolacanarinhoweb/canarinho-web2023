import { KeyTextField } from '@prismicio/client'
import dynamic from 'next/dynamic'

interface Props {
  markers?: {
    latitude: number
    longitude: number
    title: string
    content: string
  }[]
}

export const MapContent = (props: Props) => {
  const Map = dynamic(() => import('@/components/Map'), {
    ssr: false
  })
  return (
    <div className={Wrapper}>
      <Map {...props} />
    </div>
  )
}

const Wrapper = `
  mapContent
  w-full
  h-[400px]
`
