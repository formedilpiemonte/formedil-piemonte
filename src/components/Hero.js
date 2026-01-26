// src/components/Hero.js
import Link from 'next/link'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="container">
          <h1 className="hero-title">
            La formazione per il futuro delle costruzioni in Piemonte
          </h1>
          <p className="hero-subtitle">
            FORMEDIL Piemonte è l'ente di formazione del sistema bilaterale 
            dell'edilizia, impegnato nella qualificazione professionale, 
            nella sicurezza e nell'innovazione del settore delle costruzioni.
          </p>
          <div className="hero-buttons">
            <Link href="/corsi" className="btn btn-primary">
              Scopri i corsi
            </Link>
            <Link href="/chi-siamo" className="btn btn-outline-white">
              Chi siamo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
