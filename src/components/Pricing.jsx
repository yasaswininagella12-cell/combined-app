import './Pricing.css'

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    perks: ['1 project', '5 team members', '10GB storage', 'Community support'],
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/mo',
    featured: true,
    perks: ['Unlimited projects', '50 team members', '100GB storage', 'Priority support', 'Analytics'],
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: '/mo',
    perks: ['Unlimited everything', '1TB storage', 'Dedicated support', 'Custom integrations', 'SLA'],
  },
]

function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2 className="pricing__heading">Simple Pricing</h2>
        <p className="pricing__subtitle">Choose the plan that fits your needs.</p>
        <div className="pricing__grid">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing__card${plan.featured ? ' pricing__card--featured' : ''}`}
            >
              {plan.featured && <span className="pricing__badge">Popular</span>}
              <h3 className="pricing__name">{plan.name}</h3>
              <p className="pricing__price">
                <span className="pricing__amount">{plan.price}</span>
                {plan.period && <span className="pricing__period">{plan.period}</span>}
              </p>
              <ul className="pricing__perks">
                {plan.perks.map((perk) => (
                  <li key={perk} className="pricing__perk">{perk}</li>
                ))}
              </ul>
              <button className={`pricing__btn${plan.featured ? ' pricing__btn--primary' : ''}`}>
                {plan.price === 'Free' ? 'Get Started' : 'Subscribe'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
