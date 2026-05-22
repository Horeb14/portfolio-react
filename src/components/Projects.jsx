import './Projects.css'

const PROJECTS = [
  {
    id: 1,
    title: 'Élécho',
    img: '/photos/elecho.png',
    tags: ['JavaScript', 'CSS'],
    url: 'https://elecho-site.vercel.app/',
    desc: 'Site vitrine pour un restaurant à Comé, conçu en vanilla JS avec un focus sur le design et l\'expérience utilisateur.',
    featured: true,
  },
  {
    id: 2,
    title: 'Clarisse Boutique',
    img: '/photos/clarisse.png',
    tags: ['HTML', 'CSS', 'WordPress'],
    url: 'https://clarisse-boutique.vercel.app/',
    desc: 'Boutique e-commerce complète en collaboration.',
    featured: false,
  },
  {
    id: 3,
    title: 'Todo App',
    img: '/photos/todo.png',
    tags: ['JavaScript', 'CSS'],
    url: 'https://todo-app-theta-ruddy-61.vercel.app/',
    desc: 'Application de gestion de tâches simple et efficace, avec ajout, suppression et marquage des tâches terminées.',
    featured: false,
  },
  {
    id: 4,
    title: 'SmartBudget',
    img: '/photos/smartbudget.png',
    tags: ['JavaScript', 'LocalStorage'],
    url: 'https://smartbudget-seven.vercel.app/',
    desc: 'Application de suivi budgétaire personnel avec stockage local, permettant de gérer revenus et dépenses facilement.',
    featured: false,
  },
  {
    id: 5,
    title: 'Geco',
    img: '/photos/geco.png',
    tags: ['React', 'Django', 'JavaScript'],
    url: 'https://geco-five.vercel.app/',
    desc: 'Application de gestion commerciale développée avec React en frontend et Django en backend, permettant de gérer produits, clients et transactions.',
    featured: false,
  },
]

export default function Projects() {
  return (
    <div id="projects" style={{ background: '#fafafa', borderTop: '1px solid #f0f0f0' }}>
      <div className="sec-wrap">
        <div className="sec-label r">Projets</div>
        <h2 className="sec-title r d1">Ce que j'ai construit.</h2>
        <p className="sec-sub r d2">Projets académiques et personnels qui illustrent ma progression.</p>
        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <div key={p.id} className={`proj-card r${p.featured ? ' featured' : ''}${i > 0 ? ' d' + Math.min(i, 3) : ''}`}>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="proj-thumb">
                <img src={p.img} alt={p.title} />
              </a>
              <div className="proj-body">
                <div className="proj-tags">
                  {p.tags.map(t => <span key={t} className="proj-tag">{t}</span>)}
                </div>
                <div className="proj-title">{p.title}</div>
                <div className="proj-desc">{p.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
