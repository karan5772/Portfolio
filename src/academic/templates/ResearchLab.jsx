import { Figtree } from 'next/font/google'
import Avatar from '../components/Avatar'
import Authors from '../components/Authors'
import { has, linkLabel, monthYear, paragraphs, plainName, profileLinks } from '../lib'
import styles from './ResearchLab.module.css'

const sans = Figtree({ subsets: ['latin'], display: 'swap', variable: '--rl-sans' })

/**
 * Splits "PhD (1 position): details…" into a bold label and body, so each opening scans quickly.
 * Paragraphs without a short "Label:" prefix are returned as plain text.
 */
function splitLabel(para) {
  const m = para.match(/^([^:]{3,60}):\s+([\s\S]+)$/)
  return m ? { label: m[1], body: m[2][0].toUpperCase() + m[2].slice(1) } : { label: null, body: para }
}

/**
 * Research Lab: for faculty building a group and recruiting students.
 * @param {{ profile: import('@/types/academic').AcademicProfile }} props
 */
export default function ResearchLab({ profile: p }) {
  const labName = p.lab?.name ?? `${plainName(p.name)}'s research group`
  const mission = p.lab?.mission ?? p.shortBio
  const links = profileLinks(p.links)
  const pubs = [...p.publications].sort((a, b) => b.year - a.year)
  const news = has(p.news) ? [...p.news].sort((a, b) => b.date.localeCompare(a.date)) : []

  // Openings: first paragraph is the intro, labelled paragraphs are positions, the last unlabelled one is "how to apply"
  const openingParas = p.openings ? paragraphs(p.openings).map(splitLabel) : []
  const intro = openingParas[0] && !openingParas[0].label ? openingParas[0].body : null
  const positions = openingParas.filter((o) => o.label)
  const rest = openingParas.slice(intro ? 1 : 0).filter((o) => !o.label).map((o) => o.body)
  const applyHref = `mailto:${p.email}?subject=${encodeURIComponent(`Application: ${labName}`)}`

  const nav = [
    { id: 'research', label: 'Research', show: has(p.projects) },
    { id: 'people', label: 'People', show: true },
    { id: 'publications', label: 'Publications', show: has(p.publications) },
    { id: 'news', label: 'News', show: news.length > 0 },
  ].filter((n) => n.show)

  return (
    <div className={`${sans.variable} ${styles.root}`}>
      <header className={styles.topbar}>
        <div className={`${styles.wrap} ${styles.topbarInner}`}>
          <span className={styles.brand}>{labName}</span>
          <nav aria-label="Sections">
            <ul className={styles.nav}>
              {nav.map((n) => <li key={n.id}><a href={`#${n.id}`}>{n.label}</a></li>)}
              {p.openings && <li><a className={styles.navCta} href="#join">Join the lab</a></li>}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="lab-h">
          <div className={`${styles.wrap} ${positions.length > 0 ? styles.heroGrid : ''}`}>
            <div>
            <h1 id="lab-h" className={styles.labName}>{labName}</h1>
            <p className={styles.mission}>{mission}</p>
            <p className={styles.heroMeta}>{p.department}, {p.institution}, {p.location}</p>
            <div className={styles.actions}>
              {p.openings && <a className={`${styles.btn} ${styles.btnPrimary}`} href="#join">See open positions</a>}
              {has(p.projects) && <a className={`${styles.btn} ${styles.btnGhost}`} href="#research">Our research</a>}
            </div>
            </div>

            {positions.length > 0 && (
              <aside className={styles.recruiting} aria-label="Open positions">
                <p className={styles.recruitingHead}>{intro ?? 'We are recruiting.'}</p>
                <ul>
                  {positions.map((pos) => <li key={pos.label}>{pos.label}</li>)}
                </ul>
                <a href="#join">How to apply</a>
              </aside>
            )}
          </div>
        </section>

        <section id="people" className={styles.section} aria-labelledby="pi-h">
          <div className={styles.wrap}>
            <h2 id="pi-h" className={styles.h2}>Principal investigator</h2>
            <div className={styles.pi} style={{ marginTop: '1.75rem' }}>
              <Avatar
                name={p.name}
                photo={p.photo}
                alt={`Portrait of ${p.name}`}
                className={styles.piPhoto}
                initialsClassName={styles.piInitials}
                sizes="(max-width: 680px) 160px, 208px"
                priority
              />
              <div>
                <h3 className={styles.piName}>{p.name}</h3>
                <p className={styles.piRole}>{p.title}, {p.department}</p>
                {paragraphs(p.bio).map((para, i) => <p key={i}>{para}</p>)}
                <ul className={styles.piLinks}>
                  <li><a href={`mailto:${p.email}`}>{p.email}</a></li>
                  {links.map((l) => (
                    <li key={l.key}><a href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {has(p.projects) && (
          <section id="research" className={styles.section} aria-labelledby="research-h">
            <div className={styles.wrap}>
              <h2 id="research-h" className={styles.h2}>Research projects</h2>
              {has(p.researchAreas) && <p className={styles.lede}>We work on {p.researchAreas.map((r) => r.toLowerCase()).join(', ')}.</p>}
              <ul className={styles.projects}>
                {p.projects.map((proj) => (
                  <li key={proj.title}>
                    <h3 className={styles.h3}>{proj.title}</h3>
                    <p>{proj.summary}</p>
                    {(proj.funder || proj.years) && (
                      <p className={styles.funding}>
                        {proj.funder && <>Funded by <strong>{proj.funder}</strong></>}
                        {proj.funder && proj.years ? ', ' : ''}
                        {proj.years}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {(has(p.team) || has(p.alumni)) && (
          <section className={styles.section} aria-labelledby="team-h">
            <div className={styles.wrap}>
              {has(p.team) && (
                <>
                  <h2 id="team-h" className={styles.h2}>Team</h2>
                  <ul className={styles.team} style={{ marginTop: '1.75rem' }}>
                    {p.team.map((m) => (
                      <li key={m.name}>
                        <Avatar
                          name={m.name}
                          photo={m.photo}
                          alt={`Portrait of ${m.name}`}
                          className={styles.teamPhoto}
                          initialsClassName={styles.teamInitials}
                          sizes="(max-width: 420px) 45vw, 200px"
                        />
                        <p className={styles.teamName}>{m.link ? <a href={m.link}>{m.name}</a> : m.name}</p>
                        <p className={styles.teamRole}>{m.role}</p>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {has(p.alumni) && (
                <>
                  {has(p.team)
                    ? <h3 className={`${styles.h3} ${styles.alumniHead}`}>Alumni</h3>
                    : <h2 id="team-h" className={styles.h2}>Alumni</h2>}
                  <ul className={styles.alumni}>
                    {p.alumni.map((a) => (
                      <li key={a.name}><strong>{a.name}</strong>, {a.role}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </section>
        )}

        {has(p.publications) && (
          <section id="publications" className={styles.section} aria-labelledby="pubs-h">
            <div className={styles.wrap}>
              <h2 id="pubs-h" className={styles.h2} style={{ marginBottom: '1.5rem' }}>Publications</h2>
              <ul className={styles.pubs}>
                {pubs.map((pub) => (
                  <li key={pub.title}>
                    <p className={styles.pubTitle}>
                      {pub.link ? <a href={pub.link} target="_blank" rel="noopener noreferrer">{pub.title}</a> : pub.title}
                    </p>
                    <p className={styles.pubMeta}>
                      <Authors authors={pub.authors} owner={p.name} />. <span className={styles.venue}>{pub.venue}</span>, {pub.year}
                      {pub.link ? <>. <a href={pub.link} target="_blank" rel="noopener noreferrer">{linkLabel(pub.link)}</a></> : null}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {news.length > 0 && (
          <section id="news" className={styles.section} aria-labelledby="news-h">
            <div className={styles.wrap}>
              <h2 id="news-h" className={styles.h2} style={{ marginBottom: '1.5rem' }}>News</h2>
              <ul className={styles.news}>
                {news.map((n) => (
                  <li key={n.date + n.text}>
                    <time dateTime={n.date}>{monthYear(n.date)}</time>
                    <span>{n.link ? <a href={n.link}>{n.text}</a> : n.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {p.openings && (
          <section id="join" className={styles.join} aria-labelledby="join-h">
            <div className={`${styles.wrap} ${styles.joinGrid}`}>
              <div>
                <h2 id="join-h" className={styles.joinTitle}>Join the lab</h2>
                {intro && <p className={styles.joinIntro}>{intro}</p>}
                <div className={styles.howTo}>
                  {rest.map((para, i) => <p key={i}>{para}</p>)}
                  <a className={styles.applyBtn} href={applyHref}>Email {p.name} to apply</a>
                </div>
              </div>
              {positions.length > 0 && (
                <ul className={styles.positions}>
                  {positions.map((pos) => (
                    <li key={pos.label}>
                      <strong>{pos.label}</strong>
                      {pos.body}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        )}
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.wrap} ${styles.footerGrid}`}>
          <div>
            <p className={styles.footerName}>{labName}</p>
            <p>{p.office ? `${p.office}, ` : ''}{p.department}, {p.institution}, {p.location}</p>
          </div>
          <p><a href={`mailto:${p.email}`}>{p.email}</a></p>
        </div>
      </footer>
    </div>
  )
}
