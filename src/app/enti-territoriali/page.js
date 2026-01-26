// src/app/enti-territoriali/page.js
export default function EntiTerritoriali() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Enti Territoriali</h1>
          <p>La rete di formazione edile sul territorio piemontese e valdostano</p>
        </div>
      </div>

      <div className="container">
        <section className="content-section">
          <p className="intro-text">
            FORMEDIL Piemonte coordina e supporta una rete di enti territoriali 
            e Scuole Edili distribuite nelle province piemontesi, garantendo capillarità 
            dell'offerta formativa e vicinanza alle esigenze locali di imprese e lavoratori.
          </p>
        </section>

        <section className="content-section">
          <h2>Il sistema territoriale</h2>
          <div className="card">
            <p>
              Il sistema di formazione edile in Piemonte si articola attraverso 
              enti territoriali che operano a livello provinciale, assicurando:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '15px'
            }}>
              <li>Presenza capillare sul territorio regionale</li>
              <li>Adattamento dell'offerta formativa alle specificità locali</li>
              <li>Collaborazione con imprese e parti sociali del territorio</li>
              <li>Coordinamento con istituzioni scolastiche e enti locali</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Scuole Edili Provinciali</h2>
          <p>
            Le Scuole Edili costituiscono i principali presidi formativi del sistema 
            bilaterale nel territorio piemontese.
          </p>
          
          <div className="schools-list" style={{ marginTop: '30px' }}>
            <div className="card mb-20">
              <h3>Provincia di Torino</h3>
              <p>
                La Scuola Edile di Torino serve l'area metropolitana torinese, 
                offrendo formazione iniziale, continua e specialistica per il 
                settore delle costruzioni.
              </p>
            </div>

            <div className="card mb-20">
              <h3>Provincia di Cuneo</h3>
              <p>
                La Scuola Edile di Cuneo opera nel cuneese promuovendo la 
                qualificazione professionale e la sicurezza nei cantieri della 
                zona sud-occidentale del Piemonte.
              </p>
            </div>

            <div className="card mb-20">
              <h3>Provincia di Alessandria</h3>
              <p>
                La Scuola Edile di Alessandria fornisce servizi formativi alle 
                imprese e ai lavoratori dell'alessandrino e delle aree limitrofe.
              </p>
            </div>

            <div className="card mb-20">
              <h3>Provincia di Novara</h3>
              <p>
                La Scuola Edile di Novara coordina le attività formative nel 
                novarese e nelle zone del Verbano-Cusio-Ossola.
              </p>
            </div>

            <div className="card mb-20">
              <h3>Provincia di Asti</h3>
              <p>
                La Scuola Edile di Asti si occupa della formazione per il settore 
                edile nell'astigiano, in collaborazione con il sistema bilaterale locale.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Coordinamento regionale</h2>
          <div className="card">
            <p>
              FORMEDIL Piemonte assicura il coordinamento strategico e operativo 
              degli enti territoriali attraverso:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '15px'
            }}>
              <li>Definizione di linee guida formative comuni</li>
              <li>Supporto tecnico e metodologico</li>
              <li>Condivisione di buone pratiche</li>
              <li>Monitoraggio della qualità delle attività</li>
              <li>Rappresentanza istituzionale a livello regionale</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Collaborazione con il territorio</h2>
          <p>
            Gli enti territoriali collaborano attivamente con:
          </p>
          <div className="grid grid-2" style={{ marginTop: '20px' }}>
            <div className="card">
              <h3>Imprese edili</h3>
              <p>
                Raccolta delle esigenze formative e costruzione di percorsi 
                personalizzati per la qualificazione dei lavoratori.
              </p>
            </div>
            <div className="card">
              <h3>Parti sociali</h3>
              <p>
                Concertazione delle politiche formative nell'ambito del sistema 
                bilaterale territoriale.
              </p>
            </div>
            <div className="card">
              <h3>Istituti scolastici</h3>
              <p>
                Orientamento al lavoro e collaborazione per percorsi di alternanza 
                scuola-lavoro.
              </p>
            </div>
            <div className="card">
              <h3>Enti locali</h3>
              <p>
                Coordinamento con province e comuni per iniziative di promozione 
                delle professioni edili.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="card" style={{ 
            background: 'var(--light-gray)',
            textAlign: 'center',
            padding: '40px'
          }}>
            <h3>Trova la Scuola Edile più vicina</h3>
            <p>
              Consulta la mappa per individuare la Scuola Edile della tua provincia 
              e scoprire i servizi formativi disponibili.
            </p>
            <Link href="/scuole-edili" className="btn btn-primary" style={{ marginTop: '20px' }}>
              Vedi tutte le sedi
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
