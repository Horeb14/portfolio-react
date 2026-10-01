import './CV.css'

export default function CV() {
  return (
    <div id="cv" className="cv-section">
      <div className="sec-wrap">
        <div className="cv-wrap">
          <div className="cv-left">
            <div className="sec-label r">Curriculum Vitae</div>
            <h2 className="sec-title r d1">Mon parcours en un coup d'œil.</h2>
            <p className="cv-desc r d2">
              Développeur sérieux, curieux et autonome. Je combine formation académique solide et projets concrets pour bâtir mon profil de développeur.
            </p>
          </div>
          <div className="cv-right r d1">
            <div className="cv-doc-preview">
              <a
                href="/CV_Horeb_Sourou_KOUGBLENOU.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cv-doc-badge-big"
              >
                ↓ Voir mon CV
              </a>
              <div className="cv-doc-header">
                <div className="cv-doc-avatar">HKS</div>
                <div>
                  <div className="cv-doc-name">KOUGBLENOU Horeb Sourou</div>
                  <div className="cv-doc-role">Développeur Web · Diplômé IUT Parakou</div>
                </div>
              </div>
              <div className="cv-doc-infos">
                <div className="cv-doc-info-row">
                  <span className="cv-info-label">🎓 Diplôme</span>
                  <span className="cv-info-val">Licence Professionnelle Informatique de Gestion · IUT Parakou, mention très bien</span>
                </div>
                <div className="cv-doc-info-row">
                  <span className="cv-info-label">🟢 Dispo</span>
                  <span className="cv-info-val">Disponible · Cotonou, Bénin</span>
                </div>
              </div>
              <div className="cv-doc-footer">
                <span>📧 kougblenouhoreb2@gmail.com</span>
                <span>📍 Cotonou, Bénin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
