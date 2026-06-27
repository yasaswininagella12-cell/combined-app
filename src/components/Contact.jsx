import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <section id="contact" className="contact">
        <div className="container contact__inner">
          <h2 className="contact__heading">Thank You!</h2>
          <p className="contact__subtitle">
            We&apos;ll get back to you soon.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <h2 className="contact__heading">Get in Touch</h2>
        <p className="contact__subtitle">Have a question? Drop us a message.</p>
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="contact__btn">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
