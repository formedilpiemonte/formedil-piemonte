// src/components/Stats.js
'use client'
import { useEffect, useState } from 'react'
import './Stats.css'

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.querySelector('.stats-section')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const stats = [
    {
      number: '40+',
      label: 'Anni di esperienza',
      description: 'nel settore della formazione edile'
    },
    {
      number: '5',
      label: 'Scuole Edili',
      description: 'presenti sul territorio piemontese'
    },
    {
      number: '15.000+',
      label: 'Allievi formati',
      description: 'ogni anno in Piemonte'
    },
    {
      number: '100%',
      label: 'Bilateralità',
      description: 'imprese e lavoratori insieme'
    }
  ]

  return (
    <section className="stats-section">
      <div className="container">
        <div className="section-title">
          <h2>FORMEDIL Piemonte in numeri</h2>
          <p>L'impegno concreto per la formazione e la sicurezza nel settore delle costruzioni</p>
        </div>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`stat-card ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
