import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'

export type MapProps = {
  latitude: number
  longitude: number
  zoom: string
}

const Map = (props: MapProps) => {
  return (
    <MapContainer
      center={[props.latitude, props.longitude]}
      zoom={Number(props.zoom)}
      scrollWheelZoom={false}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='© <a href="https://apps.mapbox.com/feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url={`https://api.mapbox.com/styles/v1/andresh1985/ckmmbzf6i15yq17s2p8iniq78/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYW5kcmVzaDE5ODUiLCJhIjoiY2tnN3ZnZzF6MGI1ajMwcnd3N2JwaXRjcSJ9.mQTvcIrPN3wUav4sPDKQIg`}
      />
      <Marker
        position={[props.latitude, props.longitude]}
        draggable={true}
        icon={
          new L.Icon({
            iconUrl: '/images/aldeiaIcon.svg',
            iconRetinaUrl: '/images/aldeiaIcon.svg',
            iconAnchor: [5, 55],
            popupAnchor: [10, -44],
            iconSize: [25, 41],
            shadowSize: [68, 95],
            shadowAnchor: [20, 92]
          })
        }
      >
        <Popup>Aldeia</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map
