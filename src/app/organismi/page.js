// src/app/organismi/page.js
export default function Organismi() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Organismi</h1>
          <p>Struttura di governance e organi decisionali</p>
        </div>
      </div>

      <div className="container">
        <section className="content-section">
          <p className="intro-text">
            FORMEDIL Piemonte è governato da organismi paritetici che garantiscono 
            la rappresentanza equilibrata delle parti sociali e l'efficace perseguimento 
            delle finalità istituzionali.
          </p>
        </section>

        <section className="content-section">
          <div className="card">
            <h2>Assemblea</h2>
            <p>
              L'Assemblea è l'organo sovrano dell'ente, composto dai rappresentanti 
              delle organizzazioni datoriali e sindacali aderenti. Approva le linee 
              strategiche, il bilancio e le modifiche statutarie.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="card">
            <h2>Consiglio Direttivo</h2>
            <p>
              Il Consiglio Direttivo è l'organo esecutivo dell'ente, responsabile 
              dell'attuazione delle delibere assembleari e della gestione ordinaria 
              delle attività. È composto pariteticamente da rappresentanti delle 
              parti sociali.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="card">
            <h2>Presidenza</h2>
            <p>
              La Presidenza è affidata a un rappresentante designato dalle parti 
              sociali secondo criteri di rotazione o accordo paritario. Il Presidente 
              rappresenta legalmente l'ente e coordina i lavori degli organi direttivi.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="card">
            <h2>Collegio dei Revisori</h2>
            <p>
              Il Collegio dei Revisori vigila sulla regolarità amministrativa e 
              contabile dell'ente, garantendo la trasparenza nella gestione delle 
              risorse e il rispetto delle normative vigenti.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Coordinamento territoriale</h2>
          <p>
            FORMEDIL Piemonte coordina le attività delle Scuole Edili territoriali 
            presenti nelle province piemontesi, assicurando uniformità di indirizzo 
            formativo e condivisione di buone pratiche operative.
          </p>
          <p>
            La struttura organizzativa prevede modalità di raccordo periodico con 
            gli enti territoriali per garantire coerenza tra le politiche formative 
            regionali e le esigenze locali.
          </p>
        </section>

        <section className="content-section">
          <div className="card" style={{ 
            background: 'var(--light-gray)',
            textAlign: 'center',
            padding: '40px'
          }}>
            <h3>Composizione degli Organi</h3>
            <p>
              Per informazioni sulla composizione nominativa degli organismi di 
              governance, è possibile contattare la segreteria dell'ente.
            </p>
            <Link href="/contatti" className="btn btn-primary" style={{ marginTop: '20px' }}>
              Contattaci
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
          margin-bottom: 15px;
        }
        .content-section p {
          margin-bottom: 15px;
          line-height: 1.8;
        }
      `}</style>
    </>
  )
}
