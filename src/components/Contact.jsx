import { motion } from 'framer-motion'
import { BrandSvg, SOCIAL_ICONS } from '../lib/brandIcons'
import { data } from '../data/portfolio'

const socialLinks = [
  { key: 'github',   handle: 'github.com/karan5772' },
  { key: 'linkedin', handle: 'linkedin.com/in/karan5772' },
  { key: 'twitter',  handle: 'x.com/karankumar5772' },
  { key: 'hashnode', handle: 'hashnode.com/@karan5772' },
]

export default function Contact() {
  return (
    <section id="contact" className="sec px" style={{ background: '#0C0C0C' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '5rem', alignItems: 'start' }}>

          {/* Left: heading + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="serif"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 6.5rem)', color: '#F0EBE3', lineHeight: 0.96, letterSpacing: '-0.02em', marginBottom: '1.75rem' }}
            >
              Let's work<br />
              <span style={{ color: '#D4964A' }}>together.</span>
            </h2>

            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#7A7A7A', maxWidth: '38ch', marginBottom: '2.5rem' }}>
              Available for freelance projects, contract work, and full-time roles. Drop me a line — I respond within 24 hours.
            </p>

            <a
              href={`mailto:${data.email}`}
              style={{
                display: 'inline-block',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(0.9rem, 2vw, 1.15rem)',
                fontWeight: 600,
                color: '#A8C8B8',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(168,200,184,0.3)',
                paddingBottom: '0.5rem',
                transition: 'color 0.18s, border-color 0.18s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#F0EBE3'; e.currentTarget.style.borderBottomColor = 'rgba(240,235,227,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#A8C8B8'; e.currentTarget.style.borderBottomColor = 'rgba(168,200,184,0.3)'; }}
            >
              {data.email}
            </a>
          </motion.div>

          {/* Right: contact links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            style={{ paddingTop: '0.5rem' }}
          >
            {/* Phone */}
            <a
              href={`tel:${data.phone}`}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '1.1rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)',
                textDecoration: 'none', color: '#6A6A6A', transition: 'color 0.18s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#F0EBE3'}
              onMouseLeave={e => e.currentTarget.style.color = '#6A6A6A'}
            >
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'inherit' }}>Phone</span>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.9rem', fontWeight: 500, color: 'inherit' }}>{data.phone}</span>
            </a>

            {/* Location */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.1rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
              <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6A6A6A' }}>Location</span>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.9rem', fontWeight: 500, color: '#6A6A6A' }}>Rajasthan, India</span>
            </div>

            {/* Social links */}
            {socialLinks.map(({ key, handle }) => {
              const entry = SOCIAL_ICONS[key]
              if (!entry) return null
              const socialItem = data.social.find(s => s.icon === key)
              return (
                <a
                  key={key}
                  href={socialItem?.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '1.1rem 0', borderBottom: '1px solid rgba(255,255,255,0.07)',
                    textDecoration: 'none', color: '#6A6A6A', transition: 'color 0.18s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = `#${entry.icon.hex}`}
                  onMouseLeave={e => e.currentTarget.style.color = '#6A6A6A'}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: 9, fontFamily: "'DM Mono', monospace", fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'inherit' }}>
                    <BrandSvg icon={entry.icon} size={14} />
                    {entry.label}
                  </span>
                  <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.82rem', color: 'inherit' }}>{handle}</span>
                </a>
              )
            })}

            <div style={{ paddingTop: '2rem' }}>
              <a href={`mailto:${data.email}`} className="btn-amber">
                Send a message
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
