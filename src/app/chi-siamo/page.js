// src/app/chi-siamo/page.js
export default function ChiSiamo() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Chi Siamo</h1>
          <p>FORMEDIL Piemonte: l'ente di formazione del sistema bilaterale dell'edilizia</p>
        </div>
      </div>

      <div className="container">
        <section className="content-section">
          <h2>Cos'è FORMEDIL Piemonte</h2>
          <p>
            FORMEDIL Piemonte è l'ente di formazione del sistema bilaterale delle costruzioni, 
            costituito dalle parti sociali per promuovere la qualificazione professionale, 
            la sicurezza e l'innovazione nel settore edile della Regione Piemonte.
          </p>
          <p>
            L'ente opera in stretta collaborazione con le organizzazioni datoriali e sindacali, 
            le Scuole Edili territoriali e gli organismi istituzionali regionali, garantendo 
            un'offerta formativa rispondente alle esigenze del mercato del lavoro e del territorio.
          </p>
        </section>

        <section className="content-section">
          <h2>La nostra missione</h2>
          <p>
            FORMEDIL Piemonte persegue l'obiettivo di sviluppare competenze professionali 
            qualificate attraverso percorsi formativi certificati, contribuendo alla crescita 
            del settore delle costruzioni e alla sicurezza nei cantieri.
          </p>
          <div className="mission-grid" style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '25px',
            marginTop: '30px'
          }}>
            <div className="card">
              <h3>Formazione</h3>
              <p>
                Percorsi formativi iniziali, continui e specialistici per lavoratori, 
                imprese e giovani.
              </p>
            </div>
            <div className="card">
              <h3>Sicurezza</h3>
              <p>
                Promozione della cultura della prevenzione attraverso formazione 
                obbligatoria e aggiornamenti.
              </p>
            </div>
            <div className="card">
              <h3>Innovazione</h3>
              <p>
                Aggiornamento continuo dei contenuti formativi in linea con l'evoluzione 
                tecnologica del settore.
              </p>
            </div>
            <div className="card">
              <h3>Territorio</h3>
              <p>
                Presenza capillare in Piemonte attraverso le Scuole Edili provinciali 
                e gli enti territoriali.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Il sistema bilaterale</h2>
          <p>
            FORMEDIL Piemonte opera all'interno del sistema bilaterale delle costruzioni, 
            un modello di relazioni industriali che coinvolge imprese e lavoratori nella 
            gestione di servizi comuni per lo sviluppo del settore.
          </p>
          <p>
            Questo approccio garantisce equità, rappresentatività e rispondenza delle 
            attività formative alle effettive necessità del comparto edile piemontese.
          </p>
        </section>

        <section className="content-section">
          <h2>Ambito territoriale</h2>
          <p>
            FORMEDIL Piemonte opera esclusivamente nella Regione Piemonte, collaborando 
            con le Scuole Edili presenti nelle province di Torino, Cuneo, Alessandria, 
            Novara, Asti, Biella, Vercelli e Verbano-Cusio-Ossola.
          </p>
        </section>

        <section className="content-section">
          <h2>Governance</h2>
          <p>
            L'ente è governato da organismi paritetici che garantiscono la rappresentanza 
            equilibrata di imprese e lavoratori nelle decisioni strategiche e operative.
          </p>
          <p>
            La struttura organizzativa è articolata in modo da assicurare trasparenza, 
            efficienza e rispondenza agli obiettivi statutari e alle esigenze formative 
            del territorio.
          </p>
        </section>

        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Link href="/statuto" className="btn btn-secondary">
            Consulta lo Statuto
          </Link>
        </div>
      </div>

      <style jsx>{`
        .content-section {
          margin-bottom: 50px;
        }
        .content-section h2 {
          color: var(--primary-blue);
          margin-bottom: 20px;
        }
        .content-section p {
          margin-bottom: 20px;
          line-height: 1.8;
        }
      `}</style>
    </>
  )
}
