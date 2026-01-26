// src/app/notizie/[slug]/page.js
import Link from 'next/link'
import { notFound } from 'next/navigation'

// Importa i dati delle news
import newsData from '@/data/news.json'

export async function generateStaticParams() {
  return newsData.map((news) => ({
    slug: news.slug,
  }))
}

export default function NewsDetail({ params }) {
  const news = newsData.find((n) => n.slug === params.slug)

  if (!news) {
    notFound()
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(dateString).toLocaleDateString('it-IT', options)
  }

  return (
    <>
      <div className="breadcrumb">
        <div className="container">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/notizie">Notizie</Link></li>
            <li>{news.titolo}</li>
          </ul>
        </div>
      </div>

      <div className="container" style={{ marginTop: '40px', marginBottom: '80px' }}>
        <article className="news-article">
          <header className="article-header">
            <div className="article-meta">
              <span className="article-category">{news.categoria}</span>
              <span className="article-date">{formatDate(news.data)}</span>
            </div>
            <h1>{news.titolo}</h1>
            <p className="article-summary">{news.sommario}</p>
          </header>

          {news.immagine && (
            <div className="article-image">
              <img src={news.immagine} alt={news.titolo} />
            </div>
          )}

          <div className="article-content">
            <p>{news.contenuto}</p>
          </div>

          <footer className="article-footer">
            <Link href="/notizie" className="btn btn-secondary">
              ← Torna alle notizie
            </Link>
          </footer>
        </article>

        {/* News correlate */}
        <aside className="related-news">
          <h3>Altre notizie</h3>
          <div className="related-grid">
            {newsData
              .filter((n) => n.id !== news.id)
              .slice(0, 2)
              .map((relatedNews) => (
                <Link 
                  key={relatedNews.id} 
                  href={`/notizie/${relatedNews.slug}`}
                  className="related-card"
                >
                  <span className="related-category">{relatedNews.categoria}</span>
                  <h4>{relatedNews.titolo}</h4>
                  <p>{relatedNews.sommario}</p>
                  <span className="related-link">Leggi di più →</span>
                </Link>
              ))}
          </div>
        </aside>
      </div>

      <style jsx>{`
        .news-article {
          max-width: 800px;
          margin: 0 auto;
        }
        
        .article-header {
          margin-bottom: 40px;
        }
        
        .article-meta {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .article-category {
          background-color: var(--accent-orange);
          color: var(--white);
          padding: 6px 15px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
        }
        
        .article-date {
          color: var(--text-gray);
          font-size: 0.95rem;
        }
        
        .article-header h1 {
          font-size: 2.5rem;
          color: var(--primary-blue);
          margin-bottom: 20px;
          line-height: 1.2;
        }
        
        .article-summary {
          font-size: 1.2rem;
          color: var(--text-gray);
          line-height: 1.7;
          font-weight: 500;
        }
        
        .article-image {
          width: 100%;
          height: 400px;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 40px;
          background-color: var(--light-gray);
        }
        
        .article-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .article-content {
          font-size: 1.1rem;
          line-height: 1.9;
          color: var(--dark-gray);
          margin-bottom: 50px;
        }
        
        .article-content p {
          margin-bottom: 20px;
        }
        
        .article-footer {
          padding-top: 30px;
          border-top: 2px solid var(--light-gray);
          margin-bottom: 60px;
        }
        
        .related-news {
          max-width: 900px;
          margin: 0 auto;
          padding-top: 60px;
          border-top: 2px solid var(--light-gray);
        }
        
        .related-news h3 {
          color: var(--primary-blue);
          margin-bottom: 30px;
          font-size: 1.8rem;
        }
        
        .related-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
        }
        
        .related-card {
          background: var(--white);
          border-radius: 12px;
          padding: 25px;
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border-left: 4px solid var(--accent-orange);
        }
        
        .related-card:hover {
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
          transform: translateY(-5px);
        }
        
        .related-category {
          display: inline-block;
          background-color: var(--light-gray);
          color: var(--primary-blue);
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 12px;
        }
        
        .related-card h4 {
          color: var(--primary-blue);
          margin-bottom: 10px;
          font-size: 1.2rem;
        }
        
        .related-card p {
          color: var(--text-gray);
          line-height: 1.6;
          margin-bottom: 15px;
        }
        
        .related-link {
          color: var(--accent-orange);
          font-weight: 600;
        }
        
        @media (max-width: 768px) {
          .article-header h1 {
            font-size: 2rem;
          }
          
          .article-image {
            height: 250px;
          }
          
          .related-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}
