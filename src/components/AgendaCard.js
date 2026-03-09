// src/components/AgendaCard.js
import './AgendaCard.css'

export default function AgendaCard({ corso }) {
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'short', year: 'numeric' }
    return new Date(dateString).toLocaleDateString('it-IT', options)
  }

  return (
    <div className="agenda-card">
      <div className="agenda-date-badge">
        <div className="date-day">{new Date(corso.dataInizio).getDate()}</div>
        <div className="date-month">
          {new Date(corso.dataInizio).toLocaleDateString('it-IT', { month: 'short' }).toUpperCase()}
        </div>
      </div>
      <div className="agenda-content">
        <span className="agenda-tipo">{corso.tipologia}</span>
        <h3>{corso.titolo}</h3>
        <div className="agenda-details">
          <div className="agenda-detail">
            <span className="detail-icon">📍</span>
            <span>{corso.sede}</span>
          </div>
          <div className="agenda-detail">
            <span className="detail-icon">📅</span>
            <span>{formatDate(corso.dataInizio)} - {formatDate(corso.dataFine)}</span>
          </div>
          <div className="agenda-detail">
            <span className="detail-icon">⏰</span>
            <span>{corso.ore} ore</span>
          </div>
          <div className="agenda-detail">
            <span className="detail-icon">👥</span>
            <span>{corso.destinatari}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
