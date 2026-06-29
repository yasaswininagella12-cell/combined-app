import './Features.css'

const services = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Optimized performance with sub-second load times and efficient caching strategies.',
    tags: ['Performance', 'Optimization'],
  },
  {
    icon: '🔒',
    title: 'Secure by Default',
    description: 'Enterprise-grade security with end-to-end encryption and regular audits.',
    tags: ['Security', 'Encryption'],
  },
  {
    icon: '📊',
    title: 'Advanced Analytics',
    description: 'Real-time insights with customizable dashboards and detailed reporting.',
    tags: ['Analytics', 'Reports'],
  },
  {
    icon: '☁️',
    title: 'Cloud Native',
    description: 'Scalable infrastructure that grows with your business, available globally.',
    tags: ['Cloud', 'Scalability'],
  },
  {
    icon: '🔌',
    title: 'API First',
    description: 'Rich REST & GraphQL APIs for seamless integration with your existing tools.',
    tags: ['API', 'Integration'],
  },
  {
    icon: '🎨',
    title: 'Customizable UI',
    description: 'Flexible theming and component library to match your brand perfectly.',
    tags: ['UI/UX', 'Theming'],
  },
]

function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="features__header">
          <span className="features__badge">What We Offer</span>
          <h2 className="features__heading">Everything You Need</h2>
          <p className="features__subtitle">
            A complete suite of tools to build, launch, and scale your product.
          </p>
        </div>

        <div className="features__grid">
          {services.map((s) => (
            <div key={s.title} className="feature-card">
              <span className="feature-card__icon">{s.icon}</span>
              <h3 className="feature-card__title">{s.title}</h3>
              <p className="feature-card__desc">{s.description}</p>
              <div className="feature-card__tags">
                {s.tags.map((t) => (
                  <span key={t} className="feature-card__tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
