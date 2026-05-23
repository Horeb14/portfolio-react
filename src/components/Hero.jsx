import { useEffect } from 'react'
import './Hero.css'

export default function Hero() {
  useEffect(() => {
    const text = "Développeur Web & Mobile passionné, spécialisé dans la création d'applications modernes, performantes et centrées sur l'utilisateur. J'allie design UI/UX pour transformer des idées en expériences numériques concrètes."
    const para = document.getElementById('heroPara')
    if (!para) return
    para.innerHTML = text.split(' ').map(w => '<span class="word">' + w + '</span> ').join('')
    const spans = para.querySelectorAll('.word')
    const animWords = (i = 0) => {
      if (i < spans.length) { spans[i].classList.add('visible'); setTimeout(() => animWords(i + 1), 35) }
    }
    setTimeout(animWords, 2400)
  }, [])

  useEffect(() => {
    const ga = document.querySelector('.glow-a')
    const gb = document.querySelector('.glow-b')
    const handleMouse = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5)
      const y = (e.clientY / window.innerHeight - 0.5)
      if (ga) ga.style.transform = 'translate(' + (x * 20) + 'px,' + (y * 20) + 'px)'
      if (gb) gb.style.transform = 'translate(' + (x * -14) + 'px,' + (y * -14) + 'px)'
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  return (
    <div className="hero" id="home">
      <div className="hero-dotgrid"></div>
      <div className="glow-a"></div>
      <div className="glow-b"></div>
      <div className="hero-inner">
        <div className="hero-text">
          <svg id="welcome-svg" viewBox="0 0 720 130" xmlns="http://www.w3.org/2000/svg" aria-label="Welcome.">
            <text className="svg-letter do-fill"
              x="0" y="105"
              fontFamily="Space Grotesk, system-ui, sans-serif"
              fontWeight="800" fontSize="78" letterSpacing="-2"
            >Welcome.</text>
          </svg>
          <p className="hero-para" id="heroPara"></p>
          <div className="hero-btns">
            <a href="#projects" className="btn-main">Voir mes projets ↓</a>
            <a href="#contact" className="btn-ghost">Me contacter</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-photo-wrap">
            <img src="/photos/photo_portfolio_1.jpg" alt="KOUGBLENOU Horeb Sourou" className="hero-photo" />
          </div>
        </div>
      </div>
    </div>
  )
}
