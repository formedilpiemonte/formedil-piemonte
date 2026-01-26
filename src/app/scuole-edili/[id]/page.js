// src/app/scuole-edili/[id]/page.js
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Importa i dati
import scuoleData from '../../../../public/data/scuole.json'
import corsiData from '../../../../public/data/corsi.json'

export async function generateStaticParams() {
  return scuoleData.map((scuola) => ({
    id: scuola.id.toString(),
  }))
}

export default function ScuolaDetail({ params }) {
  const scuola = scuoleData.find((s) => s.id.toString() === params.id)

  if (!scuola) {
    notFound()
  }

  // Filtra i corsi per questa sede
  const corsiScuola = corsiData.filter((corso) => corso.sede === scuola.citta)

  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/scuole-edili">Scuole Edili</Link></li>
            <li>{scuola.nome}</li>
          </ul>
        </div>
      </div>

      <div className="container" style={{ marginTop: '40px', marginBottom: '80px' }}>
        {/* Header Scuola */}
        <div className="scuola-header">
          <div className="header-content">
            <div className="header-badge">{scuola.provincia}</div>
            <h1>{scuola.nome}</h1>
            <p className="scuola-description">{scuola.descrizione}</p>
          </div>
        </div>

        <div className="scuola-layout">
          {/* Sidebar Contatti */}
          <aside className="scuola-sidebar">
            <div className="card">
              <h3>Contatti</h3>
              <div className="contact-list">
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <strong>Indirizzo</strong>
                    <p>{scuola.indirizzo}</p>
                    <p>{scuola.cap} {scuola.citta} ({scuola.provincia})</p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <strong>Telefono</strong>
                    <p><a href={`tel:${scuola.telefono}`}>{scuola.telefono}</a></p>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <div>
                    <strong>Email</strong>
                    <p><a href={`mailto:${scuola.email}`}>{scuola.email}</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{ marginTop: '20px' }}>
              <h3>Dove siamo</h3>
              <div className="map-preview">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${scuola.coordinate[0]},${scuola.coordinate[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%' }}
                >
                  Apri in Google Maps
                </a>
              </div>
            </div>
          </aside>

          {/* Contenuto Principale */}
          <main className="scuola-main">
            <section className="content-section">
              <h2>Servizi Offerti</h2>
              <div className="services-grid">
                <div className="service-item">
                  <span className="service-icon">📚</span>
                  <h4>Formazione Professionale</h4>
                  <p>Corsi di qualifica e specializzazione per tutte le figure del settore edile.</p>
                </div>
                <div className="service-item">
                  <span className="service-icon">🛡️</span>
                  <h4>Sicurezza sul Lavoro</h4>
                  <p>Formazione obbligatoria e abilitazioni per la sicurezza nei cantieri.</p>
                </div>
                <div className="service-item">
                  <span className="service-icon">🎓</span>
                  <h4>Orientamento</h4>
                  <p>Attività per avvicinare i giovani alle professioni dell'edilizia.</p>
                </div>
                <div className="service-item">
                  <span className="service-icon">🏢</span>
                  <h4>Supporto Imprese</h4>
                  <p>Consulenza e percorsi formativi personalizzati per le aziende.</p>
                </div>
              </div>
            </section>

            {/* Corsi disponibili */}
            {corsiScuola.length > 0 && (
              <section className="content-section">
                <h2>Prossimi Corsi</h2>
                <p style={{ marginBottom: '25px', color: 'var(--text-gray)' }}>
                  Ecco alcuni dei corsi in programma presso questa sede:
                </p>
                <div className="corsi-preview">
                  {corsiScuola.slice(0, 3).map((corso) => (
                    <div key={corso.id} className="corso-preview-card">
                      <span className="corso-tipo">{corso.tipologia}</span>
                      <h4>{corso.titolo}</h4>
                      <div className="corso-info-mini">
                        <span>📅 {new Date(corso.dataInizio).toLocaleDateString('it-IT')}</span>
                        <span>⏰ {corso.ore} ore</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                  <Link href="/agenda" className="btn btn-primary">
                    Vedi tutti i corsi
                  </Link>
                </div>
              </section>
            )}

            <section className="content-section">
              <h2>Strutture e Attrezzature</h2>
              <div className="card">
                <p>
                  La Scuola Edile dispone di moderne strutture per la formazione 
                  teorica e pratica:
                </p>
                <ul style={{ 
                  paddingLeft: '25px', 
                  lineHeight: '1.8',
                  color: 'var(--text-gray)',
                  marginTop: '15px'
                }}>
                  <li>Aule didattiche multimediali</li>
                  <li>Cantieri didattici per esercitazioni pratiche</li>
                  <li>Laboratori tecnici specializzati</li>
                  <li>Attrezzature professionali per la formazione</li>
                  <li>Spazi per incontri e orientamento</li>
                </ul>
              </div>
            </section>

            <section className="content-section">
              <div className="card" style={{ 
                background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%)',
                color: 'var(--white)',
                padding: '40px',
                textAlign: 'center'
              }}>
                <h3 style={{ color: 'var(--white)', marginBottom: '15px' }}>
                  Hai bisogno di maggiori informazioni?
                </h3>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  marginBottom: '25px',
                  fontSize: '1.1rem'
                }}>
                  Contattaci per ricevere informazioni dettagliate sui corsi, 
                  le modalità di iscrizione e i servizi disponibili.
                </p>
                <Link 
                  href="/contatti" 
                  className="btn btn-primary" 
                  style={{ backgroundColor: 'var(--accent-orange)' }}
                >
                  Contattaci
                </Link>
              </div>
            </section>
          </main>
        </div>
      </div>

      <style jsx>{`
        .scuola-header {
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%);
          color: var(--white);
          padding: 60px 40px;
          border-radius: 12px;
          margin-bottom: 40px;
        }
        
        .header-content {
          max-width: 800px;
        }
        
        .header-badge {
          display: inline-block;
          background-color: var(--accent-orange);
          color: var(--white);
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 20px;
        }
        
        .scuola-header h1 {
          color: var(--white);
          font-size: 2.5rem;
          margin-bottom: 15px;
        }
        
        .scuola-description {
          color: rgba(255, 255, 255, 0.95);
          font-size: 1.2rem;
          line-height: 1.7;
        }
        
        .scuola-layout {
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 40px;
        }
        
        .scuola-sidebar .card {
          position: sticky;
          top: 100px;
        }
        
        .scuola-sidebar h3 {
          color: var(--primary-blue);
          margin-bottom: 20px;
          font-size: 1.3rem;
        }
        
        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .contact-item {
          display: flex;
          gap: 15px;
        }
        
        .contact-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }
        
        .contact-item strong {
          display: block;
          color: var(--primary-blue);
          margin-bottom: 5px;
          font-size: 0.95rem;
        }
        
        .contact-item p {
          margin: 0;
          color: var(--text-gray);
          line-height: 1.6;
        }
        
        .contact-item a {
          color: var(--accent-orange);
          transition: color 0.3s ease;
        }
        
        .contact-item a:hover {
          color: var(--primary-blue);
        }
        
        .map-preview {
          margin-top: 15px;
        }
        
        .content-section {
          margin-bottom: 40px;
        }
        
        .content-section h2 {
          col
