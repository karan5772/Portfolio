import { Source_Serif_4 } from 'next/font/google'
import Avatar from '../components/Avatar'
import Authors from '../components/Authors'
import { groupByYear, has, linkLabel, paragraphs, profileLinks } from '../lib'
import styles from './MinimalScholar.module.css'

const serif = Source_Serif_4({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--ms-serif',
})

function PubLinks({ link }) {
  if (!link) return null
  return (
    <span className={styles.pubLinks}>
      <a href={link} target="_blank" rel="noopener noreferrer">{linkLabel(link)}</a>
    </span>
  )
}

/**
 * Minimal Scholar: text-first and typeset like an academic page.
 * @param {{ profile: import('@/types/academic').AcademicProfile }} props
 */
export default function MinimalScholar({ profile: p }) {
  const selected = p.publications.filter((x) => x.highlight)
  const links = profileLinks(p.links)

  // The nav lists only the sections this profile actually has
  const sections = [
    { id: 'about', label: 'About', show: true },
    { id: 'research', label: 'Research', show: has(p.researchAreas) },
    { id: 'publications', label: 'Publications', show: has(p.publications) },
    { id: 'teaching', label: 'Teaching', show: has(p.teaching) },
    { id: 'contact', label: 'Contact', show: true },
  ].filter((s) => s.show)

  return (
    <div className={`${serif.variable} ${styles.root}`}>
      <div className={styles.page}>
        <header className={styles.header}>
          <h1 className={styles.name}>{p.name}</h1>
          <p className={styles.affiliation}>
            <span>{p.title}, {p.department}</span>
            <span>{p.institution}, {p.location}</span>
          </p>
          <nav className={styles.nav} aria-label="Sections">
            <ul>
              {sections.map((s) => (
                <li key={s.id}><a href={`#${s.id}`}>{s.label}</a></li>
              ))}
            </ul>
          </nav>
        </header>

        <main>
          <section id="about" className={styles.section} aria-labelledby="about-h">
            <h2 id="about-h" className={styles.h2}>About</h2>
            <div className={styles.about}>
              <div>
                <p className={styles.shortBio}>{p.shortBio}</p>
                {paragraphs(p.bio).map((para, i) => <p key={i}>{para}</p>)}

                {has(p.education) && (
                  <>
                    <h3 className={styles.h3}>Education</h3>
                    <ul className={styles.plainList}>
                      {p.education.map((e) => (
                        <li key={e.degree}>{e.degree}, {e.institution}{e.year ? `, ${e.year}` : ''}</li>
                      ))}
                    </ul>
                  </>
                )}

                {has(p.awards) && (
                  <>
                    <h3 className={styles.h3}>Awards</h3>
                    <ul className={styles.plainList}>
                      {p.awards.map((a) => (
                        <li key={a.title}>{a.title}{a.year ? <span className={styles.meta}>, {a.year}</span> : null}</li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              <Avatar
                name={p.name}
                photo={p.photo}
                alt={`Portrait of ${p.name}`}
                className={styles.photo}
                initialsClassName={styles.initials}
                sizes="(max-width: 640px) 152px, 184px"
                priority
              />
            </div>
          </section>

          {has(p.researchAreas) && (
            <section id="research" className={styles.section} aria-labelledby="research-h">
              <h2 id="research-h" className={styles.h2}>Research</h2>
              <ul className={styles.plainList}>
                {p.researchAreas.map((r) => <li key={r}>{r}</li>)}
              </ul>
            </section>
          )}

          {selected.length > 0 && (
            <section className={styles.section} aria-labelledby="selected-h">
              <h2 id="selected-h" className={styles.h2}>Selected publications</h2>
              <ul className={styles.selected}>
                {selected.map((pub) => (
                  <li key={pub.title}>
                    <span className={styles.pubTitle}>{pub.title}</span>.{' '}
                    <span className={styles.venue}>{pub.venue}</span>, {pub.year}.
                    <PubLinks link={pub.link} />
                  </li>
                ))}
              </ul>
            </section>
          )}

          {has(p.publications) && (
            <section id="publications" className={styles.section} aria-labelledby="pubs-h">
              <h2 id="pubs-h" className={styles.h2}>Publications</h2>
              {groupByYear(p.publications).map(([year, pubs]) => (
                <div key={year} className={styles.bibYear}>
                  <h3>{year}</h3>
                  <ol className={styles.bibList}>
                    {pubs.map((pub) => (
                      <li key={pub.title}>
                        <Authors authors={pub.authors} owner={p.name} />.{' '}
                        {pub.title}.{' '}
                        <span className={styles.venue}>{pub.venue}</span>.
                        <PubLinks link={pub.link} />
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </section>
          )}

          {has(p.teaching) && (
            <section id="teaching" className={styles.section} aria-labelledby="teaching-h">
              <h2 id="teaching-h" className={styles.h2}>Teaching</h2>
              <ul className={styles.teaching}>
                {p.teaching.map((t) => (
                  <li key={t.title}>
                    <span className={styles.code}>{t.code ?? ''}</span>
                    <span>{t.title}{t.semester ? <span className={styles.meta}>, {t.semester.toLowerCase()}</span> : null}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {p.openings && (
            <section className={styles.section} aria-labelledby="openings-h">
              <h2 id="openings-h" className={styles.h2}>Prospective students</h2>
              {paragraphs(p.openings).map((para, i) => <p key={i}>{para}</p>)}
            </section>
          )}

          <section id="contact" className={styles.section} aria-labelledby="contact-h">
            <h2 id="contact-h" className={styles.h2}>Contact</h2>
            <dl className={styles.contact}>
              <dt>Email</dt>
              <dd><a href={`mailto:${p.email}`}>{p.email}</a></dd>
              {p.office && (
                <>
                  <dt>Office</dt>
                  <dd>{p.office}, {p.institution}</dd>
                </>
              )}
            </dl>
            {links.length > 0 && (
              <ul className={styles.links}>
                {links.map((l) => (
                  <li key={l.key}><a href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a></li>
                ))}
              </ul>
            )}
          </section>
        </main>

        <footer className={styles.footer}>
          © {new Date().getFullYear()} {p.name}
        </footer>
      </div>
    </div>
  )
}
