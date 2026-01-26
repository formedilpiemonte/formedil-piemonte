// src/app/imprese/page.js
import Link from 'next/link'

export default function Imprese() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Servizi per le Imprese</h1>
          <p>Supporto alla competitività e alla qualificazione aziendale</p>
        </div>
      </div>

      <div className="container">
        <section className="content-section">
          <p className="intro-text">
            FORMEDIL Piemonte supporta le imprese edili del territorio attraverso 
            servizi formativi e di consulenza finalizzati alla qualificazione delle 
            competenze, al miglioramento dell'organizzazione aziendale e al 
            rafforzamento della competitività sul mercato.
          </p>
        </section>

        <section className="content-section">
          <h2>Il valore della formazione per l'impresa</h2>
          <div className="card">
            <p>
              Investire nella formazione dei propri dipendenti significa:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '15px'
            }}>
              <li>Migliorare la qualità delle lavorazioni</li>
              <li>Ridurre gli infortuni e i costi della non sicurezza</li>
              <li>Accrescere la produttività aziendale</li>
              <li>Rispondere ai requisiti di qualificazione richiesti dal mercato</li>
              <li>Valorizzare le risorse umane e fidelizzare i lavoratori</li>
              <li>Innovare processi e metodologie operative</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Servizi formativi per le imprese</h2>
          <div className="grid grid-2" style={{ marginTop: '20px' }}>
            <div className="card">
              <h3>Formazione obbligatoria</h3>
              <p>
                Gestione completa degli adempimenti formativi previsti dal 
                D.Lgs. 81/2008 per lavoratori, preposti, dirigenti e addetti 
                alle emergenze.
              </p>
            </div>
            <div className="card">
              <h3>Aggiornamento professionale</h3>
              <p>
                Corsi tecnici per l'aggiornamento del personale su nuove 
                tecnologie, normative e metodologie operative.
              </p>
            </div>
            <div className="card">
              <h3>Formazione specialistica</h3>
              <p>
                Percorsi avanzati per la qualificazione su tecniche costruttive 
                innovative, BIM, sostenibilità ed efficienza energetica.
              </p>
            </div>
            <div className="card">
              <h3>Formazione finanziata</h3>
              <p>
                Supporto nell'accesso a fondi interprofessionali e finanziamenti 
                regionali per la formazione continua.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Piani formativi aziendali</h2>
          <div className="card">
            <p>
              FORMEDIL Piemonte collabora con le imprese nella progettazione di 
              piani formativi personalizzati, costruiti sulle specifiche esigenze 
              organizzative e produttive.
            </p>
            <p style={{ marginTop: '15px' }}>
              Il servizio prevede:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '10px'
            }}>
              <li>Analisi dei fabbisogni formativi</li>
              <li>Progettazione di percorsi su misura</li>
              <li>Erogazione in modalità flessibile (in sede o presso l'impresa)</li>
              <li>Monitoraggio dei risultati e valutazione dell'efficacia</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Qualificazione e certificazione</h2>
          <div className="card">
            <p>
              La qualificazione professionale dei lavoratori rappresenta un 
              elemento distintivo per le imprese che operano in appalti pubblici 
              e privati.
            </p>
            <p style={{ marginTop: '15px' }}>
              FORMEDIL Piemonte rilascia attestati e certificazioni riconosciute 
              a livello nazionale, valide per:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '10px'
            }}>
              <li>Requisiti di qualificazione SOA</li>
              <li>Partecipazione a gare d'appalto</li>
              <li>Certificazioni di sistema aziendali</li>
              <li>Adempimenti di legge (sicurezza, abilitazioni)</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Innovazione e digitalizzazione</h2>
          <div className="card">
            <p>
              FORMEDIL Piemonte promuove l'innovazione tecnologica attraverso 
              percorsi formativi dedicati a:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '15px'
            }}>
              <li>BIM (Building Information Modeling)</li>
              <li>Digitalizzazione dei processi di cantiere</li>
              <li>Tecnologie per la sostenibilità ambientale</li>
              <li>Sistemi di gestione integrata qualità-sicurezza-ambiente</li>
              <li>Efficienza energetica e materiali innovativi</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Supporto amministrativo</h2>
          <div className="card">
            <p>
              L'ente offre supporto alle imprese per:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '15px'
            }}>
              <li>Pianificazione degli adempimenti formativi obbligatori</li>
              <li>Gestione della documentazione (attestati, libretti formativi)</li>
              <li>Scadenzari per aggiornamenti periodici</li>
              <li>Consulenza su normative e obblighi formativi</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Collaborazione con il sistema ANCE</h2>
          <div className="card">
            <p>
              FORMEDIL Piemonte opera in stretta collaborazione con ANCE 
              (Associazione Nazionale Costruttori Edili) e le sue articolazioni 
              territoriali, garantendo:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '15px'
            }}>
              <li>Coerenza tra esigenze delle imprese e offerta formativa</li>
              <li>Rappresentanza delle istanze del settore presso istituzioni</li>
              <li>Condivisione di iniziative per la competitività del comparto</li>
              <li>Promozione congiunta della cultura della sicurezza</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Modalità di erogazione</h2>
          <div className="grid grid-3" style={{ marginTop: '20px' }}>
            <div className="card">
              <h3>In sede</h3>
              <p>
                Corsi presso le Scuole Edili territoriali, dotate di aule e 
                cantieri didattici.
              </p>
            </div>
            <div className="card">
              <h3>Presso l'impresa</h3>
              <p>
                Formazione direttamente in azienda o in cantiere, su richiesta 
                dell'impresa.
              </p>
            </div>
            <div className="card">
              <h3>Formazione a distanza</h3>
              <p>
                Modalità FAD per contenuti teorici, con piattaforma e-learning 
                dedicata.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Vantaggi per le imprese associate</h2>
          <div className="card">
            <p>
              Le imprese associate al sistema bilaterale dell'edilizia beneficiano di:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '15px'
            }}>
              <li>Condizioni agevolate per l'accesso ai corsi</li>
              <li>Priorità nell'organizzazione di percorsi personalizzati</li>
              <li>Supporto nella gestione degli adempimenti formativi</li>
              <li>Accesso a fondi per la formazione continua</li>
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
            <h3 style={{ color: 'var(--white)', marginBottom: '15px', fontSize: '1.8rem' }}>
              Investi nella formazione della tua impresa
            </h3>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.95)', 
              marginBottom: '25px',
              fontSize: '1.1rem',
              lineHeight: '1.7'
            }}>
              Contattaci per costruire un piano formativo su misura per le 
              esigenze della tua azienda.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contatti" className="btn btn-primary" style={{ backgroundColor: 'var(--accent-orange)' }}>
                Contattaci
              </Link>
              <Link href="/corsi" className="btn btn-outline-white">
                Catalogo Corsi
              </Link>
            </div>
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
