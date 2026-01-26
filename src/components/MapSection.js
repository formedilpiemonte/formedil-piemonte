// src/components/MapSection.js
'use client'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import SchoolCard from './SchoolCard'
import './MapSection.css'

// Importa la mappa dinamicamente per evitare SSR issues
const SchoolMap = dynamic(() => import('./SchoolMap'), {
  ssr: false,
  loading: () => <div className="map-loading">Caricamento mappa...</div>
})

export default function MapSection({ scuole }) {
  const [selectedSchool, setSelectedSchool] = useState(null)

  return (
    <section className="map-section section">
      <div className="container-wide">
        <div className="section-title">
          <h2>Le Scuole Edili in Piemonte</h2>
          <p>Presenza capillare sul territorio regionale per la formazione professionale</p>
        </div>
        
        <div className="map-container">
          <SchoolMap scuole={scuole} onSchoolSelect={setSelectedSchool} />
        </div>

        <div className="schools-grid">
          {scuole.map((scuola) => (
            <SchoolCard 
              key={scuola.id} 
              scuola={scuola}
              isSelected={selectedSchool === scuola.id}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
