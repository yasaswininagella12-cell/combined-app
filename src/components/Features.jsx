import './Features.css'

const features = [
  {
    title: 'Fast',
    description: 'Built on Vite for instant hot reload and lightning-fast builds.',
  },
  {
    title: 'Responsive',
    description: 'Looks great on every device, from mobile to desktop.',
  },
  {
    title: 'Modern',
    description: 'Uses the latest React patterns and CSS best practices.',
  },
]

function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="features__heading">Features</h2>
        <div className="features__grid">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <h3 className="feature-card__title">{feature.title}</h3>
              <p className="feature-card__description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
