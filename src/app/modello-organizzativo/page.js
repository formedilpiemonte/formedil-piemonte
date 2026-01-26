// src/app/modello-organizzativo/page.js
export default function ModelloOrganizzativo() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Modello Organizzativo</h1>
          <p>Struttura operativa e gestionale dell'ente</p>
        </div>
      </div>

      <div className="container">
        <section className="content-section">
          <p className="intro-text">
            Il Modello Organizzativo di FORMEDIL Piemonte definisce la struttura 
            operativa, i processi decisionali e le modalità di coordinamento tra 
            gli organi dell'ente e le strutture territoriali.
          </p>
        </section>

        <section className="content-section">
          <h2>Struttura organizzativa</h2>
          <div className="card">
            <p>
              L'ente si articola in una struttura regionale centrale e in un network 
              di Scuole Edili territoriali, garantendo coordinamento strategico e 
              operatività locale.
            </p>
            <p>
              La governance è affidata a organi paritetici che assicurano 
              la rappresentanza delle parti sociali e l'equilibrio decisionale.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Aree funzionali</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>Area Formazione</h3>
              <p>
                Progettazione, coordinamento e monitoraggio delle attività formative 
                in collaborazione con le Scuole Edili territoriali.
              </p>
            </div>
            <div className="card">
              <h3>Area Amministrativa</h3>
              <p>
                Gestione amministrativa, contabile e finanziaria dell'ente, 
                rendicontazione e controllo di gestione.
              </p>
            </div>
            <div className="card">
              <h3>Area Sicurezza</h3>
              <p>
                Coordinamento delle attività formative in materia di sicurezza 
                sul lavoro e aggiornamento normativo.
              </p>
            </div>
            <div className="card">
              <h3>Area Relazioni Istituzionali</h3>
              <p>
                Rapporti con istituzioni pubbliche, parti sociali e stakeholder 
                del settore delle costruzioni.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Processi decisionali</h2>
          <p>
            I processi decisionali rispettano il principio della bilateralità e 
            della trasparenza, assicurando il coinvolgimento delle parti sociali 
            nelle scelte strategiche e operative.
          </p>
          <div className="card" style={{ marginTop: '20px' }}>
            <h3>Iter decisionale</h3>
            <ul style={{ paddingLeft: '25px', lineHeight: '1.8', color: 'var(--text-gray)' }}>
              <li>Raccolta delle esigenze formative dal territorio</li>
              <li>Valutazione tecnica e normativa</li>
              <li>Condivisione con le parti sociali</li>
              <li>Deliberazione degli organi competenti</li>
              <li>Attuazione e monitoraggio</li>
              <li>Valutazione dei risultati</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Sistema qualità</h2>
          <p>
            FORMEDIL Piemonte adotta un sistema di gestione per la qualità finalizzato 
            al miglioramento continuo dei processi formativi e organizzativi.
          </p>
          <p>
            L'ente si conforma agli standard nazionali e regionali in materia di 
            formazione professionale, garantendo la qualità e l'efficacia delle 
            attività erogate.
          </p>
        </section>

        <section className="content-section">
          <h2>Coordinamento territoriale</h2>
          <div className="card">
            <p>
              Il coordinamento con le Scuole Edili territoriali avviene attraverso 
              incontri periodici, condivisione di linee guida operative e monitoraggio 
              congiunto delle attività formative.
            </p>
            <p>
              Questa modalità organizzativa assicura uniformità di standard qualitativi 
              e adattamento alle specificità locali.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Responsabilità e controlli</h2>
          <p>
            Il modello organizzativo prevede chiare attribuzioni di responsabilità, 
            meccanismi di controllo interno e procedure di rendicontazione verso 
            gli organi di governance e gli enti finanziatori.
          </p>
        </section>

        <section className="content-section">
          <div className="card" style={{ 
            background: 'var(--light-gray)',
            textAlign: 'center',
            padding: '40px'
          }}>
            <h3>Documenti organizzativi</h3>
            <p>
              Per informazioni di dettaglio sul Modello Organizzativo, è possibile 
              contattare la segreteria dell'ente.
            </p>
            <Link href="/contatti" className="btn btn-primary" style={{ marginTop: '20px' }}>
              Richiedi informazioni
            </Link>
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
