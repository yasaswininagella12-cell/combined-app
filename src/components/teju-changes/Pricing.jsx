import { useState } from 'react'
import './Pricing.css'

const plans = [
  {
    name: 'Starter',
    price: 9,
    features: ['1 project', '5 GB storage', 'Basic support', 'Community access'],
  },
  {
    name: 'Pro',
    price: 29,
    features: ['10 projects', '50 GB storage', 'Priority support', 'Team dashboard'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 99,
    features: ['Unlimited projects', '500 GB storage', '24/7 support', 'Custom integrations'],
  },
]

function Pricing() {
  const [billing, setBilling] = useState('monthly')

  const multiplier = billing === 'annual' ? 10 : 1

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2 className="pricing__heading">Pricing</h2>
        <p className="pricing__subtitle">Choose the plan that fits your needs.</p>

        <div className="pricing__toggle">
          <button
            className={`pricing__toggle-btn ${billing === 'monthly' ? 'pricing__toggle-btn--active' : ''}`}
            onClick={() => setBilling('monthly')}
          >
            Monthly
          </button>
          <button
            className={`pricing__toggle-btn ${billing === 'annual' ? 'pricing__toggle-btn--active' : ''}`}
            onClick={() => setBilling('annual')}
          >
            Annual
          </button>
        </div>

        <div className="pricing__grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing__card ${plan.popular ? 'pricing__card--popular' : ''}`}
            >
              {plan.popular && <span className="pricing__badge">Most Popular</span>}
              <h3 className="pricing__card-name">{plan.name}</h3>
              <p className="pricing__price">
                <span className="pricing__amount">${plan.price * multiplier}</span>
                <span className="pricing__period">/{billing === 'annual' ? 'yr' : 'mo'}</span>
              </p>
              <ul className="pricing__features">
                {plan.features.map((f) => (
                  <li key={f} className="pricing__feature">{f}</li>
                ))}
              </ul>
              <button className="pricing__btn">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
