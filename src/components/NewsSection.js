// src/components/NewsSection.js
import Link from 'next/link'
import NewsCard from './NewsCard'
import './NewsSection.css'

export default function NewsSection({ news }) {
  // Mostra solo le prime 3 news
  const latestNews = news.slice(0, 3)

  return (
    <section className="news-section section">
      <div className="container">
        <div className="section-title">
          <h2>Ultime Notizie</h2>
          <p>Aggiornamenti e iniziative dal mondo della formazione edile in Piemonte</p>
        </div>
        <div className="news-grid">
          {latestNews.map((item) => (
            <NewsCard key={item.id} news={item} />
          ))}
        </div>
        <div className="news-cta">
          <Link href="/notizie" className="btn btn-secondary">
            Vedi tutte le notizie
          </Link>
        </div>
      </div>
    </section>
  )
}
