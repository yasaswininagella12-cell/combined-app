import { useState, useEffect } from 'react'
import './Hero.css'

const words = ['Fast.', 'Secure.', 'Scalable.', 'Modern.']

function Hero() {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex]
    let timeout

    if (!deleting) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => setDeleting(true), 1500)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 40)
      } else {
        setDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, wordIndex])

  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        <h1 className="hero__title">
          Build Something{' '}
          <span className="hero__typing">
            {displayed}
            <span className="hero__cursor">|</span>
          </span>
        </h1>
        <p className="hero__subtitle">
          A clean, modern landing page template built with React and Vite.
          Launch your next project in minutes.
        </p>
        <div className="hero__actions">
          <a href="#features" className="hero__btn hero__btn--primary">
            Get Started
          </a>
          <a href="#contact" className="hero__btn hero__btn--secondary">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
