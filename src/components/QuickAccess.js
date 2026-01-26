// src/components/QuickAccess.js
import Link from 'next/link'
import './QuickAccess.css'

export default function QuickAccess() {
  const items = [
    {
      title: 'Corsi di Formazione',
      description: 'Scopri il catalogo formativo per lavoratori, imprese e giovani',
      icon: '📚',
      link: '/corsi',
      color: '#003d7a'
    },
    {
      title: 'Sicurezza sul Lavoro',
      description: 'Formazione obbligatoria e cultura della prevenzione',
      icon: '🛡️',
      link: '/sicurezza',
      color: '#e67e22'
    },
    {
      title: 'Giovani e Orientamento',
      description: 'Avvicina i giovani alle professioni dell\'edilizia',
      icon: '🎓',
      link: '/giovani',
      color: '#27ae60'
    },
    {
      title: 'Servizi per le Imprese',
      description: 'Supporto alla qualificazione e competitività aziendale',
      icon: '🏗️',
      link: '/imprese',
      color: '#8e44ad'
    }
  ]

  return (
    <section className="quick-access">
      <div className="container">
        <div className="quick-access-grid">
          {items.map((item, index) => (
            <Link 
              key={index} 
              href={item.link} 
              className="quick-access-card"
              style={{'--card-color': item.color}}
            >
              <div className="quick-access-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="quick-access-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
