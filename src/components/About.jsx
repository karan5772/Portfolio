import { BrandSvg, TECH_LOGOS } from '../lib/brandIcons'

const SERVICES = [
  'Full-stack web apps with React, Node.js and TypeScript',
  'AI features: OpenAI, LangChain and RAG pipelines',
  'REST APIs and backend systems',
  'MVPs, from first commit to deployment',
]

export default function About() {
  return (
    <section id="about" className="sec px">
      <div className="wrap">
        <h2 className="h2" style={{ marginBottom: '2.5rem' }}>About me</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))', gap: '4rem' }}>
          <div>
            <p className="lead" style={{ marginBottom: '1.25rem' }}>
              I'm a freelance <strong style={{ color: 'var(--ink)' }}>MERN stack and generative AI developer</strong>.
              I build full-stack web apps, AI-powered tools and REST APIs, and I take them from idea to deployment.
              I graduated in Computer Engineering from BKBIET Pilani in 2026.
            </p>
            <p className="lead" style={{ marginBottom: '1.5rem' }}>
              Google <strong style={{ color: 'var(--ink)' }}>Student Ambassador for Gemini</strong>, 3 internships,
              and 5+ production applications shipped.
            </p>
            <ul style={{ listStyle: 'none', margin: '0 0 2.25rem', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              {SERVICES.map(s => (
                <li key={s} className="text" style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                  <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--sage)', flexShrink: 0, transform: 'translateY(-2px)' }} />
                  {s}
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-sage">Hire me</a>
          </div>

          <div>
            <h3 className="h3" style={{ marginBottom: '1rem' }}>Tech stack</h3>
            <ul className="stack" style={{ listStyle: 'none' }}>
              {TECH_LOGOS.map(({ icon, name }) => (
                <li key={name} className="stack-item">
                  <BrandSvg icon={icon} size={18} colored />
                  {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
