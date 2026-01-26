// src/app/scuole-edili/page.js
import Link from 'next/link'
import MapSection from '@/components/MapSection'

// Importa i dati delle scuole
import newsData from '@/data/scuole.json'

export default function ScuoleEdili() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Scuole Edili</h1>
          <p>La rete di formazione professionale sul territorio piemontese</p>
        </div>
      </div>

      <div className="container">
        <section className="content-section">
          <p className="intro-text">
            Le Scuole Edili rappresentano i presidi formativi del sistema 
            bilaterale sul territorio piemontese. Presenti nelle principali 
            province, offrono servizi di formazione, aggiornamento e orientamento 
            per lavoratori, imprese e giovani del settore delle costruzioni.
          </p>
        </section>

        <section className="content-section">
          <h2>Servizi delle Scuole Edili</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>Formazione professionale</h3>
              <p>
                Corsi di qualifica iniziale, aggiornamento continuo e 
                specializzazione tecnica per tutte le figure professionali 
                del settore edile.
              </p>
            </div>
            <div className="card">
              <h3>Sicurezza sul lavoro</h3>
              <p>
                Formazione obbligatoria ai sensi del D.Lgs. 81/2008, corsi 
                abilitanti e aggiornamenti periodici per la sicurezza nei cantieri.
              </p>
            </div>
            <div className="card">
              <h3>Orientamento giovani</h3>
              <p>
                Attività di orientamento scolastico e professionale per avvicinare 
                le nuove generazioni alle professioni dell'edilizia.
              </p>
            </div>
            <div className="card">
              <h3>Supporto alle imprese</h3>
              <p>
                Consulenza per la gestione degli adempimenti formativi e 
                progettazione di percorsi personalizzati per le aziende.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Mappa e Scuole */}
      <MapSection scuole={scuoleData} />

      <div className="container">
        <section className="content-section">
          <h2>Come raggiungere le sedi</h2>
          <div className="card">
            <p>
              Tutte le Scuole Edili sono facilmente raggiungibili con mezzi 
              pubblici e dispongono di parcheggi nelle vicinanze. Per informazioni 
              dettagliate su orari, disponibilità e modalità di iscrizione ai corsi, 
              contatta direttamente la sede di tuo interesse.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Attrezzature e strutture</h2>
          <div className="card">
            <p>
              Le Scuole Edili dispongono di:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '15px'
            }}>
              <li>Aule didattiche attrezzate per lezioni teoriche</li>
              <li>Cantieri didattici per esercitazioni pratiche</li>
              <li>Attrezzature e macchinari per la formazione specialistica</li>
              <li>Piattaforme e-learning per formazione a distanza</li>
              <li>Spazi dedicati a incontri e orientamento</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <div className="card" style={{ 
            background: 'var(--light-gray)',
            padding: '40px',
            textAlign: 'center'
          }}>
            <h3>Hai bisogno di informazioni?</h3>
            <p style={{ marginBottom: '25px' }}>
              Contatta la Scuola Edile più vicina a te o compila il modulo 
              per ricevere informazioni dettagliate sui corsi e sui servizi disponibili.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contatti" className="btn btn-primary">
                Contattaci
              </Link>
              <Link href="/agenda" className="btn btn-secondary">
                Vedi calendario corsi
              </Link>
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
          margin-bottom: 25px;
        }
        .content-section h3 {
          color: var(--primary-blue);
          margin-bottom: 10px;
          font-size: 1.1rem;
        }
        .content-section p {
          margin-bottom: 15px;
          line-height: 1.8;
        }
      `}</style>
    </>
  )
}
