// src/app/notizie/page.js
import Link from 'next/link'
import NewsCard from '@/components/NewsCard'

// Importa i dati delle news
import newsData from '@/data/news.json'

export default function Notizie() {
  // Ordina le news per data (più recenti prima)
  const sortedNews = [...newsData].sort((a, b) => 
    new Date(b.data) - new Date(a.data)
  )

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Notizie</h1>
          <p>Aggiornamenti e iniziative dal mondo della formazione edile</p>
        </div>
      </div>

      <div className="container">
        <section className="content-section">
          <p className="intro-text">
            Rimani aggiornato sulle iniziative di FORMEDIL Piemonte, sulle novità 
            normative e sugli eventi dedicati alla formazione e alla sicurezza nel 
            settore delle costruzioni.
          </p>
        </section>

        <section className="content-section">
          <div className="news-grid">
            {sortedNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </section>

        {sortedNews.length === 0 && (
          <div className="card" style={{ textAlign: 'center', padding: '60px 40px' }}>
            <h3>Nessuna notizia disponibile</h3>
            <p>Al momento non sono presenti aggiornamenti. Torna presto per nuove notizie!</p>
          </div>
        )}
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
        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 30px;
        }
        
        @media (max-width: 768px) {
          .news-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
