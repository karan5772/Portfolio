import { data } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="sec px">
      <div className="wrap">
        <h2 className="h2" style={{ marginBottom: '2.5rem' }}>Experience</h2>

        <div className="row-list">
          {data.experience.map(item => (
            <div key={item.company} className="row">
              <p className="row-meta">{item.period}</p>
              <div>
                <h3 className="h3">{item.position}</h3>
                <p style={{ fontWeight: 600, color: item.type === 'ambassador' ? 'var(--amber)' : 'var(--sage)', marginBottom: '0.6rem' }}>
                  {item.company}
                </p>
                <p className="text measure">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
