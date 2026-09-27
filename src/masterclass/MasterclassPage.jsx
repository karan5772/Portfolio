import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Plus, Minus, Menu, X } from 'lucide-react'
import { BrandSvg, SOCIAL_ICONS, TOOL_ICONS } from '../lib/brandIcons'
import { masterclass as mc, instructor } from '../data/masterclass'
import Footer from '../components/Footer'

const NAV = [
  ['Programs', 'programs'],
  ['Curriculum', 'curriculum'],
  ['Instructor', 'instructor'],
  ['FAQ', 'faq'],
]

function SectionHead({ title, intro }) {
  return (
    <div className="sec-head">
      <h2 className="h2">{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  )
}

/* ── Nav ─────────────────────────────────────── */
function McNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 px transition-colors duration-300 ${
          scrolled ? 'py-3 bg-white/95 backdrop-blur-md border-b border-[#E8E4DE]' : 'py-5'
        }`}
      >
        <div className="wrap flex items-center justify-between">
          <a href="/" style={{ fontWeight: 700, fontSize: '1.15rem', color: 'var(--ink)', textDecoration: 'none' }}>
            Karan<span style={{ color: 'var(--sage)' }}>.</span>
          </a>

          <nav className="hidden md:flex items-center gap-1" aria-label="Page sections">
            {NAV.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="nav-link">{label}</a>
            ))}
            <a href="/" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <ArrowLeft size={15} /> Portfolio
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#enquire" className="hidden sm:inline-flex btn btn-sage btn-sm">Book a session</a>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-[#D9D4CD] text-[#6F6257]"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            style={{ position: 'fixed', inset: 0, zIndex: 40, background: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
          >
            {[...NAV, ['Book a session', 'enquire']].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}
                style={{ fontWeight: 700, fontSize: 'clamp(1.6rem, 7vw, 2.4rem)', color: 'var(--ink)', textDecoration: 'none' }}>
                {label}
              </a>
            ))}
            <a href="/" style={{ marginTop: '1rem', color: 'var(--sage)', fontWeight: 600, fontSize: '1.0625rem', textDecoration: 'none' }}>
              Back to portfolio
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/* ── Hero ────────────────────────────────────── */
const EXAMPLE_QUESTIONS = [
  { q: 'Worst-case search time in a BST built by inserting 1, 2, … n in order', level: 'Apply', key: 'O(n)' },
  { q: 'Order of keys produced by an inorder traversal of a BST', level: 'Apply', key: 'Ascending' },
  { q: 'An insertion order of keys 1–7 that gives a BST of height 3', level: 'Analyse', key: '4, 2, 6, 1, 3, 5, 7' },
]

function Hero() {
  return (
    <section className="px" style={{ paddingTop: 'clamp(7rem, 12vw, 9rem)', paddingBottom: 'clamp(3.5rem, 7vw, 5.5rem)' }}>
      <div className="wrap mc-hero-grid">
        <div>
          <h1 className="serif" style={{ fontSize: 'clamp(2.3rem, 4.6vw, 3.6rem)', lineHeight: 1.1, color: 'var(--ink)', marginBottom: '1.25rem', maxWidth: '16ch' }}>
            Practical AI training for college students and faculty
          </h1>

          <p className="lead" style={{ maxWidth: '50ch', marginBottom: '1.75rem' }}>
            Live sessions for colleges and universities, built around your own syllabus. Faculty leave
            with question banks and lecture plans; students leave with study sets and project workflows.
          </p>

          {/* The two programs at a glance, so the offer is clear before scrolling */}
          <dl style={{ borderTop: '1px solid var(--line)', marginBottom: '2rem', maxWidth: '34rem' }}>
            {mc.programs.map(p => (
              <div key={p.key} style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', padding: '0.8rem 0', borderBottom: '1px solid var(--line)' }}>
                <dt style={{ fontWeight: 700 }}>{p.short}</dt>
                <dd className="muted">{p.formats.map(f => `${f.name}, ${f.duration}`).join(' or ')}</dd>
              </div>
            ))}
          </dl>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.25rem' }}>
            <a href="#enquire" className="btn btn-sage">Book a session <ArrowRight size={16} /></a>
            <a href="#programs" className="btn btn-outline">See the programs</a>
          </div>

          <div className="mc-byline">
            <img src={instructor.image} alt="" width="48" height="48" />
            <p className="small" style={{ lineHeight: 1.5 }}>
              <strong style={{ color: 'var(--ink)' }}>Taught by {instructor.name}</strong><br />
              <span className="muted">Former Google Student Ambassador for Gemini</span>
            </p>
          </div>
        </div>

        {/* A worked example from Module 02: drafting a CO-mapped question set */}
        <figure className="mc-example" aria-label="Example from the faculty program: drafting a question set with AI">
          <div className="mc-example-head">
            <span>Worked example</span>
            <span className="muted">Module 02 · Faculty</span>
          </div>
          <div>
            <p className="mc-example-label">Prompt</p>
            <p>
              Draft 5 MCQs on binary search trees for B.Tech CSE, Semester 3 (Data Structures).
              Map each to CO3: three at Bloom’s Apply level, two at Analyse. Include an answer
              key with a one-line rationale.
            </p>
          </div>
          <div>
            <p className="mc-example-label">Draft output, all mapped to CO3</p>
            <table className="mc-qtable">
              <thead>
                <tr><th scope="col">Question</th><th scope="col">Level</th><th scope="col">Key</th></tr>
              </thead>
              <tbody>
                {EXAMPLE_QUESTIONS.map(q => (
                  <tr key={q.q}><td>{q.q}</td><td>{q.level}</td><td>{q.key}</td></tr>
                ))}
              </tbody>
            </table>
            <p className="muted small" style={{ marginTop: '0.75rem' }}>2 more questions and a rationale for each answer.</p>
          </div>
          <figcaption>
            <Check size={16} aria-hidden="true" />
            Every answer is verified in the session before it goes into a question paper.
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

/* ── Programs ────────────────────────────────── */
function Programs() {
  return (
    <section id="programs" className="sec px sec-alt">
      <div className="wrap">
        <SectionHead
          title="Two programs"
          intro="Students and faculty need different things from AI, so each group gets its own examples, exercises and pace."
        />
        <div className="mc-programs">
          {mc.programs.map(p => {
            const dark = p.featured
            return (
              <article key={p.key} className={`mc-program${dark ? ' mc-program-dark' : ''}`}>
                <h3 className="serif" style={{ fontSize: 'clamp(1.55rem, 2.6vw, 1.95rem)', lineHeight: 1.18, color: dark ? '#FFFFFF' : 'var(--ink)' }}>
                  {p.name}
                </h3>

                <dl className="mc-facts" style={{ color: dark ? '#C8D8D0' : 'var(--body)' }}>
                  {p.formats.map(f => (
                    <div key={f.name} style={{ display: 'contents' }}>
                      <dt style={{ color: dark ? '#E8B57A' : 'var(--amber)' }}>{f.name}</dt>
                      <dd>{f.duration}, {f.mode.toLowerCase()}</dd>
                    </div>
                  ))}
                </dl>

                <p style={{ fontWeight: 600, color: dark ? '#FFFFFF' : 'var(--ink)', marginBottom: '0.9rem' }}>{p.title}</p>
                <ul className="mc-checks" style={{ flexGrow: 1, color: dark ? '#C8D8D0' : 'var(--body)' }}>
                  {p.points.map(pt => (
                    <li key={pt}>
                      <Check size={16} style={{ color: dark ? '#8FC0A4' : 'var(--sage)' }} aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <a href="#enquire" className={`btn ${dark ? 'btn-amber' : 'btn-sage'}`} style={{ alignSelf: 'flex-start', marginTop: '1.75rem' }}>
                  Book this program <ArrowRight size={16} />
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── Curriculum ──────────────────────────────── */
function Curriculum() {
  return (
    <section id="curriculum" className="sec px">
      <div className="wrap">
        <SectionHead
          title="What we cover"
          intro="Four modules, covered at the depth that suits your group, with exercises built on examples from your field."
        />

        <ol style={{ listStyle: 'none' }}>
          {mc.curriculum.map((m, i) => (
            <li key={m.title} className="mc-module">
              <span className="mc-module-num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="serif" style={{ fontSize: '1.4rem', lineHeight: 1.25, color: 'var(--ink)', marginBottom: '0.4rem' }}>{m.title}</h3>
                <p className="text measure">{m.summary}</p>
              </div>
              <ul className="mc-module-topics">
                {m.topics.map(t => <li key={t}>{t}</li>)}
              </ul>
            </li>
          ))}
        </ol>

        <div style={{ marginTop: '3.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '2.5rem 4rem' }}>
          <div>
            <h3 className="h3" style={{ marginBottom: '0.9rem' }}>Tailored to your field</h3>
            <p className="text">{mc.fields.join(', ')}.</p>
          </div>
          <div>
            <h3 className="h3" style={{ marginBottom: '0.9rem' }}>Tools we use</h3>
            <ul className="stack" style={{ listStyle: 'none', marginBottom: '0.75rem' }}>
              {mc.tools.map(t => (
                <li key={t.name} className="stack-item">
                  <BrandSvg icon={TOOL_ICONS[t.icon]} size={18} colored />
                  {t.name}
                </li>
              ))}
            </ul>
            <p className="muted small">Every exercise works on the free plans. No coding needed.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Takeaways + how it works ────────────────── */
function Takeaways() {
  return (
    <section className="sec px sec-alt">
      <div className="wrap">
        <SectionHead title="What participants take home" />
        <div className="mc-pairs">
          {mc.takeaways.map(t => (
            <div key={t.title}>
              <h3 className="h3" style={{ marginBottom: '0.4rem' }}>{t.title}</h3>
              <p className="text">{t.text}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 'clamp(4rem, 8vw, 6rem)' }}>
          <SectionHead title="How booking works" />
          <ol className="mc-steps">
            {mc.steps.map(s => (
              <li key={s.title}>
                <h3 className="h3" style={{ marginBottom: '0.4rem' }}>{s.title}</h3>
                <p className="text">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

/* ── Instructor ──────────────────────────────── */
function Instructor() {
  return (
    <section id="instructor" className="sec px">
      <div className="wrap mc-instructor">
        <div className="mc-instructor-side">
          <div className="portrait" style={{ width: 'clamp(150px, 18vw, 220px)', marginBottom: '1.5rem' }}>
            <img src={instructor.image} alt={`${instructor.name}, AI trainer and generative AI engineer`} width="220" height="220" loading="lazy" />
          </div>
          <h2 className="h2" style={{ marginBottom: '1rem' }}>Your instructor, {instructor.name}</h2>
          <p className="lead" style={{ marginBottom: '1rem', maxWidth: '46ch' }}>
            I build AI products, including RAG tutors, AI code reviewers and Gemini-powered assistants,
            and I teach people how to use these tools well. As a Google Student Ambassador for Gemini
            I ran workshops that got students using AI for real work.
          </p>
          <p className="muted" style={{ marginBottom: '1.5rem' }}>
            {instructor.education.degree}, BKBIET Pilani
          </p>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {instructor.social.map(({ platform, url, icon }) => {
              const entry = SOCIAL_ICONS[icon]
              if (!entry) return null
              return (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer me" title={entry.label} aria-label={entry.label} className="soc">
                  <BrandSvg icon={entry.icon} size={17} />
                </a>
              )
            })}
            <a href="/" className="btn btn-outline btn-sm" style={{ marginLeft: 4 }}>
              Full portfolio <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <div>
            <h3 className="h3" style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Experience</h3>
            <div className="row-list">
              {instructor.experience.map(e => (
                <div key={e.company} style={{ padding: '1.25rem 0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <h4 style={{ fontWeight: 700, color: 'var(--ink)' }}>{e.position}</h4>
                    <span className="row-meta">{e.period}</span>
                  </div>
                  <p style={{ fontWeight: 600, color: e.type === 'ambassador' ? 'var(--amber)' : 'var(--sage)', marginBottom: '0.35rem' }}>{e.company}</p>
                  <p className="text">{e.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="h3" style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>AI I've built for learning</h3>
            <ul className="mc-work">
              {mc.relevantWork.map(w => (
                <li key={w.title}>
                  <a href={w.url} target="_blank" rel="noopener noreferrer">
                    {w.title} <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                  <p className="text">{w.text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="h3" style={{ fontSize: '1.3rem', marginBottom: '0.9rem' }}>Certifications</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {instructor.certifications.map(c => (
                <li key={c.title} className="tag" style={{ background: '#FFFFFF' }}>{c.title}, {c.org}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── FAQ ─────────────────────────────────────── */
function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="sec px sec-alt">
      <div className="wrap">
        <SectionHead title="Common questions" />
        <div style={{ maxWidth: 860 }}>
          {mc.faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="mc-faq">
                <button onClick={() => setOpen(isOpen ? -1 : i)} aria-expanded={isOpen} aria-controls={`faq-${i}`} className="mc-faq-q">
                  <span>{f.q}</span>
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                {/* Answer stays in the DOM (hidden) so crawlers and find-in-page still see it */}
                <div id={`faq-${i}`} hidden={!isOpen} className="text measure" style={{ paddingBottom: '1.35rem' }}>
                  {f.a}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ── Enquiry ─────────────────────────────────── */
const PROGRAMS = ['AI webinar for college students', 'AI webinar for faculty', 'Not sure yet']

function Enquiry() {
  const [form, setForm] = useState({
    name: '', org: '', program: PROGRAMS[0], size: '', field: '', date: '', notes: '',
  })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const body = [
    'Hi Karan,',
    '',
    "I'd like to book an AI session.",
    '',
    `Name: ${form.name}`,
    `College / university: ${form.org}`,
    `Program: ${form.program}`,
    `Approx. participants: ${form.size}`,
    `Department and year: ${form.field}`,
    `Preferred dates: ${form.date}`,
    '',
    form.notes,
  ].join('\n')

  const subject = `AI Masterclass enquiry${form.org ? `: ${form.org}` : ''}`
  const mailto = `mailto:${instructor.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  const whatsapp = `https://wa.me/${instructor.phone.replace('+', '')}?text=${encodeURIComponent(body)}`

  const submit = (e) => {
    e.preventDefault()
    window.location.href = mailto
  }

  return (
    <section id="enquire" className="sec px" style={{ background: 'var(--night)' }}>
      <div className="wrap mc-enquire">
        <div>
          <h2 className="serif" style={{ fontSize: 'clamp(2.2rem, 4.4vw, 3.3rem)', color: '#F0EBE3', lineHeight: 1.05, marginBottom: '1.25rem' }}>
            Book a session for your <span style={{ color: '#D4964A' }}>college</span>
          </h2>
          <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: 'var(--night-text)', maxWidth: '42ch', marginBottom: '1.75rem' }}>
            Tell me which department and year the session is for, and I'll send back a draft agenda and a quote, usually within 24 hours.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '2rem' }}>
            {['Separate webinars for students and faculty', 'Agenda planned around your syllabus', 'Live online, on the platform you already use'].map(t => (
              <li key={t} style={{ display: 'flex', gap: 10, alignItems: 'baseline', color: '#D4D4D4' }}>
                <Check size={16} style={{ color: '#8FC0A4', flexShrink: 0, transform: 'translateY(3px)' }} aria-hidden="true" /> {t}
              </li>
            ))}
          </ul>
          <a href={`mailto:${instructor.email}`} style={{ color: '#A8C8B8', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid rgba(168,200,184,0.4)', paddingBottom: 3 }}>
            {instructor.email}
          </a>
        </div>

        <form onSubmit={submit} className="mc-form" aria-label="Session enquiry">
          <div className="mc-form-row">
            <label>Your name<input required value={form.name} onChange={set('name')} autoComplete="name" /></label>
            <label>College or university<input value={form.org} onChange={set('org')} autoComplete="organization" /></label>
          </div>
          <label>Program
            <select value={form.program} onChange={set('program')}>{PROGRAMS.map(a => <option key={a}>{a}</option>)}</select>
          </label>
          <div className="mc-form-row">
            <label>Approx. participants<input inputMode="numeric" value={form.size} onChange={set('size')} placeholder="e.g. 40" /></label>
            <label>Preferred dates<input value={form.date} onChange={set('date')} placeholder="e.g. mid-November" /></label>
          </div>
          <label>Department and year<input value={form.field} onChange={set('field')} placeholder="e.g. 2nd-year B.Tech CSE, B.Com, MBA" /></label>
          <label>Anything else?<textarea rows={3} value={form.notes} onChange={set('notes')} placeholder="Goals, experience level, special requests" /></label>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.35rem' }}>
            <button type="submit" className="btn btn-amber">Send enquiry <ArrowRight size={16} /></button>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ color: '#E6E6E6', borderColor: 'rgba(255,255,255,0.25)' }}>
              Send on WhatsApp
            </a>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--night-text)' }}>
            Opens your email or WhatsApp with these details filled in. Nothing is stored on this site.
          </p>
        </form>
      </div>
    </section>
  )
}

export default function MasterclassPage() {
  return (
    <>
      <McNav />
      <main>
        <Hero />
        <Programs />
        <Curriculum />
        <Takeaways />
        <Instructor />
        <Faq />
        <Enquiry />
      </main>
      <Footer />
    </>
  )
}
