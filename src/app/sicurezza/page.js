// src/app/sicurezza/page.js
import Link from 'next/link'

export default function Sicurezza() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Sicurezza sul Lavoro</h1>
          <p>La cultura della prevenzione nei cantieri edili</p>
        </div>
      </div>

      <div className="container">
        <section className="content-section">
          <p className="intro-text">
            La sicurezza sul lavoro rappresenta una priorità assoluta per 
            FORMEDIL Piemonte. La formazione è lo strumento principale per 
            promuovere una cultura della prevenzione efficace e per ridurre 
            gli infortuni nei cantieri edili.
          </p>
        </section>

        <section className="content-section">
          <h2>La centralità della sicurezza</h2>
          <div className="card">
            <p>
              Il settore delle costruzioni presenta rischi specifici che richiedono 
              competenze tecniche, consapevolezza e comportamenti preventivi da 
              parte di tutti i soggetti coinvolti.
            </p>
            <p>
              FORMEDIL Piemonte promuove la sicurezza attraverso percorsi formativi 
              conformi alla normativa vigente e azioni di sensibilizzazione rivolte 
              a imprese, lavoratori e giovani in formazione.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Formazione come prevenzione</h2>
          <p>
            La formazione in materia di sicurezza persegue obiettivi essenziali:
          </p>
          <div className="grid grid-2" style={{ marginTop: '20px' }}>
            <div className="card">
              <h3>Conoscenza dei rischi</h3>
              <p>
                Identificazione e valutazione dei pericoli specifici presenti 
                nei cantieri edili e nelle diverse fasi lavorative.
              </p>
            </div>
            <div className="card">
              <h3>Uso corretto dei DPI</h3>
              <p>
                Formazione sull'utilizzo appropriato dei dispositivi di protezione 
                individuale e collettiva.
              </p>
            </div>
            <div className="card">
              <h3>Procedure operative</h3>
              <p>
                Apprendimento di modalità di lavoro sicure e rispettose delle 
                normative di prevenzione.
              </p>
            </div>
            <div className="card">
              <h3>Cultura della prevenzione</h3>
              <p>
                Sviluppo di comportamenti proattivi e responsabili verso la 
                sicurezza propria e altrui.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Riferimenti normativi</h2>
          <div className="card">
            <p>
              La formazione sulla sicurezza erogata da FORMEDIL Piemonte è 
              conforme al <strong>D.Lgs. 81/2008</strong> (Testo Unico sulla 
              Salute e Sicurezza sul Lavoro) e agli Accordi Stato-Regioni in 
              materia di formazione dei lavoratori.
            </p>
            <p style={{ marginTop: '15px' }}>
              L'ente garantisce il rispetto dei contenuti minimi, delle durate 
              e delle modalità di erogazione previste dalla normativa, assicurando 
              la validità degli attestati su tutto il territorio nazionale.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Percorsi formativi sulla sicurezza</h2>
          <p>
            FORMEDIL Piemonte offre un'articolata gamma di corsi obbligatori 
            e di aggiornamento:
          </p>
          
          <div className="card mb-20">
            <h3>Formazione generale e specifica per lavoratori</h3>
            <p>
              Corso base per tutti i lavoratori del settore edile, articolato 
              in modulo generale (4 ore) e modulo specifico in relazione al 
              livello di rischio (8-12 ore).
            </p>
          </div>

          <div className="card mb-20">
            <h3>Formazione per preposti</h3>
            <p>
              Corso dedicato a chi svolge funzioni di vigilanza e coordinamento 
              di lavoratori in cantiere (8 ore + aggiornamenti periodici).
            </p>
          </div>

          <div className="card mb-20">
            <h3>Formazione per dirigenti</h3>
            <p>
              Percorso per dirigenti con responsabilità gestionali in materia 
              di sicurezza (16 ore + aggiornamenti).
            </p>
          </div>

          <div className="card mb-20">
            <h3>Coordinatori della sicurezza</h3>
            <p>
              Formazione per coordinatori in fase di progettazione ed esecuzione 
              (120 ore) e aggiornamenti quinquennali (40 ore).
            </p>
          </div>

          <div className="card mb-20">
            <h3>Abilitazione all'uso di attrezzature</h3>
            <p>
              Corsi per l'uso di piattaforme elevabili (PLE), carrelli elevatori, 
              gru, escavatori e altre attrezzature da cantiere.
            </p>
          </div>

          <div className="card mb-20">
            <h3>Ponteggi (Pi.M.U.S.)</h3>
            <p>
              Formazione per addetti al montaggio, smontaggio e trasformazione 
              dei ponteggi (28 ore).
            </p>
          </div>

          <div className="card mb-20">
            <h3>Primo soccorso e antincendio</h3>
            <p>
              Corsi per addetti alle emergenze, con rilascio di attestati conformi 
              alla normativa vigente.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Aggiornamenti periodici</h2>
          <div className="card">
            <p>
              La normativa prevede aggiornamenti obbligatori per mantenere la 
              validità degli attestati:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '15px'
            }}>
              <li>Lavoratori: 6 ore ogni 5 anni</li>
              <li>Preposti: 6 ore ogni 5 anni</li>
              <li>Dirigenti: 6 ore ogni 5 anni</li>
              <li>Coordinatori sicurezza: 40 ore ogni 5 anni</li>
              <li>Abilitazione attrezzature: 4 ore ogni 5 anni</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Approccio culturale alla sicurezza</h2>
          <div className="card">
            <p>
              Oltre alla formazione obbligatoria, FORMEDIL Piemonte promuove 
              un approccio culturale alla sicurezza che coinvolge:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '15px'
            }}>
              <li>Sensibilizzazione nelle scuole e percorsi di orientamento</li>
              <li>Campagne informative rivolte alle imprese</li>
              <li>Condivisione di buone pratiche operative</li>
              <li>Collaborazione con gli enti di vigilanza</li>
              <li>Integrazione della sicurezza nei percorsi formativi iniziali</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Docenti qualificati</h2>
          <div className="card">
            <p>
              I corsi sulla sicurezza sono erogati da docenti in possesso dei 
              requisiti previsti dal Decreto Interministeriale 6 marzo 2013, 
              con esperienza specifica nel settore delle costruzioni.
            </p>
            <p style={{ marginTop: '15px' }}>
              La qualificazione dei formatori garantisce competenza tecnica e 
              capacità didattica per trasmettere efficacemente contenuti e 
              comportamenti sicuri.
            </p>
          </div>
        </section>

        <section className="content-section">
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
            color: 'var(--white)',
            padding: '40px',
            textAlign: 'center'
          }}>
            <h3 style={{ color: 'var(--white)', marginBottom: '15px', fontSize: '1.8rem' }}>
              La sicurezza è responsabilità di tutti
            </h3>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.95)', 
              marginBottom: '25px',
              fontSize: '1.1rem',
              lineHeight: '1.7'
            }}>
              Investire nella formazione significa proteggere vite umane, 
              ridurre infortuni e migliorare la qualità del lavoro nei cantieri.
            </p>
            <Link 
              href="/corsi" 
              className="btn btn-primary" 
              style={{ 
                backgroundColor: 'var(--white)',
                color: '#e74c3c'
              }}
            >
              Consulta i corsi di sicurezza
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
