// src/app/formazione/page.js
import Link from 'next/link'

export default function Formazione() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Formazione</h1>
          <p>Percorsi di qualificazione per il settore delle costruzioni</p>
        </div>
      </div>

      <div className="container">
        <section className="content-section">
          <p className="intro-text">
            FORMEDIL Piemonte promuove la qualificazione professionale attraverso 
            un'offerta formativa articolata, rivolta a lavoratori, imprese, giovani 
            e disoccupati, con l'obiettivo di sviluppare competenze tecniche, 
            gestionali e trasversali per il settore delle costruzioni.
          </p>
        </section>

        <section className="content-section">
          <h2>Formazione Iniziale</h2>
          <div className="card">
            <p>
              I percorsi di formazione iniziale sono destinati a chi desidera 
              intraprendere una professione nel settore edile, anche senza 
              esperienza pregressa.
            </p>
            <p>
              Attraverso attività teoriche e pratiche in cantieri didattici, 
              i partecipanti acquisiscono le competenze di base per l'inserimento 
              lavorativo nelle imprese del territorio.
            </p>
            <h4 style={{ marginTop: '20px', color: 'var(--primary-blue)' }}>
              Destinatari
            </h4>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)'
            }}>
              <li>Giovani in uscita dal percorso scolastico</li>
              <li>Disoccupati in cerca di riqualificazione</li>
              <li>Persone interessate a professioni manuali qualificate</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Formazione Continua</h2>
          <div className="card">
            <p>
              La formazione continua permette ai lavoratori già occupati di 
              aggiornare e ampliare le proprie competenze in relazione all'evoluzione 
              tecnologica e normativa del settore.
            </p>
            <p>
              L'offerta include corsi di aggiornamento professionale, specializzazione 
              tecnica e sviluppo di competenze trasversali.
            </p>
            <h4 style={{ marginTop: '20px', color: 'var(--primary-blue)' }}>
              Aree di intervento
            </h4>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)'
            }}>
              <li>Tecniche costruttive innovative</li>
              <li>Sostenibilità ambientale ed efficienza energetica</li>
              <li>Digitalizzazione e BIM (Building Information Modeling)</li>
              <li>Gestione di cantiere e organizzazione del lavoro</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Aggiornamento Professionale</h2>
          <div className="card">
            <p>
              Corsi brevi finalizzati all'aggiornamento su specifiche normative, 
              tecnologie o metodologie operative.
            </p>
            <p>
              Questi percorsi rispondono alle esigenze di adeguamento professionale 
              richiesto dalla rapida evoluzione del settore edilizio.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Riqualificazione e Specializzazione</h2>
          <div className="card">
            <p>
              Percorsi dedicati a chi desidera cambiare mansione o acquisire 
              competenze specialistiche in ambiti tecnici avanzati.
            </p>
            <p>
              La riqualificazione favorisce la mobilità professionale interna 
              al settore e l'accesso a nuove opportunità occupazionali.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Formazione Obbligatoria</h2>
          <div className="card">
            <p>
              FORMEDIL Piemonte eroga formazione obbligatoria prevista dal 
              D.Lgs. 81/2008 in materia di sicurezza e salute nei luoghi di lavoro.
            </p>
            <h4 style={{ marginTop: '20px', color: 'var(--primary-blue)' }}>
              Corsi disponibili
            </h4>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)'
            }}>
              <li>Formazione generale e specifica per lavoratori</li>
              <li>Formazione per preposti e dirigenti</li>
              <li>Corsi per coordinatori della sicurezza</li>
              <li>Abilitazione all'uso di attrezzature (PLE, carrelli, ecc.)</li>
              <li>Primo soccorso e antincendio</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Destinatari della Formazione</h2>
          <div className="grid grid-2" style={{ marginTop: '20px' }}>
            <div className="card">
              <h3>Imprese</h3>
              <p>
                Percorsi formativi per l'aggiornamento del personale dipendente 
                e per il miglioramento dell'organizzazione aziendale.
              </p>
              <Link href="/imprese" style={{ 
                color: 'var(--accent-orange)', 
                fontWeight: '600',
                marginTop: '10px',
                display: 'inline-block'
              }}>
                Scopri i servizi →
              </Link>
            </div>
            <div className="card">
              <h3>Lavoratori</h3>
              <p>
                Formazione continua per mantenere e sviluppare competenze 
                professionali in linea con l'evoluzione del settore.
              </p>
            </div>
            <div className="card">
              <h3>Disoccupati</h3>
              <p>
                Percorsi di qualificazione e riqualificazione per favorire 
                l'inserimento o il reinserimento nel mercato del lavoro.
              </p>
            </div>
            <div className="card">
              <h3>Giovani</h3>
              <p>
                Formazione iniziale e orientamento per avvicinare le nuove 
                generazioni alle professioni dell'edilizia.
              </p>
              <Link href="/giovani" style={{ 
                color: 'var(--accent-orange)', 
                fontWeight: '600',
                marginTop: '10px',
                display: 'inline-block'
              }}>
                Scopri di più →
              </Link>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Metodologia Didattica</h2>
          <div className="card">
            <p>
              La formazione di FORMEDIL Piemonte integra:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '15px'
            }}>
              <li>Lezioni teoriche in aula</li>
              <li>Esercitazioni pratiche in cantieri didattici</li>
              <li>Formazione a distanza (FAD) per contenuti teorici</li>
              <li>Stage formativi presso imprese del settore</li>
              <li>Simulazioni operative e case study</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Certificazioni e Attestati</h2>
          <div className="card">
            <p>
              Al termine dei percorsi formativi vengono rilasciati:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '15px'
            }}>
              <li>Attestati di frequenza</li>
              <li>Qualifiche professionali riconosciute</li>
              <li>Certificazioni di competenza</li>
              <li>Attestati abilitanti per uso attrezzature</li>
              <li>Crediti formativi per formazione continua</li>
            </ul>
            <p style={{ marginTop: '15px' }}>
              Le certificazioni rilasciate sono valide su tutto il territorio 
              nazionale e riconosciute dal sistema bilaterale dell'edilizia.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%)',
            color: 'var(--white)',
            padding: '40px',
            textAlign: 'center'
          }}>
            <h3 style={{ color: 'var(--white)', marginBottom: '15px' }}>
              Scopri l'offerta formativa completa
            </h3>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.9)', 
              marginBottom: '25px',
              fontSize: '1.1rem'
            }}>
              Consulta il catalogo corsi per trovare il percorso formativo più 
              adatto alle tue esigenze professionali.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/corsi" className="btn btn-primary" style={{ backgroundColor: 'var(--accent-orange)' }}>
                Catalogo Corsi
              </Link>
              <Link href="/agenda" className="btn btn-outline-white">
                Calendario Corsi
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
