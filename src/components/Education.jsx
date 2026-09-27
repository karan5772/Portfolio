import { data } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="sec px">
      <div className="wrap">
        <h2 className="h2" style={{ marginBottom: '2.5rem' }}>Education</h2>

        <div className="row-list">
          {data.education.map(edu => (
            <div key={edu.institution} className="row">
              <p className="row-meta">{edu.period}</p>
              <div>
                <h3 className="h3">{edu.degree}</h3>
                <p className="muted" style={{ marginBottom: edu.description ? '0.6rem' : 0 }}>{edu.institution}</p>
                {edu.description && <p className="text measure">{edu.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
