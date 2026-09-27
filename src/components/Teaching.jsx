import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Teaching() {
  return (
    <section id="teaching" className="px" style={{ paddingBottom: 'clamp(4rem, 8vw, 6.5rem)' }}>
      <div className="wrap">
        <div className="teach-banner">
          <div>
            <h2 className="serif" style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.5rem)', lineHeight: 1.15, color: '#FFFFFF', marginBottom: '0.8rem' }}>
              I also teach college students and faculty to use AI.
            </h2>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.7, color: '#C8D8D0', maxWidth: '60ch' }}>
              Live AI webinars for college students and faculty, planned around each department's own syllabus.
            </p>
          </div>
          <Link href="/ai-masterclass/" className="btn btn-amber" style={{ whiteSpace: 'nowrap', justifySelf: 'start' }}>
            See the AI Masterclass <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
