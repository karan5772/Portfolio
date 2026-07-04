import { motion } from 'framer-motion'
import { data } from '../data/portfolio'

const orgColors = {
  'AWS':               '#FF9900',
  'Deloitte':          '#86BC25',
  'HackerRank':        '#2EC866',
  'Udemy / Hitesh Choudhary': '#A435F0',
  'ChaiCode':          '#F97316',
}

export default function Achievements() {
  return (
    <section id="achievements" className="sec px" style={{ background: '#FFFFFF' }}>
      <div className="wrap">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: '3rem' }}
        >
          <h2 className="serif text-ink" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1 }}>
            Certifications
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))', gap: '1rem' }}>
          {data.achievements.map((item, i) => {
            const color = orgColors[item.org] || '#8A7B6C'
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-16px' }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                style={{
                  background: '#FAFAFA', border: '1px solid #EBEBEB',
                  borderRadius: 14, padding: '1.4rem 1.6rem',
                  transition: 'border-color 0.18s, box-shadow 0.18s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = color + '44'; e.currentTarget.style.boxShadow = `0 4px 20px ${color}18`; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#EBEBEB'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                  <span
                    style={{
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.72rem', fontWeight: 700,
                      color, letterSpacing: '0.04em',
                      background: color + '18',
                      padding: '2px 10px', borderRadius: 5,
                    }}
                  >
                    {item.org}
                  </span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.68rem', color: '#A8998A' }}>
                    {item.year}
                  </span>
                </div>
                <p style={{ fontSize: '0.92rem', fontWeight: 600, color: '#1A1410', lineHeight: 1.45 }}>
                  {item.title}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
