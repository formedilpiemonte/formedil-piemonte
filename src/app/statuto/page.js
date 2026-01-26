// src/app/statuto/page.js
export default function Statuto() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Statuto</h1>
          <p>Regolamento e principi costitutivi di FORMEDIL Piemonte</p>
        </div>
      </div>

      <div className="container">
        <section className="content-section">
          <div className="card">
            <h2>Statuto dell'Ente</h2>
            <p>
              Lo Statuto di FORMEDIL Piemonte definisce la natura giuridica dell'ente, 
              gli scopi istituzionali, la struttura organizzativa e le modalità di 
              governance paritética tra le parti sociali.
            </p>
            <p>
              Il documento disciplina i rapporti tra gli organismi dirigenti, le modalità 
              di adesione, le competenze degli organi e i principi di funzionamento 
              dell'ente regionale.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Principi fondamentali</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>Bilateralità</h3>
              <p>
                Rappresentanza paritetica di organizzazioni datoriali e sindacali 
                in tutti gli organi decisionali.
              </p>
            </div>
            <div className="card">
              <h3>Autonomia</h3>
              <p>
                Indipendenza gestionale e organizzativa nel rispetto delle normative 
                vigenti e degli accordi collettivi.
              </p>
            </div>
            <div className="card">
              <h3>Trasparenza</h3>
              <p>
                Rendicontazione chiara delle attività svolte e delle risorse impiegate 
                per il perseguimento delle finalità istituzionali.
              </p>
            </div>
            <div className="card">
              <h3>Territorialità</h3>
              <p>
                Radicamento nel contesto piemontese attraverso il coordinamento con 
                gli enti territoriali e le scuole edili provinciali.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Finalità istituzionali</h2>
          <p>
            L'ente persegue finalità di interesse collettivo attraverso la promozione, 
            il coordinamento e la realizzazione di attività formative rivolte a imprese 
            e lavoratori del settore delle costruzioni in Piemonte.
          </p>
          <ul style={{ 
            paddingLeft: '25px', 
            lineHeight: '1.8',
            color: 'var(--text-gray)'
          }}>
            <li>Formazione professionale iniziale, continua e specialistica</li>
            <li>Promozione della sicurezza sul lavoro e della prevenzione</li>
            <li>Orientamento professionale e avvicinamento dei giovani al settore</li>
            <li>Supporto alle imprese nella qualificazione delle competenze</li>
            <li>Aggiornamento dei contenuti formativi e innovazione didattica</li>
            <li>Collaborazione con istituzioni pubbliche e private</li>
          </ul>
        </section>

        <section className="content-section">
          <div className="card" style={{ 
            background: 'var(--light-gray)',
            textAlign: 'center',
            padding: '40px'
          }}>
            <h3>Documento Statutario</h3>
            <p>
              Per consultare il testo completo dello Statuto, è possibile rivolgersi 
              alla segreteria di FORMEDIL Piemonte.
            </p>
            <Link href="/contatti" className="btn btn-primary" style={{ marginTop: '20px' }}>
              Richiedi informazioni
            </Link>
          </div>
        </section>
      </div>

      <style jsx>{`
        .content-section {
          margin-bottom: 50px;
        }
        .content-section h2 {
          color: var(--primary-blue);
          margin-bottom: 25px;
        }
        .content-section p {
          margin-bottom: 20px;
          line-height: 1.8;
        }
      `}</style>
    </>
  )
}
