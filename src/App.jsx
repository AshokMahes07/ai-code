const plans = [
  {
    name: 'Starter',
    price: '$19',
    description: 'For early-stage teams validating ideas.',
    features: [
      'Up to 3 projects',
      'Unlimited viewers',
      'Basic analytics',
      'Community support',
    ],
    cta: 'Start free trial',
  },
  {
    name: 'Growth',
    price: '$49',
    description: 'For scaling teams that need deeper insights.',
    features: [
      'Unlimited projects',
      'Advanced analytics',
      'Custom dashboards',
      'Priority chat support',
    ],
    cta: 'Upgrade to Growth',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large organizations with bespoke needs.',
    features: [
      'Dedicated success manager',
      'SSO & advanced security',
      'SLA-backed uptime',
      'Custom onboarding',
    ],
    cta: 'Talk to sales',
  },
];

const faqs = [
  {
    question: 'Can I switch plans later?',
    answer:
      'Absolutely. Upgrade or downgrade at any time and only pay the prorated difference.',
  },
  {
    question: 'Do you offer discounts for nonprofits?',
    answer:
      'Yes, we offer 30% off for verified nonprofits. Reach out to our support team for details.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, ACH transfers for annual plans, and invoicing for enterprise.',
  },
];

function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero-content">
          <p className="eyebrow">Pricing</p>
          <h1>Flexible plans that grow with your team.</h1>
          <p className="subhead">
            Choose a plan that fits your stage. Upgrade when you need more power, and cancel anytime.
          </p>
        </div>
        <div className="hero-card">
          <p className="hero-card-title">All plans include</p>
          <ul>
            <li>99.9% uptime guarantee</li>
            <li>GDPR & SOC 2 compliance</li>
            <li>24/7 monitoring</li>
          </ul>
          <button className="ghost">Compare all features</button>
        </div>
      </header>

      <section className="pricing-grid">
        {plans.map((plan) => (
          <article
            key={plan.name}
            className={`plan-card${plan.highlight ? ' highlight' : ''}`}
          >
            {plan.highlight && <span className="badge">Most popular</span>}
            <h2>{plan.name}</h2>
            <p className="plan-description">{plan.description}</p>
            <div className="price">
              <span>{plan.price}</span>
              {plan.price !== 'Custom' && <span className="price-unit">/month</span>}
            </div>
            <ul className="features">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <button className={plan.highlight ? 'primary' : 'secondary'}>{plan.cta}</button>
          </article>
        ))}
      </section>

      <section className="faq">
        <div className="faq-header">
          <h2>Pricing FAQs</h2>
          <p>Still have questions? We are here to help.</p>
        </div>
        <div className="faq-grid">
          {faqs.map((item) => (
            <div key={item.question} className="faq-item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <div>
          <h2>Ready to get started?</h2>
          <p>Launch your next project today with a 14-day free trial.</p>
        </div>
        <div className="cta-actions">
          <button className="primary">Start free trial</button>
          <button className="secondary">Book a demo</button>
        </div>
      </section>
    </div>
  );
}

export default App;
