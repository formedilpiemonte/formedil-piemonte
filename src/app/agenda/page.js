// src/app/agenda/page.js
import Link from 'next/link'
import AgendaCard from '@/components/AgendaCard'

// Importa i dati dei corsi
import newsData from '@/data/corsi.json'

export default function Agenda() {
  // Ordina i corsi per data di inizio
  const sortedCorsi = [...corsiData].sort((a, b) => 
    new Date(a.dataInizio) - new Date(b.dataInizio)
  )

  // Filtra corsi passati e futuri
  const oggi = new Date()
  oggi.setHours(0, 0, 0, 0)
  
  const corsiFuturi = sortedCorsi.filter(corso => 
    new Date(corso.dataInizio) >= oggi
  )
  
  const corsiPassati = sortedCorsi.filter(corso => 
    new Date(corso.dataInizio) < oggi
  )

  // Raggruppa corsi per sede
  const corsiPerSede = corsiFuturi.reduce((acc, corso) => {
    if (!acc[corso.sede]) {
      acc[corso.sede] = []
    }
    acc[corso.sede].push(corso)
    return acc
  }, {})

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Agenda Corsi</h1>
          <p>Calendario completo dei corsi programmati nelle Scuole Edili del Piemonte</p>
        </div>
      </div>

      <div className="container">
        <section className="content-section">
          <p className="intro-text">
            Consulta il calendario dei corsi in programma presso le Scuole Edili 
            del Piemonte. Per informazioni e iscrizioni, contatta direttamente la 
            sede di riferimento.
          </p>
        </section>

        {/* Filtri */}
        <section className="content-section">
          <div className="filters-card">
            <h3>Filtra per:</h3>
            <div className="filters-grid">
              <div className="filter-group">
                <label>Sede</label>
                <select className="filter-select">
                  <option value="">Tutte le sedi</option>
                  {Object.keys(corsiPerSede).map((sede) => (
                    <option key={sede} value={sede}>{sede}</option>
                  ))}
                </select>
              </div>
              <div className="filter-group">
                <label>Tipologia</label>
                <select className="filter-select">
                  <option value="">Tutte le tipologie</option>
                  <option value="sicurezza">Sicurezza sul lavoro</option>
                  <option value="iniziale">Formazione iniziale</option>
                  <option value="continua">Formazione continua</option>
                  <option value="specialistica">Formazione specialistica</option>
                </select>
              </div>
              <div className="filter-group">
                <label>Destinatari</label>
                <select className="filter-select">
                  <option value="">Tutti i destinatari</option>
                  <option value="lavoratori">Lavoratori</option>
                  <option value="imprese">Imprese</option>
                  <option value="giovani">Giovani</option>
                  <option value="disoccupati">Disoccupati</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Corsi in programma */}
        <section className="content-section">
          <h2>Corsi in Programma</h2>
          {corsiFuturi.length > 0 ? (
            <>
              {Object.entries(corsiPerSede).map(([sede, corsi]) => (
                <div key={sede} className="sede-section">
                  <h3 className="sede-title">
                    <span className="sede-icon">📍</span>
                    {sede}
                  </h3>
                  <div className="corsi-grid">
                    {corsi.map((corso) => (
                      <AgendaCard key={corso.id} corso={corso} />
                    ))}
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="card" style={{ textAlign: 'center', padding: '60px 40px' }}>
              <h3>Nessun corso in programma</h3>
              <p>Al momento non ci sono corsi programmati. Torna presto per aggiornamenti!</p>
            </div>
          )}
        </section>

        {/* Corsi conclusi */}
        {corsiPassati.length > 0 && (
          <section className="content-section">
            <h2>Corsi Conclusi</h2>
            <div className="corsi-grid">
              {corsiPassati.slice(0, 4).map((corso) => (
                <div key={corso.id} className="corso-passato">
                  <AgendaCard corso={corso} />
                  <div className="corso-overlay">
                    <span>Concluso</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="content-section">
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%)',
            color: 'var(--white)',
            padding: '40px',
            textAlign: 'center'
          }}>
            <h3 style={{ color: 'var(--white)', marginBottom: '15px' }}>
              Non hai trovato il corso che cercavi?
            </h3>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.9)', 
              marginBottom: '25px',
              fontSize: '1.1rem'
            }}>
              Contattaci per ricevere informazioni su corsi personalizzati o per 
              essere avvisato quando sarà programmato un corso di tuo interesse.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contatti" className="btn btn-primary" style={{ backgroundColor: 'var(--accent-orange)' }}>
                Contattaci
              </Link>
              <Link href="/scuole-edili" className="btn btn-outline-white">
                Trova la sede più vicina
              </Link>
            </div>
          </div>
        </section>

        {/* Info iscrizioni */}
        <section className="content-section">
          <h2>Come iscriversi</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>📞 Contatta la sede</h3>
              <p>
                Per iscriverti a un corso, contatta direttamente la Scuola Edile 
                che lo organizza utilizzando i recapiti disponibili nella sezione 
                Scuole Edili.
              </p>
            </div>
            <div className="card">
              <h3>📋 Documenti necessari</h3>
              <p>
                Per l'iscrizione potrebbero essere richiesti: documento d'identità, 
                codice fiscale, eventuale attestazione di precedenti corsi o 
                qualifiche professionali.
              </p>
            </div>
            <div className="card">
              <h3>💶 Costi e agevolazioni</h3>
              <p>
                I costi variano in base alla tipologia di corso. Sono previste 
                agevolazioni per imprese associate al sistema bilaterale.
              </p>
            </div>
            <div className="card">
              <h3>✓ Attestati</h3>
              <p>
                Al termine del corso, previa frequenza minima obbligatoria e 
                superamento delle verifiche, viene rilasciato l'attestato valido 
                su tutto il territorio nazionale.
              </p>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .content-section {
          margin-bottom: 50px;
        }
        .intro-text {
          font-size: 1.15rem;
          color: var(--text-gray);
          line-height: 1.8;
          margin-bottom: 40px;
        }
        .content-section h2 {
          color: var(--primary-blue);
          margin-bottom: 30px;
          font-size: 2rem;
        }
        .content-section h3 {
          color: var(--primary-blue);
          margin-bottom: 10px;
          font-size: 1.1rem;
        }
        
        .filters-card {
          background: var(--white);
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
        }
        
        .filters-card h3 {
          margin-bottom: 20px;
        }
        
        .filters-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
        }
        
        .filter-group {
          display: flex;
          flex-direction: column;
        }
        
        .filter-group label {
          font-weight: 600;
          color: var(--primary-blue);
          margin-bottom: 8px;
          font-size: 0.95rem;
        }
        
        .filter-select {
          padding: 10px 15px;
          border: 2px solid var(--medium-gray);
          border-radius: 6px;
          font-size: 1rem;
          font-family: inherit;
          background-color: var(--white);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .filter-select:focus {
          outline: none;
          border-color: var(--accent-orange);
          box-shadow: 0 0 0 3px rgba(230, 126, 34, 0.1);
        }
        
        .sede-section {
          margin-bottom: 50px;
        }
        
        .sede-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.5rem;
          color: var(--primary-blue);
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 3px solid var(--accent-orange);
        }
        
        .sede-icon {
          font-size: 1.8rem;
        }
        
        .corsi-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 25px;
        }
        
        .corso-passato {
          position: relative;
          opacity: 0.6;
        }
        
        .corso-overlay {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: rgba(0, 0, 0, 0.7);
          color: var(--white);
          padding: 10px 25px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 1.1rem;
        }
        
        @media (max-width: 768px) {
          .filters-grid {
            grid-template-columns: 1fr;
          }
          
          .corsi-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
