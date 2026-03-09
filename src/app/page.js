// src/app/page.js
import Hero from '@/components/Hero'
import QuickAccess from '@/components/QuickAccess'
import Stats from '@/components/Stats'
import NewsSection from '@/components/NewsSection'
import VideoSection from '@/components/VideoSection'
import AgendaSection from '@/components/AgendaSection'
import MapSection from '@/components/MapSection'
import Link from 'next/link'

// Importa i dati
import newsData from '@/data/news.json'
import corsiData from '@/data/corsi.json'
import scuoleData from '@/data/scuole.json'
import videoData from '@/data/video.json'

export default function Home() {
  return (
    <>
      <Hero />
      <QuickAccess />
      <Stats />
      <NewsSection news={newsData} />
      <VideoSection videos={videoData} />
      <AgendaSection corsi={corsiData} />
      <MapSection scuole={scuoleData} />
      
      {/* CTA Finale */}
      <section className="cta-section section">
        <div className="container">
          <div style={{
            textAlign: 'center',
            background: 'linear-gradient(135deg, var(--primary-blue) 0%, var(--secondary-blue) 100%)',
            padding: '60px 40px',
            borderRadius: '12px',
            color: 'var(--white)'
          }}>
            <h2 style={{ color: 'var(--white)', marginBottom: '20px', fontSize: '2.5rem' }}>
              Inizia il tuo percorso formativo
            </h2>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.9)', 
              fontSize: '1.2rem', 
              marginBottom: '30px',
              maxWidth: '700px',
              margin: '0 auto 30px'
            }}>
              Scopri l'offerta formativa di FORMEDIL Piemonte e investi nel futuro 
              del settore delle costruzioni.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/corsi" className="btn btn-primary" style={{ backgroundColor: 'var(--accent-orange)' }}>
                Catalogo Corsi
              </Link>
              <Link href="/contatti" className="btn btn-outline-white">
                Contattaci
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
