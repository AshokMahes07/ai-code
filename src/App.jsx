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

const misModules = [
  {
    title: 'Project',
    description: 'Track delivery health, milestones, and budget usage in real time.',
  },
  {
    title: 'Vendors',
    description: 'Centralize contracts, payment schedules, and compliance checks.',
  },
  {
    title: 'Clients',
    description: 'Monitor account performance, renewals, and satisfaction scores.',
  },
  {
    title: 'Earnings',
    description: 'View revenue trends with monthly and quarterly comparisons.',
  },
  {
    title: 'Employee Master',
    description: 'Manage onboarding, assignments, and contract status in one place.',
  },
  {
    title: 'ESIC',
    description: 'Automate submissions with alerts for upcoming deadlines.',
  },
  {
    title: 'EPF',
    description: 'Stay compliant with contribution tracking and audit logs.',
  },
  {
    title: 'License',
    description: 'Store license documents and renewal reminders securely.',
  },
  {
    title: 'Workmen',
    description: 'Monitor safety compliance, insurance, and statutory reporting.',
  },
];

const complianceStatuses = [
  { label: 'ESIC Filing', status: 'Submitted', tone: 'ok' },
  { label: 'EPF Review', status: 'Due in 5 days', tone: 'warn' },
  { label: 'License Renewal', status: 'Action required', tone: 'risk' },
  { label: 'Workmen Audit', status: 'In progress', tone: 'info' },
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

      <section className="mis-dashboard">
        <div className="mis-header">
          <div>
            <p className="mis-eyebrow">MIS Dashboard</p>
            <h2>Unified compliance and operations view.</h2>
            <p className="mis-subhead">
              Stay on top of projects, vendors, clients, earnings, and workforce compliance with a
              single consolidated workspace.
            </p>
          </div>
          <div className="mis-highlights">
            <span>Live updates</span>
            <span>Audit-ready</span>
            <span>Automated alerts</span>
          </div>
        </div>

        <div className="mis-panels">
          <article className="mis-panel">
            <h3>Business snapshot</h3>
            <div className="mis-metrics">
              <div>
                <p>Projects</p>
                <strong>24</strong>
              </div>
              <div>
                <p>Vendors</p>
                <strong>128</strong>
              </div>
              <div>
                <p>Clients</p>
                <strong>512</strong>
              </div>
              <div>
                <p>Earnings</p>
                <strong>$4.8M</strong>
              </div>
            </div>
          </article>

          <article className="mis-panel">
            <h3>Employee master</h3>
            <div className="mis-employee">
              <div>
                <p>Active employees</p>
                <strong>86</strong>
              </div>
              <div>
                <p>Open positions</p>
                <strong>6</strong>
              </div>
              <div>
                <p>Compliance-ready</p>
                <strong>92%</strong>
              </div>
            </div>
            <div className="mis-note">
              Onboarding workflows and contract renewals tracked automatically.
            </div>
          </article>

          <article className="mis-panel">
            <h3>Compliance tracker</h3>
            <div className="mis-compliance">
              {complianceStatuses.map((item) => (
                <div key={item.label} className="mis-compliance-row">
                  <span>{item.label}</span>
                  <span className={`mis-pill ${item.tone}`}>{item.status}</span>
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="mis-grid">
          {misModules.map((module) => (
            <article key={module.title} className="mis-card">
              <h4>{module.title}</h4>
              <p>{module.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
