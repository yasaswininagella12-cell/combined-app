import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: '' }))
    }
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.email.trim()) errs.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Invalid email format'
    if (!form.message.trim()) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact" className="contact">
        <div className="container contact__inner">
          <div className="contact__success">
            <span className="contact__success-icon">✓</span>
            <h2 className="contact__heading">Message Sent!</h2>
            <p className="contact__subtitle">
              Thanks for reaching out. We&apos;ll get back to you within 24 hours.
            </p>
            <button className="contact__btn" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}>
              Send Another
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <div className="contact__header">
          <span className="contact__badge">Contact</span>
          <h2 className="contact__heading">Get in Touch</h2>
          <p className="contact__subtitle">Have a question or want to work together? Drop us a message.</p>
        </div>
        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? 'contact__input--error' : ''}
            />
            {errors.name && <span className="contact__error">{errors.name}</span>}
          </div>
          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? 'contact__input--error' : ''}
            />
            {errors.email && <span className="contact__error">{errors.email}</span>}
          </div>
          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us what's on your mind..."
              value={form.message}
              onChange={handleChange}
              className={errors.message ? 'contact__input--error' : ''}
            />
            {errors.message && <span className="contact__error">{errors.message}</span>}
          </div>
          <button type="submit" className="contact__btn">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
