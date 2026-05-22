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
              Étudiant sérieux, curieux et autonome. Je combine formation académique solide et projets concrets pour bâtir mon profil de développeur.
            </p>
          </div>
          <div className="cv-right r d1">
            <div className="cv-doc-preview">
              <a
                href="https://drive.google.com/file/d/19INVMDnHelAlsTUBnskajKuG5ZYRF_yv/view"
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
                  <div className="cv-doc-role">Développeur Web · Étudiant IUT Parakou</div>
                </div>
              </div>
              <div className="cv-doc-infos">
                <div className="cv-doc-info-row">
                  <span className="cv-info-label">🎓 Formation</span>
                  <span className="cv-info-val">Licence en Informatique de Gestion · IUT Parakou</span>
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
