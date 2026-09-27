import { useState } from 'react'
import { BrandSvg } from '../lib/brandIcons'
import { siGithub } from 'simple-icons'
import { data } from '../data/portfolio'

const FILTERS = [
  { key: 'all',       label: 'All'        },
  { key: 'freelance', label: 'Client work' },
  { key: 'ai',        label: 'AI'         },
  { key: 'fullstack', label: 'Full-stack' },
]

function ProjectImage({ project }) {
  if (project.image) {
    return <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" decoding="async" draggable={false} />
  }
  // No screenshot: a quiet panel with the project name rather than a placeholder letter
  return (
    <div style={{ width: '100%', height: '100%', minHeight: 220, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
      <span className="serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', color: 'var(--muted)', textAlign: 'center' }}>
        {project.title}
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
    <section id="projects" className="sec px">
      <div className="wrap">
        <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <h2 className="h2">Selected work</h2>
          <div className="filter" role="group" aria-label="Filter projects">
            {FILTERS.map(f => (
              <button key={f.key} onClick={() => setFilter(f.key)} aria-pressed={filter === f.key}>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          {filtered.map((p, i) => (
            <article key={p.title} className="proj-row">
              <div className="proj-img" style={{ order: i % 2 === 0 ? 0 : 1, aspectRatio: p.imageAspect || '16 / 10' }}>
                <ProjectImage project={p} />
              </div>

              <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                {p.categories?.includes('freelance') && (
                  <span className="tag" style={{ marginBottom: '0.75rem', background: 'var(--sage-tint)', color: 'var(--sage)', borderColor: 'transparent' }}>
                    Client project
                  </span>
                )}
                <h3 className="serif" style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.9rem)', lineHeight: 1.18, color: 'var(--ink)', marginBottom: '0.75rem' }}>
                  {p.title}
                </h3>
                <p className="text" style={{ marginBottom: '1rem' }}>{p.description}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.25rem' }}>
                  {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>

                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="link">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live site
                    </a>
                  )}
                  {p.repoUrl && (
                    <a href={p.repoUrl} target="_blank" rel="noopener noreferrer" className="link">
                      <BrandSvg icon={siGithub} size={14} />
                      View on GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}

          {filtered.length === 0 && <p className="muted">No projects in this category yet.</p>}
        </div>
      </div>
    </section>
  )
}
