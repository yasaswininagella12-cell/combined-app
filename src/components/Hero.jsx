import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        <h1 className="hero__title">Build Something Great</h1>
        <p className="hero__subtitle">
          A clean, modern landing page template built with React and Vite.
        </p>
        <div className="hero__actions">
          <a href="#features" className="hero__btn hero__btn--primary">
            Get Started
          </a>
          <a href="#contact" className="hero__btn hero__btn--secondary">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
