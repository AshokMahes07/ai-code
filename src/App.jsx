const kpis = [
  { label: 'Total Employees', value: '482', trend: '+4.2%', note: 'vs last month' },
  { label: 'Active Projects', value: '36', trend: '+2', note: 'new launches' },
  { label: 'Payroll Run', value: '$1.82M', trend: '-1.6%', note: 'cost optimized' },
  { label: 'Compliance Score', value: '96%', trend: '+1.1%', note: 'stable' },
];

const quickActions = [
  { title: 'Add new hire', description: 'Start onboarding workflow' },
  { title: 'Run payroll', description: 'Schedule next cycle' },
  { title: 'Review approvals', description: '12 items pending' },
  { title: 'Download reports', description: 'Monthly summaries' },
];

const activity = [
  {
    title: 'Benefits enrollment closed',
    time: '2 hours ago',
    status: 'Completed',
  },
  {
    title: 'Vendor contract renewed',
    time: 'Yesterday',
    status: 'In review',
  },
  {
    title: 'Workforce planning session',
    time: 'Fri, 9:00 AM',
    status: 'Scheduled',
  },
];

const insights = [
  {
    title: 'Top departments',
    value: 'Operations · 38%',
    detail: 'Engineering · 27% | Sales · 18%',
  },
  {
    title: 'Open positions',
    value: '14 roles',
    detail: '4 senior, 6 mid, 4 junior',
  },
  {
    title: 'Retention risk',
    value: '3.8%',
    detail: 'Down from 4.5% last quarter',
  },
];

const compliance = [
  { name: 'ESI & PF', status: 'Up to date', level: 'ok' },
  { name: 'Tax filings', status: 'Due in 6 days', level: 'warn' },
  { name: 'License renewals', status: 'No issues', level: 'info' },
];

function App() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div>
          <p className="eyebrow">Workforce dashboard</p>
          <h1>Company overview</h1>
          <p className="subhead">
            All critical metrics are optimized for every screen size. No zooming required.
          </p>
        </div>
        <div className="header-actions">
          <div className="range-pill">
            <span>Jun 1 - Jun 30</span>
            <button className="ghost">Change</button>
          </div>
          <button className="primary">Export report</button>
        </div>
      </header>

      <section className="kpi-grid">
        {kpis.map((item) => (
          <article key={item.label} className="kpi-card">
            <div>
              <p>{item.label}</p>
              <h2>{item.value}</h2>
            </div>
            <div className="kpi-trend">
              <span>{item.trend}</span>
              <small>{item.note}</small>
            </div>
          </article>
        ))}
      </section>

      <section className="layout-grid">
        <div className="panel">
          <div className="panel-header">
            <h3>Key activity</h3>
            <button className="ghost">View all</button>
          </div>
          <div className="panel-body">
            {activity.map((item) => (
              <div key={item.title} className="activity-row">
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.time}</p>
                </div>
                <span className="status-chip">{item.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h3>Quick actions</h3>
            <button className="ghost">Customize</button>
          </div>
          <div className="quick-grid">
            {quickActions.map((action) => (
              <button key={action.title} className="quick-card">
                <h4>{action.title}</h4>
                <p>{action.description}</p>
              </button>
            ))}
          </div>
        </div>

        <div className="panel wide">
          <div className="panel-header">
            <h3>Insights snapshot</h3>
            <button className="ghost">Open analytics</button>
          </div>
          <div className="insight-grid">
            {insights.map((insight) => (
              <div key={insight.title} className="insight-card">
                <p>{insight.title}</p>
                <h4>{insight.value}</h4>
                <span>{insight.detail}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h3>Compliance</h3>
            <button className="ghost">See calendar</button>
          </div>
          <div className="compliance-list">
            {compliance.map((item) => (
              <div key={item.name} className="compliance-row">
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.status}</p>
                </div>
                <span className={`pill ${item.level}`}>{item.level}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <div className="panel-header">
            <h3>Budget health</h3>
            <button className="ghost">See details</button>
          </div>
          <div className="budget-grid">
            <div>
              <p>Allocated</p>
              <h4>$3.4M</h4>
              <span className="muted">FY 2024</span>
            </div>
            <div>
              <p>Utilized</p>
              <h4>$2.6M</h4>
              <span className="muted">76% used</span>
            </div>
            <div>
              <p>Forecast</p>
              <h4>$3.1M</h4>
              <span className="muted">On track</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
