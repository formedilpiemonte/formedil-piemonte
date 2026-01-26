// src/app/formedil-regionali/page.js
import Link from 'next/link'

export default function FormedilRegionali() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Formedil Regionali</h1>
          <p>La rete nazionale della formazione edile</p>
        </div>
      </div>

      <div className="container">
        <section className="content-section">
          <p className="intro-text">
            FORMEDIL Piemonte fa parte del sistema nazionale FORMEDIL, una rete 
            di enti regionali dedicati alla formazione professionale nel settore 
            delle costruzioni, coordinati a livello nazionale per garantire standard 
            qualitativi uniformi e condivisione di buone pratiche.
          </p>
        </section>

        <section className="content-section">
          <h2>Il sistema FORMEDIL nazionale</h2>
          <div className="card">
            <p>
              FORMEDIL - Ente Nazionale per la Formazione e l'Addestramento 
              Professionale nell'Edilizia - coordina gli enti bilaterali regionali 
              per la formazione nel settore delle costruzioni in tutta Italia.
            </p>
            <p>
              Il sistema opera attraverso una rete capillare di scuole edili 
              presenti in tutte le regioni italiane, garantendo omogeneità di 
              standard formativi e certificazioni riconosciute a livello nazionale.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Ruolo degli enti regionali</h2>
          <p>
            Ogni FORMEDIL regionale opera con autonomia organizzativa nel proprio 
            territorio, assicurando:
          </p>
          <div className="grid grid-2" style={{ marginTop: '20px' }}>
            <div className="card">
              <h3>Coordinamento territoriale</h3>
              <p>
                Gestione delle Scuole Edili regionali e raccordo con le parti 
                sociali locali.
              </p>
            </div>
            <div className="card">
              <h3>Adattamento dell'offerta</h3>
              <p>
                Definizione di percorsi formativi rispondenti alle specificità 
                del mercato del lavoro regionale.
              </p>
            </div>
            <div className="card">
              <h3>Rapporti istituzionali</h3>
              <p>
                Collaborazione con Regioni, enti locali e istituzioni per la 
                promozione della formazione edile.
              </p>
            </div>
            <div className="card">
              <h3>Implementazione standard</h3>
              <p>
                Applicazione delle linee guida nazionali mantenendo elevati 
                livelli di qualità.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Coordinamento nazionale</h2>
          <div className="card">
            <p>
              Il coordinamento tra i FORMEDIL regionali avviene attraverso:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '15px'
            }}>
              <li>Conferenze nazionali periodiche</li>
              <li>Gruppi di lavoro tematici</li>
              <li>Condivisione di progetti formativi innovativi</li>
              <li>Elaborazione di standard e procedure comuni</li>
              <li>Rappresentanza unitaria presso le istituzioni</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Certificazioni e riconoscimenti</h2>
          <p>
            Gli attestati rilasciati dai FORMEDIL regionali hanno validità su 
            tutto il territorio nazionale e sono riconosciuti dal sistema bilaterale 
            dell'edilizia.
          </p>
          <p>
            La formazione obbligatoria in materia di sicurezza sul lavoro, erogata 
            attraverso la rete FORMEDIL, è conforme al D.Lgs. 81/2008 e agli 
            Accordi Stato-Regioni.
          </p>
        </section>

        <section className="content-section">
          <h2>Progetti europei e internazionali</h2>
          <div className="card">
            <p>
              Il sistema FORMEDIL partecipa a progetti di cooperazione europea 
              per lo sviluppo di competenze, l'innovazione didattica e il 
              riconoscimento transnazionale delle qualifiche professionali.
            </p>
            <p>
              Questa dimensione internazionale arricchisce l'offerta formativa 
              e favorisce la mobilità dei lavoratori del settore.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>La rete delle Scuole Edili</h2>
          <p>
            In Italia operano oltre 100 Scuole Edili, distribuite in tutte le 
            regioni e coordinate dai rispettivi FORMEDIL regionali.
          </p>
          <p>
            Questa capillarità garantisce accessibilità ai servizi formativi e 
            vicinanza alle esigenze delle imprese e dei lavoratori su tutto il 
            territorio nazionale.
          </p>
        </section>

        <section className="content-section">
          <div className="card" style={{ 
            background: 'var(--light-gray)',
            textAlign: 'center',
            padding: '40px'
          }}>
            <h3>Maggiori informazioni sul sistema nazionale</h3>
            <p>
              Per approfondire l'organizzazione e le attività del sistema FORMEDIL 
              nazionale, è possibile visitare il sito istituzionale.
            </p>
            <a 
              href="https://www.formedil.it" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary" 
              style={{ marginTop: '20px' }}
            >
              Visita FORMEDIL Nazionale
            </a>
          </div>
        </section>
      </div>

      <style jsx>{`
        .content-section {
          margin-bottom: 40px;
        }
        .intro-text {
          font-size: 1.15rem;
          color: var(--text-gray);
          line-height: 1.8;
          margin-bottom: 40px;
        }
        .content-section h2 {
          color: var(--primary-blue);
          margin-bottom: 20px;
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
