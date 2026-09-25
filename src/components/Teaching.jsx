import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Teaching() {
  return (
    <section id="teaching" className="px" style={{ background: '#FFFFFF', paddingBottom: '4.5rem' }}>
      <div className="wrap">
        <motion.div
          className="teach-banner"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div>
            <p className="eyebrow" style={{ color: '#A8C8B8', marginBottom: '0.8rem' }}>Teaching · AI Masterclass</p>
            <h2 className="serif" style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.6rem)', lineHeight: 1.12, color: '#FFFFFF', marginBottom: '0.8rem' }}>
              I also teach teachers and students <span className="serif-italic" style={{ color: '#D4964A' }}>to use AI well.</span>
            </h2>
            <p style={{ fontSize: '0.98rem', lineHeight: 1.75, color: '#C8D8D0', maxWidth: '60ch' }}>
              Webinars, hands-on masterclasses and faculty development programmes for schools and colleges,
              planned around each group's own subject.
            </p>
          </div>
          <a href="/ai-masterclass/" className="btn-amber" style={{ whiteSpace: 'nowrap' }}>
            Explore the masterclass <ArrowRight size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
