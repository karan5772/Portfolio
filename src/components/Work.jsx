import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BrandSvg } from '../lib/brandIcons'
import { siGithub } from 'simple-icons'
import { data } from '../data/portfolio'

const FILTERS = [
  { key: 'all',       label: 'All'        },
  { key: 'freelance', label: 'Freelance'  },
  { key: 'ai',        label: 'AI'         },
  { key: 'fullstack', label: 'Full-stack' },
]

function ProjectImage({ project }) {
  if (project.image) {
    return <img src={project.image} alt={project.title} draggable={false} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
  }
  return (
    <div style={{
      width: '100%', height: '100%', minHeight: '220px',
      background: '#F5F2EE',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <span style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(3rem, 8vw, 5rem)',
        fontWeight: 700,
        color: '#D9D0C7',
        userSelect: 'none',
      }}>
        {project.title[0]}
      </span>
    </div>
  )
}

export default function Work() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all'
    ? data.projects
    : data.projects.filter(p => p.categories?.includes(filter))

  return (
    <section id="projects" className="sec px" style={{ background: '#FFFFFF' }}>
      <div className="wrap">

        {/* Heading + filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '2.5rem', display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}
        >
          <h2 className="serif text-ink" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1 }}>
            Selected Work
          </h2>

          <div style={{ display: 'flex', gap: '0.25rem', background: '#F5F2EE', borderRadius: '8px', padding: '3px' }}>
            {FILTERS.map(f => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '0.65rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '0.35rem 0.8rem',
                  borderRadius: '6px',
                  border: 'none',
                  cursor: 'pointer',
                  background: filter === f.key ? '#FFFFFF' : 'transparent',
                  color: filter === f.key ? '#1A1410' : '#8A7B6C',
                  boxShadow: filter === f.key ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                  transition: 'all 0.18s',
                  whiteSpace: 'nowrap',
                }}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project list */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.map((p, i) => (
              <div
                key={p.title}
                className="proj-alt-row"
              >
                {/* Image — alternates side */}
                <div
                  className="proj-alt-img"
                  style={{ order: i % 2 === 0 ? 0 : 1 }}
                >
                  <ProjectImage project={p} />
                </div>

                {/* Text */}
                <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', color: '#B8B0A8', letterSpacing: '0.1em' }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {p.categories?.includes('freelance') && (
                      <span style={{
                        fontFamily: "'DM Mono', monospace", fontSize: '0.6rem',
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        padding: '0.2rem 0.5rem', borderRadius: '4px',
                        background: '#F0F7F4', color: '#2A6049',
                      }}>
                        Freelance
                      </span>
                    )}
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

                  <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
                    {p.liveUrl && (
                      <a
                        href={p.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'inline-flex', alignItems: 'center', gap: 7,
                          fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.82rem', fontWeight: 600,
                          color: '#2A6049', textDecoration: 'none',
                          borderBottom: '1px solid rgba(42,96,73,0.25)',
                          paddingBottom: '1px', transition: 'border-color 0.18s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderBottomColor = '#2A6049' }}
                        onMouseLeave={e => { e.currentTarget.style.borderBottomColor = 'rgba(42,96,73,0.25)' }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                        Live Site
                      </a>
                    )}
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
                          paddingBottom: '1px', transition: 'border-color 0.18s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderBottomColor = '#2A6049' }}
                        onMouseLeave={e => { e.currentTarget.style.borderBottomColor = 'rgba(42,96,73,0.25)' }}
                      >
                        <BrandSvg icon={siGithub} size={13} />
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {filtered.length === 0 && (
              <p style={{ color: '#8A7B6C', fontFamily: "'DM Mono', monospace", fontSize: '0.8rem' }}>
                No projects in this category yet.
              </p>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  )
}
