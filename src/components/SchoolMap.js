// src/components/SchoolMap.js
'use client'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix per i marker di Leaflet in Next.js
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

// Icon personalizzato
const customIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

export default function SchoolMap({ scuole, onSchoolSelect }) {
  // Centro del Piemonte
  const center = [45.0522, 7.5153]

  return (
    <MapContainer
      center={center}
      zoom={8}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {scuole.map((scuola) => (
        <Marker
          key={scuola.id}
          position={scuola.coordinate}
          icon={customIcon}
          eventHandlers={{
            click: () => {
              if (onSchoolSelect) onSchoolSelect(scuola.id)
            },
          }}
        >
          <Popup>
            <div style={{ minWidth: '200px' }}>
              <h3 style={{ 
                color: 'var(--primary-blue)', 
                marginBottom: '8px',
                fontSize: '1.1rem',
                fontWeight: '600'
              }}>
                {scuola.nome}
              </h3>
              <p style={{ 
                margin: '5px 0',
                color: 'var(--text-gray)',
                fontSize: '0.9rem'
              }}>
                📍 {scuola.indirizzo}, {scuola.citta}
              </p>
              <p style={{ 
                margin: '5px 0',
                color: 'var(--text-gray)',
                fontSize: '0.9rem'
              }}>
                📞 {scuola.telefono}
              </p>
              <p style={{ 
                margin: '5px 0',
                fontSize: '0.9rem'
              }}>
                ✉️ <a href={`mailto:${scuola.email}`} style={{ color: 'var(--accent-orange)' }}>
                  {scuola.email}
                </a>
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
