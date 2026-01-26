// src/app/privacy/page.js
export default function Privacy() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Informativa sul trattamento dei dati personali</p>
        </div>
      </div>

      <div className="container">
        <section className="content-section">
          <div className="card">
            <h2>Informativa Privacy</h2>
            <p>
              In conformità al Regolamento UE 2016/679 (GDPR) e alla normativa italiana 
              in materia di protezione dei dati personali, FORMEDIL Piemonte informa 
              gli utenti sulle modalità di trattamento dei dati raccolti attraverso 
              il presente sito web.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Titolare del trattamento</h2>
          <div className="card">
            <p><strong>FORMEDIL Piemonte</strong></p>
            <p>Regione Piemonte</p>
            <p>Email: <a href="mailto:privacy@formedilpiemonte.it">privacy@formedilpiemonte.it</a></p>
          </div>
        </section>

        <section className="content-section">
          <h2>Tipologie di dati raccolti</h2>
          <p>
            I dati personali raccolti tramite il sito web possono includere:
          </p>
          <ul style={{ paddingLeft: '25px', lineHeight: '1.8', color: 'var(--text-gray)' }}>
            <li>Dati identificativi (nome, cognome, email, telefono)</li>
            <li>Dati di navigazione (indirizzo IP, tipo di browser, pagine visitate)</li>
            <li>Dati forniti volontariamente tramite moduli di contatto o iscrizione</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Finalità del trattamento</h2>
          <p>I dati personali sono trattati per le seguenti finalità:</p>
          <div className="grid grid-2" style={{ marginTop: '20px' }}>
            <div className="card">
              <h3>Gestione richieste</h3>
              <p>
                Risposta a richieste di informazioni, iscrizioni a corsi e comunicazioni 
                con l'ente.
              </p>
            </div>
            <div className="card">
              <h3>Attività formative</h3>
              <p>
                Gestione delle iscrizioni, erogazione dei corsi e rilascio di attestati.
              </p>
            </div>
            <div className="card">
              <h3>Obblighi di legge</h3>
              <p>
                Adempimento di obblighi normativi, contabili e fiscali.
              </p>
            </div>
            <div className="card">
              <h3>Comunicazioni istituzionali</h3>
              <p>
                Invio di newsletter e aggiornamenti su iniziative formative (previo consenso).
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Base giuridica del trattamento</h2>
          <p>
            Il trattamento dei dati personali si basa su:
          </p>
          <ul style={{ paddingLeft: '25px', lineHeight: '1.8', color: 'var(--text-gray)' }}>
            <li>Esecuzione di un contratto o di misure precontrattuali</li>
            <li>Adempimento di obblighi di legge</li>
            <li>Consenso esplicito dell'interessato (per comunicazioni promozionali)</li>
            <li>Legittimo interesse del titolare</li>
          </ul>
        </section>

        <section className="content-section">
          <h2>Modalità di trattamento</h2>
          <p>
            I dati personali sono trattati con strumenti informatici e cartacei, 
            adottando misure di sicurezza tecniche e organizzative adeguate a 
            prevenire accessi non autorizzati, divulgazione, modifica o distruzione 
            non autorizzata.
          </p>
        </section>

        <section className="content-section">
          <h2>Conservazione dei dati</h2>
          <p>
            I dati personali sono conservati per il tempo strettamente necessario 
            al perseguimento delle finalità per cui sono stati raccolti e in conformità 
            agli obblighi di legge.
          </p>
        </section>

        <section className="content-section">
          <h2>Diritti dell'interessato</h2>
          <p>
            Gli interessati hanno il diritto di:
          </p>
          <ul style={{ paddingLeft: '25px', lineHeight: '1.8', color: 'var(--text-gray)' }}>
            <li>Accedere ai propri dati personali</li>
            <li>Richiedere la rettifica o la cancellazione</li>
            <li>Opporsi al trattamento</li>
            <li>Richiedere la limitazione del trattamento</li>
            <li>Richiedere la portabilità dei dati</li>
            <li>Revocare il consenso in qualsiasi momento</li>
            <li>Proporre reclamo all'Autorità Garante</li>
          </ul>
          <p style={{ marginTop: '20px' }}>
            Per esercitare i propri diritti, è possibile contattare il Titolare 
            all'indirizzo: <a href="mailto:privacy@formedilpiemonte.it">privacy@formedilpiemonte.it</a>
          </p>
        </section>

        <section className="content-section">
          <h2>Cookie</h2>
          <div className="card">
            <p>
              Il sito utilizza cookie tecnici necessari al funzionamento e cookie 
              analitici per migliorare l'esperienza di navigazione. L'utente può 
              gestire le preferenze sui cookie attraverso le impostazioni del browser.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Modifiche alla Privacy Policy</h2>
          <p>
            FORMEDIL Piemonte si riserva il diritto di modificare la presente 
            informativa. Gli utenti sono invitati a consultare periodicamente 
            questa pagina per eventuali aggiornamenti.
          </p>
          <p style={{ marginTop: '15px', color: 'var(--text-gray)' }}>
            <em>Ultimo aggiornamento: Gennaio 2025</em>
          </p>
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
        .content-section a {
          color: var(--accent-orange);
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}
