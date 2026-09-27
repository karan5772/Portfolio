import { Manrope } from 'next/font/google'
import Image from 'next/image'
import { has, initials, paragraphs, plainName, profileLinks } from '../lib'
import styles from './ModernProfile.module.css'

// Manrope for everything: modern and confident, with weight doing the work of hierarchy
const sans = Manrope({ subsets: ['latin'], display: 'swap', variable: '--mp-sans' })

// "Keynote, National Summit" -> { kind: 'Keynote', where: 'National Summit' }; anything else stays as the event name
const KINDS = /^(keynote|panel|podcast interview|podcast|interview|talk|lecture|webinar|workshop|guest lecture)\b,?\s*/i
function splitEvent(event) {
  const m = event.match(KINDS)
  return m ? { kind: m[1][0].toUpperCase() + m[1].slice(1), where: event.slice(m[0].length) } : { kind: null, where: event }
}

/**
 * Modern Profile: for Professors of Practice, consultants and speakers.
 * @param {{ profile: import('@/types/academic').AcademicProfile }} props
 */
export default function ModernProfile({ profile: p }) {
  const links = profileLinks(p.links)
  const bookHref = `mailto:${p.email}?subject=${encodeURIComponent(`Conversation request for ${p.name}`)}`
  const bio = paragraphs(p.bio)
  const experience = has(p.experience) ? p.experience : []
  const current = experience.find((x) => /present/i.test(x.years))
  // Past employers, most recent first, for the "Previously" strip
  const previously = [...new Set(experience.filter((x) => x !== current).reverse().map((x) => x.org.split(',')[0]))]
  const writing = p.publications.filter((x) => x.highlight).length
    ? p.publications.filter((x) => x.highlight)
    : p.publications.slice(0, 3)
  const hasWork = has(p.projects) || writing.length > 0

  const nav = [
    { id: 'work', label: 'Work', show: hasWork },
    { id: 'about', label: 'About', show: true },
    { id: 'career', label: 'Career', show: experience.length > 0 },
    { id: 'talks', label: 'Talks', show: has(p.talks) },
    { id: 'contact', label: 'Contact', show: true },
  ].filter((n) => n.show)

  return (
    <div className={`${sans.variable} ${styles.root}`}>
      <header className={styles.topbar}>
        <div className={`${styles.wrap} ${styles.topbarInner}`}>
          <span className={`${styles.display} ${styles.brand}`}>{p.name}</span>
          <nav aria-label="Sections">
            <ul className={styles.nav}>
              {nav.map((n) => <li key={n.id}><a href={`#${n.id}`}>{n.label}</a></li>)}
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className={styles.hero} aria-labelledby="name-h">
          <div className={`${styles.wrap} ${styles.heroGrid}`}>
            <div>
              <p className={styles.role}>{p.title}, {current ? current.org : p.institution}</p>
              <h1 id="name-h" className={`${styles.display} ${styles.name}`}>{plainName(p.name)}</h1>
              <p className={`${styles.display} ${styles.positioning}`}>{p.shortBio}</p>
              <div className={styles.heroActions}>
                <a className={`${styles.btn} ${styles.btnInk}`} href={bookHref}>Book a conversation</a>
                {hasWork && <a className={styles.textLink} href="#work">See selected work</a>}
              </div>
            </div>
            <div className={styles.portraitCol}>
              <div className={styles.portrait}>
                {p.photo ? (
                  <Image src={p.photo} alt={`Portrait of ${p.name}`} fill priority sizes="(max-width: 820px) 90vw, 30vw" style={{ objectFit: 'cover' }} />
                ) : (
                  <div role="img" aria-label={p.name} className={`${styles.display} ${styles.portraitInitials}`}>
                    <span aria-hidden="true">{initials(p.name)}</span>
                  </div>
                )}
              </div>
              <p className={styles.caption}>{p.department}, {p.location}</p>
            </div>
          </div>
        </section>

        {previously.length > 0 && (
          <div className={styles.previously}>
            <div className={`${styles.wrap} ${styles.previouslyInner}`}>
              <p className={styles.previouslyLabel}>Previously at</p>
              <ul className={styles.orgs}>
                {previously.map((org) => <li key={org} className={styles.display}>{org}</li>)}
              </ul>
            </div>
          </div>
        )}

        {hasWork && (
          <section id="work" className={styles.section} aria-labelledby="work-h">
            <div className={styles.wrap}>
              <h2 id="work-h" className={`${styles.display} ${styles.h2}`}>Selected work</h2>
              {has(p.projects) && (
                <ul className={styles.work}>
                  {p.projects.map((proj) => (
                    <li key={proj.title}>
                      <p className={styles.workYears}>{proj.years ?? ''}</p>
                      <div>
                        <h3 className={`${styles.display} ${styles.workTitle}`}>{proj.title}</h3>
                        <p className={styles.workText}>{proj.summary}</p>
                        {proj.funder && <p className={styles.workFunder}>Funded by {proj.funder}</p>}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              {writing.length > 0 && (
                <div className={styles.writing}>
                  <h3 className={styles.writingHead}>Writing</h3>
                  <ul>
                    {writing.map((w) => (
                      <li key={w.title}>
                        {w.link ? <a href={w.link} target="_blank" rel="noopener noreferrer">{w.title}</a> : <strong>{w.title}</strong>}
                        {'. '}<span className={styles.venue}>{w.venue}</span>, {w.year}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        <section id="about" className={`${styles.section} ${styles.banded}`} aria-labelledby="about-h">
          <div className={`${styles.wrap} ${styles.split}`}>
            <h2 id="about-h" className={`${styles.display} ${styles.h2}`}>About</h2>
            <div className={styles.body}>
              {bio[0] && <p className={`${styles.display} ${styles.lead}`}>{bio[0]}</p>}
              {bio.slice(1).map((para, i) => <p key={i}>{para}</p>)}
              <dl className={styles.facts}>
                {p.education.map((e) => (
                  <div key={e.degree} style={{ display: 'contents' }}>
                    <dt>{e.year ?? 'Education'}</dt>
                    <dd>{e.degree}, {e.institution}</dd>
                  </div>
                ))}
                {has(p.awards) && p.awards.map((a) => (
                  <div key={a.title} style={{ display: 'contents' }}>
                    <dt>{a.year ?? 'Award'}</dt>
                    <dd>{a.title}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {experience.length > 0 && (
          <section id="career" className={styles.section} aria-labelledby="career-h">
            <div className={styles.wrap}>
              <h2 id="career-h" className={`${styles.display} ${styles.h2}`}>Career</h2>
              <ol
                className={`${styles.timeline} ${experience.length <= 5 ? styles.horizontal : ''}`}
                style={{ '--steps': experience.length }}
              >
                {experience.map((x) => (
                  <li key={x.role + x.years} className={x === current ? styles.current : undefined}>
                    <p className={styles.tlYears}>{x.years}</p>
                    <h3 className={`${styles.display} ${styles.tlRole}`}>{x.role}</h3>
                    <p className={styles.tlOrg}>{x.org}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {has(p.researchAreas) && (
          <section className={`${styles.section} ${styles.banded}`} aria-labelledby="expertise-h">
            <div className={`${styles.wrap} ${styles.split}`}>
              <h2 id="expertise-h" className={`${styles.display} ${styles.h2}`}>Expertise</h2>
              <ul className={styles.expertise}>
                {p.researchAreas.map((r) => <li key={r} className={styles.display}>{r}</li>)}
              </ul>
            </div>
          </section>
        )}

        {has(p.talks) && (
          <section id="talks" className={styles.section} aria-labelledby="talks-h">
            <div className={styles.wrap}>
              <h2 id="talks-h" className={`${styles.display} ${styles.h2}`}>Talks and media</h2>
              <ul className={styles.talks}>
                {p.talks.map((t) => {
                  const { kind, where } = splitEvent(t.event)
                  return (
                    <li key={t.title}>
                      <p className={styles.talkMeta}>{kind && <><span className={styles.talkKind}>{kind}</span>{' · '}</>}{t.year}</p>
                      <h3 className={`${styles.display} ${styles.talkTitle}`}>
                        {t.link ? <a href={t.link} target="_blank" rel="noopener noreferrer">{t.title}</a> : t.title}
                      </h3>
                      <p className={styles.talkEvent}>{where}</p>
                    </li>
                  )
                })}
              </ul>
            </div>
          </section>
        )}

        <section id="contact" className={styles.contact} aria-labelledby="contact-h">
          <div className={`${styles.wrap} ${styles.contactGrid}`}>
            <div>
              <h2 id="contact-h" className={`${styles.display} ${styles.contactTitle}`}>Let’s talk about your project</h2>
              <p className={styles.contactText}>
                For advisory work, talks, or collaborations with students and industry, email me with a line
                about what you have in mind.
              </p>
              <div className={styles.heroActions}>
                <a className={`${styles.btn} ${styles.btnLight}`} href={bookHref}>Book a conversation</a>
              </div>
            </div>
            <ul className={styles.contactLinks}>
              <li><a href={`mailto:${p.email}`}>{p.email}</a></li>
              {links.map((l) => (
                <li key={l.key}><a href={l.url} target="_blank" rel="noopener noreferrer">{l.label}</a></li>
              ))}
              <li>{p.location}</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.wrap}>© {new Date().getFullYear()} {p.name}</div>
      </footer>
    </div>
  )
}
