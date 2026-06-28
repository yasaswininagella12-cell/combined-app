import { useState } from 'react'
import './FAQ.css'

const faqs = [
  { q: 'How do I get started?', a: 'Sign up for a free account and follow the onboarding guide.' },
  { q: 'Can I change my plan later?', a: 'Yes, you can upgrade or downgrade at any time from your dashboard.' },
  { q: 'Is there a free trial?', a: 'We offer a 14-day free trial on all plans with no credit card required.' },
  { q: 'What payment methods are accepted?', a: 'We accept all major credit cards, PayPal, and bank transfers.' },
]

function FAQ() {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section id="faq" className="faq">
      <div className="container">
        <h2 className="faq__heading">Frequently Asked Questions</h2>
        <p className="faq__subtitle">Everything you need to know.</p>

        <div className="faq__list">
          {faqs.map((item, i) => (
            <div key={i} className={`faq__item ${open === i ? 'faq__item--open' : ''}`}>
              <button className="faq__question" onClick={() => toggle(i)}>
                <span>{item.q}</span>
                <span className="faq__icon">{open === i ? '−' : '+'}</span>
              </button>
              <div className="faq__answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
