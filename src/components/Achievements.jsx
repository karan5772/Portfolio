import { data } from '../data/portfolio'

export default function Achievements() {
  return (
    <section id="achievements" className="sec px">
      <div className="wrap">
        <h2 className="h2" style={{ marginBottom: '2rem' }}>Certifications</h2>

        <ul className="cert-list" style={{ listStyle: 'none' }}>
          {data.achievements.map(item => (
            <li key={item.title}>
              <div>
                <p style={{ fontWeight: 600, color: 'var(--ink)', lineHeight: 1.45 }}>{item.title}</p>
                <p className="muted small">{item.org}</p>
              </div>
              <span className="row-meta">{item.year}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
