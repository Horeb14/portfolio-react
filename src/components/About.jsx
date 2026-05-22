import './About.css'

export default function About() {
  return (
    <div id="about">
      <div className="sec-wrap">
        <div className="about-grid">
          <div>
            <div className="sec-label r">À propos</div>
            <h2 className="sec-title r d1">Passion.</h2>
            <p className="about-text r d2">
              Je suis <strong>KOUGBLENOU Horeb Sourou</strong>, étudiant en Informatique, passionné par le développement
              d'applications modernes et les interfaces bien pensées. Je travaille principalement avec React, Flutter et Figma
              pour concevoir des solutions web et mobiles à la fois performantes, intuitives et adaptées aux besoins réels.
              <br /><br />
              Au fil de mes projets, j'ai développé des plateformes web, des applications de gestion et des interfaces
              e-commerce en mettant l'accent sur l'expérience utilisateur, la logique métier et la qualité du design. Curieux
              et orienté progression, je cherche constamment à améliorer mes compétences en développement frontend, backend et
              conception UI/UX afin de créer des produits numériques complets et professionnels.
            </p>
            <div className="about-stats r d3">
              <div className="stat"><div className="stat-n">4+</div><div className="stat-l">Projets livrés</div></div>
              <div className="stat"><div className="stat-n">3</div><div className="stat-l">Années de formation</div></div>
              <div className="stat"><div className="stat-n">5+</div><div className="stat-l">Technologies</div></div>
              <div className="stat"><div className="stat-n">1</div><div className="stat-l">Partenariat réel</div></div>
            </div>
          </div>
          <div className="about-visual r d2">
            <img src="/photos/photo_portfolio_2.png" alt="KOUGBLENOU Horeb Sourou" className="about-photo" />
          </div>
        </div>
      </div>
    </div>
  )
}
