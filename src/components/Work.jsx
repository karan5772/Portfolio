import { motion } from 'framer-motion'
import { BrandSvg } from '../lib/brandIcons'
import { siGithub } from 'simple-icons'
import { data } from '../data/portfolio'

export default function Work() {
  return (
    <section id="projects" className="sec px" style={{ background: '#FFFFFF' }}>
      <div className="wrap">

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '2.5rem' }}
        >
          <h2 className="serif text-ink" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1 }}>
            Selected Work
          </h2>
        </motion.div>

        <div>
          {data.projects.map((p, i) => (
            <motion.div
              key={p.title}
              className="proj-alt-row"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-48px' }}
              transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Image — alternates side */}
              <div
                className="proj-alt-img"
                style={{ order: i % 2 === 0 ? 0 : 1 }}
              >
                <img src={p.image} alt={p.title} draggable={false} />
              </div>

              {/* Text */}
              <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: '#B8B0A8', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="serif text-ink" style={{ fontSize: 'clamp(1.35rem, 2.5vw, 2rem)', lineHeight: 1.15, marginBottom: '0.75rem' }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: '#6B5E52', marginBottom: '1rem' }}>
                  {p.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: '1.25rem' }}>
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
                {p.repoUrl && (
                  <a
                    href={p.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 7,
                      fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.82rem', fontWeight: 600,
                      color: '#2A6049', textDecoration: 'none',
                      borderBottom: '1px solid rgba(42,96,73,0.25)',
                      paddingBottom: '1px', transition: 'border-color 0.18s, color 0.18s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderBottomColor = '#2A6049'; }}
                    onMouseLeave={e => { e.currentTarget.style.borderBottomColor = 'rgba(42,96,73,0.25)'; }}
                  >
                    <BrandSvg icon={siGithub} size={13} />
                    View on GitHub
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
