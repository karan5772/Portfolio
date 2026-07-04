import { motion } from 'framer-motion'
import { BrandSvg, TECH_LOGOS } from '../lib/brandIcons'
import { data } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="sec px" style={{ background: '#FFFFFF' }}>
      <div className="wrap">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          style={{ marginBottom: '3.5rem' }}
        >
          <h2 className="serif text-ink" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1 }}>
            About Me
          </h2>
        </motion.div>

        {/* Bio */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '4rem', marginBottom: '5rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: '#4A3E34', marginBottom: '1.25rem' }}>
              I'm a freelance{' '}
              <strong style={{ color: '#1A1410', fontWeight: 600 }}>MERN Stack & Gen AI developer</strong>{' '}
              who builds full-stack web apps, AI-powered tools, and REST APIs — from idea to deployment. B.Tech Computer Engineering, BKBIET Pilani, 2026.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.85, color: '#4A3E34', marginBottom: '1.5rem' }}>
              Google <strong style={{ color: '#1A1410', fontWeight: 600 }}>Student Ambassador for Gemini</strong>, 3 internships, and 5+ shipped production applications.
            </p>
            <ul style={{ listStyle: 'none', margin: '0 0 2.5rem', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                'Full-stack web apps (React, Node.js, TypeScript)',
                'AI integrations — OpenAI, LangChain, RAG pipelines',
                'REST APIs & backend systems',
                'MVPs built fast and shipped clean',
              ].map(s => (
                <li key={s} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.9rem', color: '#5E5248' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#2A6049', flexShrink: 0 }} />
                  {s}
                </li>
              ))}
            </ul>
            <a href={`mailto:${data.email}`} className="btn-sage">Hire Me</a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#8A7B6C', marginBottom: '1.25rem' }}>
              Tech Stack
            </p>
            {/* Tech logo grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(76px, 1fr))', gap: '0.75rem' }}>
              {TECH_LOGOS.map(({ icon, name }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.03 * i }}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    gap: 7, padding: '0.85rem 0.5rem',
                    border: '1px solid #EBEBEB', borderRadius: 10,
                    background: '#FAFAFA',
                    transition: 'border-color 0.18s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderColor = '#D0C8C0'}
                  onMouseLeave={e => e.currentTarget.style.borderColor = '#EBEBEB'}
                >
                  <BrandSvg icon={icon} size={24} colored />
                  <span style={{
                    fontFamily: "'DM Mono', monospace", fontSize: '0.6rem',
                    color: '#5E5248', textAlign: 'center', lineHeight: 1.2,
                  }}>
                    {name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
