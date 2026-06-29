import { useState } from 'react'
import './Newsletter.css'

function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setStatus('success')
    setEmail('')
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section id="newsletter" className="newsletter">
      <div className="container newsletter__inner">
        <div className="newsletter__content">
          <h2 className="newsletter__heading">Stay in the Loop</h2>
          <p className="newsletter__subtitle">
            Get the latest updates, tips, and exclusive offers delivered to your inbox.
          </p>
          <form className="newsletter__form" onSubmit={handleSubmit}>
            <div className="newsletter__field">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="newsletter__input"
              />
              <button type="submit" className="newsletter__btn">
                Subscribe
              </button>
            </div>
            {status === 'success' && (
              <p className="newsletter__success">Thanks for subscribing!</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
