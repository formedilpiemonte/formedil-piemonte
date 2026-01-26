// src/components/Navbar.js
'use client'
import { useState } from 'react'
import Link from 'next/link'
import './Navbar.css'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const menuItems = [
    {
      title: 'FORMEDIL',
      items: [
        { label: 'Chi siamo', href: '/chi-siamo' },
        { label: 'Statuto', href: '/statuto' },
        { label: 'Organismi', href: '/organismi' },
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Modello organizzativo', href: '/modello-organizzativo' },
        { label: 'Politica qualità', href: '/politica-qualita' },
      ]
    },
    {
      title: 'SISTEMA FORMEDIL',
      items: [
        { label: 'Enti territoriali', href: '/enti-territoriali' },
        { label: 'Formedil regionali', href: '/formedil-regionali' },
      ]
    },
    {
      title: 'ATTIVITÀ E SERVIZI',
      items: [
        { label: 'Formazione', href: '/formazione' },
        { label: 'Sicurezza', href: '/sicurezza' },
        { label: 'Imprese', href: '/imprese' },
        { label: 'Giovani e Orientamento', href: '/giovani' },
        { label: 'Scuole Edili', href: '/scuole-edili' },
      ]
    },
    {
      title: 'CATALOGO FORMATIVO',
      items: [
        { label: 'Corsi', href: '/corsi' },
        { label: 'Agenda', href: '/agenda' },
      ]
    },
    {
      title: 'PROGETTI',
      items: [
        { label: 'Progetti', href: '/progetti' },
      ]
    },
    {
      title: 'NOTIZIE',
      items: [
        { label: 'Tutte le notizie', href: '/notizie' },
      ]
    },
  ]

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    setActiveDropdown(null)
  }

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="navbar-logo">
          <div className="logo-text">
            <span className="logo-formedil">FORMEDIL</span>
            <span className="logo-piemonte">PIEMONTE</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="navbar-menu desktop-menu">
          {menuItems.map((menu, index) => (
            <li 
              key={index} 
              className="navbar-item"
              onMouseEnter={() => setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="navbar-link">
                {menu.title}
                <span className="dropdown-arrow">▼</span>
              </button>
              {activeDropdown === index && (
                <div className="dropdown-menu">
                  {menu.items.map((item, idx) => (
                    <Link 
                      key={idx} 
                      href={item.href} 
                      className="dropdown-item"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right side actions */}
        <div className="navbar-actions">
          <Link href="/contatti" className="btn-contatti">
            Contatti
          </Link>
          <button className="search-btn" aria-label="Cerca">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          {menuItems.map((menu, index) => (
            <div key={index} className="mobile-menu-section">
              <button 
                className="mobile-menu-title"
                onClick={() => toggleDropdown(index)}
              >
                {menu.title}
                <span className={`arrow ${activeDropdown === index ? 'open' : ''}`}>
                  ▼
                </span>
              </button>
              {activeDropdown === index && (
                <div className="mobile-submenu">
                  {menu.items.map((item, idx) => (
                    <Link 
                      key={idx} 
                      href={item.href} 
                      className="mobile-submenu-item"
                      onClick={toggleMobileMenu}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link 
            href="/contatti" 
            className="mobile-menu-contact"
            onClick={toggleMobileMenu}
          >
            Contatti
          </Link>
        </div>
      )}
    </nav>
  )
}
