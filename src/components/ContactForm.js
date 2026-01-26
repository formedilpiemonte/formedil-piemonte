// src/components/ContactForm.js
'use client'
import { useState } from 'react'
import './ContactForm.css'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    oggetto: '',
    messaggio: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Qui andrà la logica di invio
    console.log('Form data:', formData)
    setSubmitted(true)
    
    // Reset dopo 3 secondi
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        nome: '',
        email: '',
        telefono: '',
        oggetto: '',
        messaggio: ''
      })
    }, 3000)
  }

  return (
    <div className="contact-form-container">
      {submitted ? (
        <div className="success-message">
          <div className="success-icon">✓</div>
          <h3>Messaggio inviato con successo!</h3>
          <p>Ti risponderemo il prima possibile.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="nome">Nome e Cognome *</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="telefono">Telefono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="oggetto">Oggetto *</label>
              <input
                type="text"
                id="oggetto"
                name="oggetto"
                value={formData.oggetto}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="messaggio">Messaggio *</label>
            <textarea
              id="messaggio"
              name="messaggio"
              rows="6"
              value={formData.messaggio}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Invia Messaggio
          </button>
        </form>
      )}
    </div>
  )
}
