// src/app/giovani/page.js
import Link from 'next/link'

export default function Giovani() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Giovani e Orientamento</h1>
          <p>Avvicinare le nuove generazioni al mondo delle costruzioni</p>
        </div>
      </div>

      <div className="container">
        <section className="content-section">
          <p className="intro-text">
            FORMEDIL Piemonte promuove l'avvicinamento dei giovani al settore 
            delle costruzioni attraverso attività di orientamento, percorsi formativi 
            e iniziative di valorizzazione delle professioni tecniche e manuali 
            dell'edilizia.
          </p>
        </section>

        <section className="content-section">
          <h2>Perché scegliere l'edilizia</h2>
          <div className="card">
            <p>
              Il settore delle costruzioni offre opportunità concrete di lavoro 
              e percorsi di crescita professionale per chi possiede competenze 
              tecniche qualificate.
            </p>
            <p style={{ marginTop: '15px' }}>
              Le professioni dell'edilizia rappresentano:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '10px'
            }}>
              <li>Sbocchi occupazionali stabili e diffusi sul territorio</li>
              <li>Valorizzazione del lavoro manuale e della competenza tecnica</li>
              <li>Possibilità di specializzazione e crescita professionale</li>
              <li>Settore in evoluzione verso innovazione e sostenibilità</li>
              <li>Opportunità di lavoro autonomo e imprenditoriale</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Orientamento scolastico e professionale</h2>
          <div className="card">
            <p>
              FORMEDIL Piemonte collabora con istituti scolastici del territorio 
              per attività di orientamento rivolte a studenti della scuola 
              secondaria di primo e secondo grado.
            </p>
            <h4 style={{ marginTop: '20px', color: 'var(--primary-blue)' }}>
              Attività proposte
            </h4>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '10px'
            }}>
              <li>Presentazioni nelle scuole sulle professioni dell'edilizia</li>
              <li>Visite guidate presso le Scuole Edili e cantieri didattici</li>
              <li>Giornate di orientamento e open day</li>
              <li>Laboratori pratici di avvicinamento ai mestieri</li>
              <li>Testimonianze di professionisti del settore</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Formazione iniziale per giovani</h2>
          <div className="grid grid-2" style={{ marginTop: '20px' }}>
            <div className="card">
              <h3>Corsi di qualifica professionale</h3>
              <p>
                Percorsi formativi di base per acquisire competenze tecniche 
                fondamentali e ottenere qualifiche riconosciute.
              </p>
            </div>
            <div className="card">
              <h3>Apprendistato formativo</h3>
              <p>
                Integrazione tra formazione in aula e esperienza pratica presso 
                imprese del territorio.
              </p>
            </div>
            <div className="card">
              <h3>Alternanza scuola-lavoro</h3>
              <p>
                Collaborazione con istituti tecnici e professionali per percorsi 
                di orientamento e formazione.
              </p>
            </div>
            <div className="card">
              <h3>Stage formativi</h3>
              <p>
                Esperienze pratiche in cantiere per conoscere direttamente il 
                mondo del lavoro edile.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <h2>Le professioni dell'edilizia</h2>
          <p>
            Il settore delle costruzioni offre una varietà di professioni tecniche:
          </p>
          
          <div className="card mb-20">
            <h3>Muratore</h3>
            <p>
              Figura fondamentale nella costruzione di edifici, specializzato 
              in tecniche di posa, intonacatura e finiture murarie.
            </p>
          </div>

          <div className="card mb-20">
            <h3>Carpentiere</h3>
            <p>
              Esperto nella realizzazione di strutture in legno, casseforme e 
              elementi di carpenteria edile.
            </p>
          </div>

          <div className="card mb-20">
            <h3>Ferraiolo</h3>
            <p>
              Specialista nella lavorazione e posa del ferro per armature di 
              strutture in cemento armato.
            </p>
          </div>

          <div className="card mb-20">
            <h3>Impiantista</h3>
            <p>
              Tecnico specializzato in impianti idraulici, termici, elettrici 
              e tecnologici per edifici.
            </p>
          </div>

          <div className="card mb-20">
            <h3>Operatore macchine</h3>
            <p>
              Conduttore di mezzi meccanici e attrezzature specializzate per 
              movimentazione terra e sollevamento.
            </p>
          </div>

          <div className="card mb-20">
            <h3>Tecnico specializzato</h3>
            <p>
              Figure avanzate in ambiti come BIM, efficienza energetica, 
              restauro, sicurezza e gestione cantiere.
            </p>
          </div>
        </section>

        <section className="content-section">
          <h2>Valorizzazione delle competenze tecniche</h2>
          <div className="card">
            <p>
              FORMEDIL Piemonte promuove la dignità del lavoro manuale e tecnico 
              attraverso:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '15px'
            }}>
              <li>Riconoscimento sociale delle professioni edili</li>
              <li>Valorizzazione della formazione professionale</li>
              <li>Certificazione delle competenze acquisite</li>
              <li>Opportunità di crescita e specializzazione</li>
              <li>Promozione dell'innovazione e della sostenibilità</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Progetti per i giovani</h2>
          <div className="card">
            <p>
              FORMEDIL Piemonte partecipa a progetti regionali, nazionali ed 
              europei dedicati all'orientamento e all'inserimento lavorativo 
              dei giovani nel settore edile.
            </p>
            <p style={{ marginTop: '15px' }}>
              Queste iniziative favoriscono:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '10px'
            }}>
              <li>Matching tra domanda e offerta di lavoro giovanile</li>
              <li>Borse di studio e incentivi per la formazione</li>
              <li>Mobilità formativa europea</li>
              <li>Percorsi di accompagnamento all'inserimento lavorativo</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Supporto all'inserimento lavorativo</h2>
          <div className="card">
            <p>
              Al termine dei percorsi formativi, FORMEDIL Piemonte supporta i 
              giovani nell'inserimento nel mercato del lavoro attraverso:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '15px'
            }}>
              <li>Collaborazione con imprese per stage e tirocini</li>
              <li>Orientamento nella ricerca attiva del lavoro</li>
              <li>Supporto nella costruzione del curriculum professionale</li>
              <li>Accompagnamento nei primi passi della carriera</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <h2>Edilizia e sostenibilità: il futuro è verde</h2>
          <div className="card">
            <p>
              Il settore delle costruzioni sta evolvendo verso modelli sostenibili, 
              offrendo ai giovani l'opportunità di contribuire a:
            </p>
            <ul style={{ 
              paddingLeft: '25px', 
              lineHeight: '1.8',
              color: 'var(--text-gray)',
              marginTop: '15px'
            }}>
              <li>Efficienza energetica e riqualificazione del patrimonio edilizio</li>
              <li>Utilizzo di materiali sostenibili e tecnologie innovative</li>
              <li>Digitalizzazione e BIM per progettazione intelligente</li>
              <li>Economia circolare e riduzione degli sprechi</li>
            </ul>
          </div>
        </section>

        <section className="content-section">
          <div className="card" style={{ 
            background: 'linear-gradient(135deg, #27ae60 0%, #229954 100%)',
            color: 'var(--white)',
            padding: '40px',
            textAlign: 'center'
          }}>
            <h3 style={{ color: 'var(--white)', marginBottom: '15px', fontSize: '1.8rem' }}>
              Costruisci il tuo futuro nell'edilizia
            </h3>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.95)', 
              marginBottom: '25px',
              fontSize: '1.1rem',
              lineHeight: '1.7'
            }}>
              Scopri i percorsi formativi per giovani e inizia la tua carriera 
              nel settore delle costruzioni.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link 
                href="/corsi" 
                className="btn btn-primary" 
                style={{ backgroundColor: 'var(--white)', color: '#27ae60' }}
              >
                Scopri i corsi
              </Link>
              <Link href="/contatti" className="btn btn-outline-white">
                Contattaci
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
