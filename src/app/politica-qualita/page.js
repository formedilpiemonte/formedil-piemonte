// src/app/politica-qualita/page.js
export default function PoliticaQualita() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Politica Qualità</h1>
          <p>Impegno per l'eccellenza formativa e il miglioramento continuo</p>
        </div>
      </div>

      <div className="container">
        <section className="content-section">
          <div className="card">
            <h2>La nostra Politica per la Qualità</h2>
            <p>
              FORMEDIL Piemonte adotta una Politica per la Qualità orientata 
              all'eccellenza dei servizi formativi, alla soddisfazione degli utenti 
              e al miglioramento continuo dei processi organizzativi.
            </p>
            <p>
              L'ente si impegna a garantire standard elevati nella progettazione, 
              erogazione e valutazione delle attività formative destinate al settore 
              delle costruzioni in Piemonte.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Principi guida</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>Orientamento all'utente</h3>
              <p>
                Ascolto delle esigenze di imprese, lavoratori e giovani per 
                progettare percorsi formativi efficaci e rispondenti alle necessità 
                del mercato del lavoro.
              </p>
            </div>
            <div className="card">
              <h3>Competenza e professionalità</h3>
              <p>
                Selezione di docenti qualificati, aggiornamento continuo dei 
                contenuti didattici e utilizzo di metodologie formative innovative.
              </p>
            </div>
            <div className="card">
              <h3>Conformità normativa</h3>
              <p>
                Rispetto delle disposizioni nazionali e regionali in materia di 
                formazione professionale e sicurezza sul lavoro.
              </p>
            </div>
            <div className="card">
              <h3>Miglioramento continuo</h3>
              <p>
                Monitoraggio sistematico delle attività, valutazione dei risultati 
                e implementazione di azioni correttive e preventive.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Obiettivi strategici</h2>
          <p>
            FORMEDIL Piemonte persegue i seguenti obiettivi di qualità:
          </p>
          <ul style={{ 
            paddingLeft: '25px', 
            lineHeight: '1.8',
            color: 'var(--text-gray)',
            marginTop: '20px'
          }}>
            <li>Garantire elevati livelli di soddisfazione degli utenti</li>
            <li>Assicurare la qualificazione e l'aggiornamento dei formatori</li>
            <li>Mantenere la conformità agli standard di accreditamento regionale</li>
            <li>Promuovere l'innovazione didattica e tecnologica</li>
            <li>Rafforzare il coordinamento con le Scuole Edili territoriali</li>
            <li>Favorire l'inserimento lavorativo dei partecipanti ai corsi</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Sistema di gestione per la qualità</h2>
          <div className="card">
            <p>
              L'ente implementa un sistema di gestione per la qualità basato su:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '15px'
            }}>
              <li>Definizione di procedure operative standardizzate</li>
              <li>Monitoraggio degli indicatori di performance</li>
              <li>Audit interni ed esterni</li>
              <li>Raccolta sistematica di feedback dagli utenti</li>
              <li>Riesame periodico della direzione</li>
              <li>Formazione continua del personale</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Valutazione e monitoraggio</h2>
          <p>
            Le attività formative sono sottoposte a valutazione continua attraverso:
          </p>
          <div className="grid grid-3" style={{ marginTop: '20px' }}>
            <div className="card">
              <h3>Valutazione in ingresso</h3>
              <p>
                Analisi delle competenze iniziali e delle aspettative dei partecipanti.
              </p>
            </div>
            <div className="card">
              <h3>Valutazione in itinere</h3>
              <p>
                Monitoraggio dell'apprendimento durante lo svolgimento dei corsi.
              </p>
            </div>
            <div className="card">
              <h3>Valutazione finale</h3>
              <p>
                Verifica del raggiungimento degli obiettivi formativi e della 
                soddisfazione degli utenti.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Accreditamento e certificazioni</h2>
          <div className="card">
            <p>
              FORMEDIL Piemonte opera in conformità ai requisiti di accreditamento 
              previsti dalla Regione Piemonte per gli organismi formativi.
            </p>
            <p>
              L'ente mantiene aggiornate le certificazioni necessarie per 
              l'erogazione di formazione professionale e formazione obbligatoria 
              in materia di sicurezza sul lavoro.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Impegno della direzione</h2>
          <p>
            La direzione di FORMEDIL Piemonte si impegna a:
          </p>
          <ul style={{ 
            paddingLeft: '25px', 
            lineHeight: '1.8',
            color: 'var(--text-gray)',
            marginTop: '15px'
          }}>
            <li>Promuovere la cultura della qualità a tutti i livelli organizzativi</li>
            <li>Garantire le risorse necessarie al mantenimento e miglioramento del sistema qualità</li>
            <li>Assicurare il coinvolgimento del personale nel perseguimento degli obiettivi</li>
            <li>Favorire la comunicazione interna ed esterna</li>
            <li>Riesaminare periodicamente l'efficacia del sistema di gestione</li>
          </ul>
        </section>

        <section className="content-section">
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%)',
            color: 'var(--white)',
            padding: '40px',
            textAlign: 'center'
          }}>
            <h3 style={{ color: 'var(--white)' }}>La qualità come valore</h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              L'impegno per la qualità è parte integrante della missione di 
              FORMEDIL Piemonte e rappresenta un valore condiviso da tutti 
              coloro che operano nell'ente e nelle strutture territoriali.
            </p>
          </div>
        </section>
      </div>

      <style jsx>{`
        .content-section {
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
