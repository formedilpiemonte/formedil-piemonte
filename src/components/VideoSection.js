// src/components/VideoSection.js
import './VideoSection.css'

export default function VideoSection({ videos }) {
  return (
    <section className="video-section section">
      <div className="container">
        <div className="section-title">
          <h2>Video Istituzionali</h2>
          <p>Scopri le attività e l'impegno di FORMEDIL Piemonte</p>
        </div>
        <div className="video-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-wrapper">
                <iframe
                  src={video.url}
                  title={video.titolo}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-info">
                <h3>{video.titolo}</h3>
                <p>{video.descrizione}</p>
                <span className="video-duration">⏱️ {video.durata}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
