// src/app/progetti/page.js
import Link from 'next/link'

export default function Progetti() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Progetti</h1>
          <p>Iniziative nazionali ed europee per l'innovazione formativa</p>
        </div>
      </div>

      <div className="container">
        <section className="content-section">
          <p className="intro-text">
            FORMEDIL Piemonte partecipa a progetti nazionali ed europei finalizzati 
            allo sviluppo di competenze innovative, al riconoscimento delle qualifiche 
            professionali e alla promozione della mobilità formativa nel settore 
            delle costruzioni.
          </p>
        </section>

        <section className="content-section">
          <h2>Progetti Nazionali</h2>
          <div className="card">
            <p>
              FORMEDIL Piemonte collabora con il sistema FORMEDIL nazionale per 
              l'implementazione di progetti strategici rivolti a:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '15px'
            }}>
              <li>Innovazione dei contenuti formativi</li>
              <li>Digitalizzazione della formazione</li>
              <li>Sviluppo di competenze trasversali</li>
              <li>Certificazione delle competenze</li>
              <li>Sicurezza nei cantieri</li>
              <li>Sostenibilità ambientale ed efficienza energetica</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Ambiti di intervento</h2>
          <div className="grid grid-2" style={{ marginTop: '20px' }}>
            <div className="card">
              <h3>Innovazione tecnologica</h3>
              <p>
                Progetti dedicati all'introduzione di tecnologie digitali come 
                BIM, realtà aumentata e strumenti di progettazione avanzata.
              </p>
            </div>
            <div className="card">
              <h3>Sostenibilità</h3>
              <p>
                Sviluppo di competenze per l'edilizia sostenibile, efficienza 
                energetica e utilizzo di materiali eco-compatibili.
              </p>
            </div>
            <div className="card">
              <h3>Sicurezza</h3>
              <p>
                Iniziative per la diffusione della cultura della prevenzione e 
                l'aggiornamento sulle normative di sicurezza.
              </p>
            </div>
            <div className="card">
              <h3>Formazione a distanza</h3>
              <p>
                Sperimentazione di metodologie FAD e piattaforme e-learning per 
                la formazione continua.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Progetti Europei</h2>
          <div className="card">
            <p>
              La partecipazione a progetti europei consente di:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '15px'
            }}>
              <li>Scambiare buone pratiche con partner internazionali</li>
              <li>Sviluppare metodologie formative innovative</li>
              <li>Favorire la mobilità dei lavoratori del settore</li>
              <li>Armonizzare le qualifiche professionali a livello europeo</li>
              <li>Accedere a finanziamenti per l'innovazione formativa</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Programmi europei</h2>
          <div className="card mb-20">
            <h3>Erasmus+</h3>
            <p>
              Progetti di cooperazione transnazionale per lo sviluppo di 
              competenze, mobilità formativa e scambio di esperienze nel settore 
              delle costruzioni.
            </p>
          </div>

          <div className="card mb-20">
            <h3>Fondi Strutturali Europei</h3>
            <p>
              Iniziative finanziate da FSE e FESR per la qualificazione 
              professionale, l'occupabilità e l'innovazione tecnologica.
            </p>
          </div>

          <div className="card mb-20">
            <h3>Horizon Europe</h3>
            <p>
              Partecipazione a progetti di ricerca e innovazione applicata al 
              settore edilizio e alla formazione professionale.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Mobilità formativa europea</h2>
          <div className="card">
            <p>
              FORMEDIL Piemonte promuove opportunità di mobilità per:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '15px'
            }}>
              <li>Giovani in formazione iniziale</li>
              <li>Lavoratori per aggiornamento professionale</li>
              <li>Formatori e docenti per scambio di metodologie</li>
              <li>Rappresentanti di imprese per collaborazioni internazionali</li>
            </ul>
            <p style={{ marginTop: '15px' }}>
              Queste esperienze arricchiscono le competenze e favoriscono 
              l'integrazione nel mercato del lavoro europeo.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Innovazione e ricerca applicata</h2>
          <div className="card">
            <p>
              La partecipazione a progetti di ricerca consente di:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '15px'
            }}>
              <li>Sperimentare nuove metodologie didattiche</li>
              <li>Sviluppare contenuti formativi innovativi</li>
              <li>Analizzare fabbisogni emergenti di competenze</li>
              <li>Validare strumenti di certificazione delle competenze</li>
              <li>Trasferire i risultati nel sistema formativo regionale</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Partnership strategiche</h2>
          <div className="card">
            <p>
              I progetti sono realizzati in collaborazione con:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '15px'
            }}>
              <li>Enti di formazione europei del settore edile</li>
              <li>Università e centri di ricerca</li>
              <li>Organizzazioni datoriali e sindacali internazionali</li>
              <li>Istituzioni pubbliche nazionali e regionali</li>
              <li>Imprese innovative del comparto costruzioni</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Risultati e impatti</h2>
          <div className="card">
            <p>
              I progetti generano impatti concreti sul territorio:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '15px'
            }}>
              <li>Miglioramento della qualità dell'offerta formativa</li>
              <li>Introduzione di innovazioni didattiche e tecnologiche</li>
              <li>Maggiore competitività delle imprese piemontesi</li>
              <li>Qualificazione professionale dei lavoratori</li>
              <li>Rafforzamento del sistema bilaterale regionale</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <div className="card" style={{ 
            background: 'var(--light-gray)',
            padding: '40px',
            textAlign: 'center'
          }}>
            <h3>Maggiori informazioni sui progetti</h3>
            <p style={{ marginBottom: '25px' }}>
              Per conoscere i progetti in corso e le opportunità di partecipazione, 
              contatta FORMEDIL Piemonte.
            </p>
            <Link href="/contatti" className="btn btn-primary">
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
