import { useState } from 'react'
import './Contact.css'

const CHIPS = ['Application web', 'App mobile', 'Site vitrine', 'Design UI/UX', 'Autre']

const EmailIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <rect x="2" y="4" width="20" height="16" rx="3" /><path d="m2 7 10 7 10-7" />
  </svg>
)
const GitHubIcon = () => (
  <svg viewBox="0 0 120.78 117.79">
    <path fill="currentColor" d="M60.39 0A60.39 60.39 0 0 0 41.3 117.69c3 .56 4.12-1.31 4.12-2.91 0-1.44-.05-6.19-.08-11.24C28.54 107.19 25 96.42 25 96.42c-2.75-7-6.71-8.84-6.71-8.84-5.48-3.75.41-3.67.41-3.67 6.07.43 9.26 6.22 9.26 6.22 5.39 9.23 14.13 6.57 17.57 5 .55-3.9 2.11-6.56 3.84-8.07C36 85.55 21.85 80.37 21.85 57.23A23.35 23.35 0 0 1 28.08 41c-.63-1.52-2.7-7.66.58-16 0 0 5.07-1.62 16.61 6.19a57.36 57.36 0 0 1 30.25 0C87 23.42 92.11 25 92.11 25c3.28 8.32 1.22 14.46.59 16a23.34 23.34 0 0 1 6.21 16.21c0 23.2-14.12 28.3-27.57 29.8 2.16 1.87 4.09 5.55 4.09 11.18 0 8.08-.06 14.59-.06 16.57 0 1.61 1.08 3.49 4.14 2.9A60.39 60.39 0 0 0 60.39 0Z" />
  </svg>
)
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

export default function Contact() {
  const [activeChip, setActiveChip] = useState('Application web')
  const [btnText, setBtnText] = useState('Envoyer le message ↗')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('https://formspree.io/f/xredkdvb', {
      method: 'POST',
      body: new FormData(e.target),
      headers: { 'Accept': 'application/json' }
    })
    if (response.ok) {
      setBtnText('Envoyé ✓')
      setTimeout(() => { setBtnText('Envoyer le message ↗'); e.target.reset(); setActiveChip('Application web') }, 3000)
    }
  }

  return (
    <div className="contact-dark" id="contact">
      <div className="contact-wrap">
        <div>
          <div className="sec-label r" style={{ color: '#a78bfa' }}>Contact</div>
          <h2 className="sec-title r d1" style={{ color: '#fff' }}>Travaillons ensemble.</h2>
          <p className="r d2" style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', lineHeight: '1.7', maxWidth: '360px', marginBottom: '28px' }}>
            Vous avez un projet, une idée ou une mission freelance ? Je réponds sous 24h.
          </p>
          <div className="social-icons r d3">
            <a href="mailto:kougblenouhoreb2@gmail.com" className="soc-btn" title="Email"><EmailIcon /></a>
            <a href="https://github.com/Horeb14" target="_blank" rel="noopener noreferrer" className="soc-btn" title="GitHub"><GitHubIcon /></a>
            <a href="https://wa.me/22959055088" target="_blank" rel="noopener noreferrer" className="soc-btn" title="WhatsApp"><WhatsAppIcon /></a>
          </div>
        </div>

        <div className="form-card r d1">
          <h3>Envoyez-moi un message.</h3>
          <p>Décrivez votre projet.</p>
          <form onSubmit={handleSubmit}>
            <div className="fg">
              <label>Votre nom</label>
              <input type="text" name="nom" placeholder="Prénom & Nom" required />
            </div>
            <div className="fg">
              <label>Votre email</label>
              <input type="email" name="email" placeholder="vous@exemple.com" required />
            </div>
            <div className="fg">
              <label>Type de projet</label>
              <input type="hidden" name="type_projet" value={activeChip} />
              <div className="chips">
                {CHIPS.map(c => (
                  <span
                    key={c}
                    className={`chip${activeChip === c ? ' on' : ''}`}
                    onClick={() => setActiveChip(c)}
                  >{c}</span>
                ))}
              </div>
            </div>
            <div className="fg">
              <label>Message</label>
              <textarea name="message" placeholder="Décrivez votre projet ou votre besoin en quelques lignes." required></textarea>
            </div>
            <button type="submit" className="form-btn">{btnText}</button>
          </form>
        </div>
      </div>
    </div>
  )
}
