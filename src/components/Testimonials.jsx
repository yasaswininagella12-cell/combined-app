import { useState, useEffect } from 'react'
import './Testimonials.css'

const API = 'https://jsonplaceholder.typicode.com/comments?_limit=8'

function Testimonials() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await fetch(API)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        setReviews(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchReviews()
  }, [])

  const next = () => setIndex((i) => (i + 1) % reviews.length)
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length)

  if (loading) {
    return (
      <section id="testimonials" className="testimonials">
        <div className="container testimonials__inner">
          <div className="testimonials__status">
            <div className="spinner" />
            <p>Loading testimonials...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section id="testimonials" className="testimonials">
        <div className="container testimonials__inner">
          <div className="testimonials__status testimonials__status--error">
            <p>Failed to load: {error}</p>
          </div>
        </div>
      </section>
    )
  }

  const r = reviews[index]

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <span className="testimonials__badge">Testimonials</span>
          <h2 className="testimonials__heading">What People Say</h2>
          <p className="testimonials__subtitle">Real feedback from our community.</p>
        </div>

        <div className="testimonials__carousel">
          <button className="testimonials__arrow testimonials__arrow--left" onClick={prev} aria-label="Previous">
            ‹
          </button>

          <div className="testimonials__card" key={r.id}>
            <div className="testimonials__quote">"</div>
            <p className="testimonials__text">{r.body}</p>
            <div className="testimonials__author">
              <div className="testimonials__avatar">
                {r.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="testimonials__name">{r.name}</p>
                <p className="testimonials__email">{r.email}</p>
              </div>
            </div>
          </div>

          <button className="testimonials__arrow testimonials__arrow--right" onClick={next} aria-label="Next">
            ›
          </button>
        </div>

        <div className="testimonials__dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`testimonials__dot ${i === index ? 'testimonials__dot--active' : ''}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
