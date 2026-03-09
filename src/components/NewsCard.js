// src/components/NewsCard.js
import Link from 'next/link'
import './NewsCard.css'

export default function NewsCard({ news }) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('it-IT', options)
  }

  return (
    <Link href={`/notizie/${news.slug}`} className="news-card">
      <div className="news-card-image">
        <img src={news.immagine} alt={news.titolo} />
        <span className="news-category">{news.categoria}</span>
      </div>
      <div className="news-card-content">
        <div className="news-date">{formatDate(news.data)}</div>
        <h3>{news.titolo}</h3>
        <p>{news.sommario}</p>
        <span className="news-read-more">
          Leggi di più →
        </span>
      </div>
    </Link>
  )
}
