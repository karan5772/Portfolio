import { motion } from 'framer-motion'
import { data } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="sec px" style={{ background: '#FFFFFF' }}>
      <div className="wrap">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <h2 className="serif text-ink" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1 }}>
            Education
          </h2>
        </motion.div>

        <div>
          {data.education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-24px' }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              style={{
                display: 'grid',
                gridTemplateColumns: '130px 1fr',
                gap: '1.25rem 2.5rem',
                padding: '2.25rem 0',
                borderBottom: i < data.education.length - 1 ? '1px solid #EBEBEB' : 'none',
                alignItems: 'start',
              }}
            >
              <div style={{ paddingTop: '0.25rem' }}>
                <span className="tag">{edu.period}</span>
              </div>
              <div>
                <h3 className="serif text-ink" style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', lineHeight: 1.25, marginBottom: 6 }}>
                  {edu.degree}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#7A6E64', lineHeight: 1.5, marginBottom: edu.description ? '0.75rem' : 0 }}>
                  {edu.institution}
                </p>
                {edu.description && (
                  <p style={{ fontSize: '0.875rem', color: '#5E5248', lineHeight: 1.75 }}>
                    {edu.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
