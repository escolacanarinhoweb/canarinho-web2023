import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import { KeyTextField } from '@prismicio/client'

export type MapProps = {
  markers?: {
    latitude: number
    longitude: number
    title: string
    content: string
  }[]
}

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID

const MarkerIcon = new L.Icon({
  iconUrl: '/images/canarinhoMarker.png',
  iconSize: [40, 40],
  iconAnchor: [20, 20],
  popupAnchor: [0, -40]
})

const Map = (props: MapProps) => {
  return (
    <MapContainer
      center={[-15.7809585, -47.9041363]}
      zoom={12}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
      />
      {props.markers?.map((marker, index) => (
        <Marker
          key={marker.title}
          position={[marker.latitude, marker.longitude]}
          draggable={true}
          title={marker.title}
          icon={MarkerIcon}
        >
          <Popup>{marker.title}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default Map
