import { motion } from 'framer-motion'
import { data } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="sec px" style={{ background: '#FFFFFF' }}>
      <div className="wrap">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <h2 className="serif text-ink" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1 }}>
            Experience
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {data.experience.map((item, i) => (
            <motion.div
              key={i}
              className={`exp-card${item.type === 'ambassador' ? ' ambassador' : ''}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.85rem' }}>
                <span className={item.type === 'ambassador' ? 'tag tag-amber' : 'tag'}>
                  {item.type === 'ambassador' ? 'Ambassador' : 'Internship'}
                </span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: '#8A7B6C' }}>
                  {item.period}
                </span>
              </div>
              <h3 className="serif text-ink" style={{ fontSize: '1.35rem', lineHeight: 1.2, marginBottom: 5 }}>{item.position}</h3>
              <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.875rem', fontWeight: 600, color: item.type === 'ambassador' ? '#C87533' : '#2A6049', marginBottom: '0.75rem' }}>
                {item.company}
              </p>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.78, color: '#5E5048' }}>{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
