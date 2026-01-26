// src/components/Footer.js
import Link from 'next/link'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container-wide">
          <div className="footer-grid">
            {/* Chi siamo */}
            <div className="footer-section">
              <h3>FORMEDIL Piemonte</h3>
              <p>
                Ente di formazione del sistema bilaterale dell'edilizia, 
                operante nella Regione Piemonte per la qualificazione 
                professionale e la sicurezza nel settore delle costruzioni.
              </p>
            </div>

            {/* Link utili */}
            <div className="footer-section">
              <h4>Link utili</h4>
              <ul>
                <li><Link href="/chi-siamo">Chi siamo</Link></li>
                <li><Link href="/formazione">Formazione</Link></li>
                <li><Link href="/sicurezza">Sicurezza</Link></li>
                <li><Link href="/corsi">Catalogo corsi</Link></li>
                <li><Link href="/notizie">Notizie</Link></li>
              </ul>
            </div>

            {/* Servizi */}
            <div className="footer-section">
              <h4>Servizi</h4>
              <ul>
                <li><Link href="/imprese">Per le imprese</Link></li>
                <li><Link href="/giovani">Giovani e orientamento</Link></li>
                <li><Link href="/scuole-edili">Scuole Edili</Link></li>
                <li><Link href="/agenda">Agenda corsi</Link></li>
                <li><Link href="/contatti">Contatti</Link></li>
              </ul>
            </div>

            {/* Contatti */}
            <div className="footer-section">
              <h4>Contatti</h4>
              <div className="footer-contact">
                <p>
                  <strong>FORMEDIL Piemonte</strong><br/>
                  Regione Piemonte
                </p>
                <p>
                  Email: <a href="mailto:info@formedilpiemonte.it">info@formedilpiemonte.it</a>
                </p>
                <div className="footer-social">
                  <a href="#" aria-label="Facebook" className="social-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="LinkedIn" className="social-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" aria-label="YouTube" className="social-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container-wide">
          <div className="footer-bottom-content">
            <p>&copy; {new Date().getFullYear()} FORMEDIL Piemonte. Tutti i diritti riservati.</p>
            <div className="footer-links">
              <Link href="/privacy">Privacy Policy</Link>
              <span>|</span>
              <Link href="/statuto">Statuto</Link>
              <span>|</span>
              <Link href="/modello-organizzativo">Modello Organizzativo</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
