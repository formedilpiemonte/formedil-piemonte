// src/app/contatti/page.js
import ContactForm from '@/components/ContactForm'
import Link from 'next/link'

export default function Contatti() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Contatti</h1>
          <p>Mettiti in contatto con FORMEDIL Piemonte</p>
        </div>
      </div>

      <div className="container">
        <section className="content-section">
          <p className="intro-text">
            Per informazioni sui corsi, iscrizioni, servizi per le imprese o 
            qualsiasi altra richiesta, compila il modulo di contatto o utilizza 
            i recapiti delle Scuole Edili territoriali.
          </p>
        </section>

        <div className="contact-layout">
          {/* Form */}
          <div className="contact-form-section">
            <h2>Invia una richiesta</h2>
            <ContactForm />
          </div>

          {/* Info sidebar */}
          <aside className="contact-sidebar">
            <div className="card">
              <h3>FORMEDIL Piemonte</h3>
              <div className="info-list">
                <div className="info-item">
                  <span className="info-icon">📍</span>
                  <div>
                    <strong>Sede</strong>
                    <p>Regione Piemonte</p>
                  </div>
                </div>
                <div className="info-item">
                  <span className="info-icon">✉️</span>
                  <div>
                    <strong>Email</strong>
                    <p><a href="mailto:info@formedilpiemonte.it">info@formedilpiemonte.it</a></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{ marginTop: '20px' }}>
              <h3>Scuole Edili Territoriali</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-gray)', marginBottom: '15px' }}>
                Per informazioni specifiche sui corsi e per le iscrizioni, contatta 
                direttamente la Scuola Edile della tua provincia.
              </p>
              <Link href="/scuole-edili" className="btn btn-secondary" style={{ width: '100%' }}>
                Trova la sede più vicina
              </Link>
            </div>

            <div className="card" style={{ marginTop: '20px' }}>
              <h3>Orari</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-gray)' }}>
                Gli orari di apertura variano in base alla sede. Contatta la 
                Scuola Edile di riferimento per informazioni sugli orari di 
                segreteria.
              </p>
            </div>

            <div className="card social-card" style={{ marginTop: '20px' }}>
              <h3>Seguici sui social</h3>
              <div className="social-links">
                <a href="#" className="social-link" aria-label="Facebook">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="social-link" aria-label="YouTube">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </aside>
        </div>

        <section className="content-section">
          <h2>Domande Frequenti</h2>
          <div className="faq-grid">
            <div className="card">
              <h3>Come posso iscrivermi a un corso?</h3>
              <p>
                Contatta la Scuola Edile che organizza il corso di tuo interesse. 
                Troverai i recapiti nella sezione Scuole Edili o nell'agenda corsi.
              </p>
            </div>
            <div className="card">
              <h3>I corsi sono gratuiti?</h3>
              <p>
                I costi variano in base alla tipologia di corso. Sono previste 
                agevolazioni per lavoratori e imprese associate al sistema bilaterale.
              </p>
            </div>
            <div className="card">
              <h3>Gli attestati sono validi a livello nazionale?</h3>
              <p>
                Sì, tutti gli attestati rilasciati da FORMEDIL Piemonte hanno 
                validità su tutto il territorio nazionale.
              </p>
            </div>
            <div className="card">
              <h3>Organizzate corsi per le imprese?</h3>
              <p>
                Sì, possiamo progettare percorsi formativi personalizzati per le 
                imprese. Contattaci per maggiori informazioni.
              </p>
            </div>
          </div>
        </section>

        <section className="content-section">
          <div className="card" style={{ 
            background: 'var(--light-gray)',
            padding: '40px',
            textAlign: 'center'
          }}>
            <h3>Hai bisogno di supporto immediato?</h3>
            <p style={{ marginBottom: '25px', fontSize: '1.1rem' }}>
              Consulta la sezione delle Scuole Edili per trovare i contatti diretti 
              della sede più vicina a te.
            </p>
            <Link href="/scuole-edili" className="btn btn-primary">
              Trova la tua scuola
            </Link>
          </div>
        </section>
      </div>

      <style jsx>{`
        .content-section {
          margin-bottom: 50px;
        }
        .intro-text {
          font-size: 1.15rem;
          color: var(--text-gray);
          line-height: 1.8;
          margin-bottom: 40px;
        }
        .content-section h2 {
          color: var(--primary-blue);
          margin-bottom: 25px;
        }
        .content-section h3 {
          color: var(--primary-blue);
          margin-bottom: 15px;
          font-size: 1.1rem;
        }
        
        .contact-layout {
          display: grid;
          grid-template-columns: 1fr 400px;
          gap: 40px;
          margin-bottom: 60px;
        }
        
        .contact-form-section h2 {
          color: var(--primary-blue);
          margin-bottom: 25px;
        }
        
        .contact-sidebar .card h3 {
          font-size: 1.2rem;
        }
        
        .info-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .info-item {
          display: flex;
          gap: 15px;
        }
        
        .info-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }
        
        .info-item strong {
          display: block;
          color: var(--primary-blue);
          margin-bottom: 5px;
          font-size: 0.95rem;
        }
        
        .info-item p {
          margin: 0;
          color: var(--text-gray);
          line-height: 1.6;
        }
        
        .info-item a {
          color: var(--accent-orange);
          transition: color 0.3s ease;
        }
        
        .info-item a:hover {
          color: var(--primary-blue);
        }
        
        .social-card {
          background: linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%);
          color: var(--white);
        }
        
        .social-card h3 {
          color: var(--white);
        }
        
        .social-links {
          display: flex;
          gap: 15px;
          margin-top: 15px;
        }
        
        .social-link {
          width: 45px;
          height: 45px;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          transition: all 0.3s ease;
        }
