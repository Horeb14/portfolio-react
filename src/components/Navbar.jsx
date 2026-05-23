import { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMob = () => setMenuOpen(false)

  return (
    <>
      <nav id="nav">
        <div className="nav-logo"></div>
        <div className="nav-pill">
          <a href="#about">À propos</a>
          <a href="#projects">Projets</a>
          <a href="#cv">CV</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-status">
          <div className="status-badge">
            <span className="pulse"></span> Disponible · Cotonou
          </div>
        </div>
        <button className="ham" onClick={() => setMenuOpen(true)} aria-label="Ouvrir le menu">
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mob-menu${menuOpen ? ' open' : ''}`}>
        <button className="mob-close" onClick={closeMob}>✕</button>
        <a href="#about" onClick={closeMob}>À propos</a>
        <a href="#projects" onClick={closeMob}>Projets</a>
        <a href="#cv" onClick={closeMob}>CV</a>
        <a href="#contact" onClick={closeMob}>Contact</a>
      </div>
    </>
  )
}
