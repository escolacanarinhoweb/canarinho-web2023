import dynamic from 'next/dynamic'

interface Props {
  latitude: number
  longitude: number
  zoom: string
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
  h-[300px]
`
