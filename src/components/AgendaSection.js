// src/components/AgendaSection.js
import Link from 'next/link'
import AgendaCard from './AgendaCard'
import './AgendaSection.css'

export default function AgendaSection({ corsi }) {
  // Mostra solo i prossimi 4 corsi
  const prossimi = corsi.slice(0, 4)

  return (
    <section className="agenda-section section section-gray">
      <div className="container">
        <div className="section-title">
          <h2>Prossimi Corsi</h2>
          <p>Agenda della formazione nelle Scuole Edili del Piemonte</p>
        </div>
        <div className="agenda-grid">
          {prossimi.map((corso) => (
            <AgendaCard key={corso.id} corso={corso} />
          ))}
        </div>
        <div className="agenda-cta">
          <Link href="/agenda" className="btn btn-primary">
            Vedi calendario completo
          </Link>
        </div>
      </div>
    </section>
  )
}
