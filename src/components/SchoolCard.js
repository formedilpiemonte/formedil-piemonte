// src/components/SchoolCard.js
import Link from 'next/link'
import './SchoolCard.css'

export default function SchoolCard({ scuola, isSelected }) {
  return (
    <div className={`school-card ${isSelected ? 'selected' : ''}`}>
      <div className="school-header">
        <h3>{scuola.nome}</h3>
        <span className="school-province">{scuola.provincia}</span>
      </div>
      <div className="school-info">
        <div className="school-detail">
          <span className="detail-icon">📍</span>
          <span>{scuola.indirizzo}, {scuola.cap} {scuola.citta}</span>
        </div>
        <div className="school-detail">
          <span className="detail-icon">📞</span>
          <a href={`tel:${scuola.telefono}`}>{scuola.telefono}</a>
        </div>
        <div className="school-detail">
          <span className="detail-icon">✉️</span>
          <a href={`mailto:${scuola.email}`}>{scuola.email}</a>
        </div>
      </div>
      <p className="school-description">{scuola.descrizione}</p>
      <Link href={`/scuole-edili/${scuola.id}`} className="school-link">
        Maggiori informazioni →
      </Link>
    </div>
  )
}
