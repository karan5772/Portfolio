import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Plus, Minus, Menu, X } from 'lucide-react'
import { BrandSvg, SOCIAL_ICONS, TOOL_ICONS } from '../lib/brandIcons'
import { masterclass as mc, instructor } from '../data/masterclass'
import Footer from '../components/Footer'

const up = (d = 0) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay: d, ease: [0.16, 1, 0.3, 1] },
})

const inView = (d = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.55, delay: d },
})

const NAV = [
  ['Programs', 'programs'],
  ['Curriculum', 'curriculum'],
  ['Instructor', 'instructor'],
  ['FAQ', 'faq'],
]

function SectionHead({ eyebrow, title, intro }) {
  return (
    <motion.div {...inView()} style={{ marginBottom: '3rem', maxWidth: '62ch' }}>
      <p className="eyebrow" style={{ marginBottom: '0.9rem' }}>{eyebrow}</p>
      <h2 className="serif text-ink" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.1, marginBottom: intro ? '1rem' : 0 }}>
        {title}
      </h2>
      {intro && <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#5E5248' }}>{intro}</p>}
    </motion.div>
  )
}

/* ── Nav ─────────────────────────────────────── */
function McNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 px transition-all duration-300 ${
          scrolled ? 'py-3 bg-white/95 backdrop-blur-md border-b border-[#EBEBEB]' : 'py-5'
        }`}
      >
        <div className="wrap flex items-center justify-between">
          <a href="/" style={{ fontWeight: 700, fontSize: '1.1rem', color: '#1A1410', textDecoration: 'none', letterSpacing: '-0.01em' }}>
            Karan<span style={{ color: '#2A6049' }}>.</span>
            <span className="eyebrow hidden sm:inline" style={{ marginLeft: 10, fontSize: '0.6rem' }}>AI Masterclass</span>
          </a>

          <nav className="hidden md:flex items-center gap-1" aria-label="Page sections">
            {NAV.map(([label, id]) => (
              <a key={id} href={`#${id}`} className="mc-navlink">{label}</a>
            ))}
            <a href="/" className="mc-navlink" style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              <ArrowLeft size={13} /> Portfolio
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a href="#enquire" className="hidden sm:inline-flex btn-sage" style={{ fontSize: '0.8rem', padding: '0.5rem 1.1rem' }}>
              Book a session
            </a>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-[#EBEBEB] text-[#8A7B6C]"
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{ position: 'fixed', inset: 0, zIndex: 60, background: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
          >
            <button onClick={() => setOpen(false)} aria-label="Close menu"
              style={{ position: 'absolute', top: '1.5rem', right: 'clamp(1.25rem, 5vw, 4.5rem)', background: 'none', border: 'none', color: '#8A7B6C', cursor: 'pointer' }}>
              <X size={22} />
            </button>
            {[...NAV, ['Book a session', 'enquire']].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}
                style={{ fontWeight: 700, fontSize: 'clamp(1.65rem, 7vw, 2.6rem)', color: '#1A1410', textDecoration: 'none' }}>
                {label}
              </a>
            ))}
            <a href="/" style={{ marginTop: '1rem', color: '#2A6049', fontWeight: 600, textDecoration: 'none' }}>← Back to portfolio</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/* ── Hero ────────────────────────────────────── */
function Hero() {
  return (
    <section className="px" style={{ paddingTop: '8rem', paddingBottom: '4.5rem' }}>
      <div className="wrap mc-hero-grid">
        <div>
          <motion.p {...up(0.1)} className="eyebrow" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1.25rem' }}>
            <span className="avail-dot" /> {mc.eyebrow}
          </motion.p>

          <motion.h1
            {...up(0.15)}
            className="serif"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 4.9rem)', color: '#1A1410', lineHeight: 1.04, letterSpacing: '-0.025em', marginBottom: '1.4rem' }}
          >
            Teach smarter.<br />
            Learn faster.<br />
            <span className="serif-italic" style={{ color: '#2A6049' }}>With AI.</span>
          </motion.h1>

          <motion.p {...up(0.25)} style={{ fontSize: '1.06rem', lineHeight: 1.8, color: '#5E5248', maxWidth: '52ch', marginBottom: '2rem' }}>
            Hands-on AI webinars and masterclasses for <strong style={{ color: '#1A1410' }}>teachers</strong>,{' '}
            <strong style={{ color: '#1A1410' }}>students</strong> and <strong style={{ color: '#1A1410' }}>institutions</strong>.
            Each session is planned around your subject, so people leave with things they can use in class the next day.
          </motion.p>

          <motion.div {...up(0.33)} style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2.25rem' }}>
            <a href="#enquire" className="btn-sage">Book a session <ArrowRight size={15} /></a>
            <a href="#curriculum" className="btn-outline">See the curriculum</a>
          </motion.div>

          <motion.ul {...up(0.41)} style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['Ex-Google Student Ambassador, Gemini', 'Gen AI engineer', 'Online & on-campus'].map(t => (
              <li key={t} className="tag">{t}</li>
            ))}
          </motion.ul>
        </div>

        {/* Demo card: what a live exercise looks like */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mc-demo"
          aria-label="Example exercise from the masterclass"
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.1rem' }}>
            <span className="tag tag-amber">Live exercise · Module 03</span>
            <span style={{ display: 'flex', gap: 5 }}>
              {[0, 1, 2].map(i => <span key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: '#E5E2DD' }} />)}
            </span>
          </div>

          <p className="eyebrow" style={{ fontSize: '0.6rem', marginBottom: 6 }}>Teacher prompt</p>
          <div className="mc-bubble mc-bubble-user">
            You're an experienced Class 8 science teacher. Write a 5-question quiz on
            <strong> photosynthesis</strong>: 3 easy, 2 challenging. Add an answer key and
            one line explaining each answer.
          </div>

          <p className="eyebrow" style={{ fontSize: '0.6rem', margin: '1rem 0 6px' }}>AI draft</p>
          <div className="mc-bubble">
            <p style={{ fontWeight: 600, color: '#1A1410', marginBottom: 6 }}>Q1 · Easy</p>
            <p style={{ marginBottom: 8 }}>Which gas do plants absorb from the air during photosynthesis?</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 10 }}>
              {['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'].map((o, i) => (
                <span key={o} className={`mc-opt${i === 1 ? ' mc-opt-ok' : ''}`}>
                  {String.fromCharCode(97 + i)}) {o} {i === 1 && <Check size={12} />}
                </span>
              ))}
            </div>
            <p style={{ fontSize: '0.75rem', color: '#8A7B6C' }}>+ 4 more questions · answer key · explanations</p>
          </div>

          <div style={{ marginTop: '1.1rem', paddingTop: '0.9rem', borderTop: '1px dashed #E5E2DD', display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.78rem', color: '#2A6049', fontWeight: 600 }}>
            <Check size={14} /> Then check it: is every answer actually correct?
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Audiences ───────────────────────────────── */
function Audiences() {
  return (
    <section id="programs" className="sec px" style={{ background: '#FAFAF8', borderTop: '1px solid #F0EEEA', borderBottom: '1px solid #F0EEEA' }}>
      <div className="wrap">
        <SectionHead
          eyebrow="Who it's for"
          title="Built for the people in the classroom."
          intro="Teachers, students and institutions need different things from AI, so each group gets its own examples, exercises and pace."
        />
        <div className="mc-grid-3">
          {mc.audiences.map((a, i) => (
            <motion.article key={a.key} {...inView(i * 0.08)} className="mc-card">
              <span className={i === 1 ? 'tag tag-amber' : 'tag'} style={{ alignSelf: 'flex-start' }}>{a.label}</span>
              <h3 className="serif text-ink" style={{ fontSize: '1.4rem', lineHeight: 1.25, margin: '1rem 0 1.1rem' }}>{a.title}</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {a.points.map(p => (
                  <li key={p} style={{ display: 'flex', gap: 10, fontSize: '0.9rem', lineHeight: 1.55, color: '#5E5248' }}>
                    <Check size={15} style={{ color: '#2A6049', flexShrink: 0, marginTop: 3 }} />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Formats ─────────────────────────────────── */
function Formats() {
  return (
    <section id="formats" className="sec px">
      <div className="wrap">
        <SectionHead eyebrow="Formats" title="Pick the format that fits." intro="From a single online webinar to a multi-day faculty development programme." />
        <div className="mc-grid-3">
          {mc.formats.map((f, i) => (
            <motion.div key={f.name} {...inView(i * 0.08)} className={`mc-card${f.featured ? ' mc-card-featured' : ''}`}>
              {f.featured && <span className="mc-ribbon">Recommended</span>}
              <p className="eyebrow" style={{ color: f.featured ? '#A8C8B8' : undefined }}>{f.mode}</p>
              <h3 className="serif" style={{ fontSize: '1.75rem', margin: '0.6rem 0 0.25rem', color: f.featured ? '#FFFFFF' : '#1A1410' }}>{f.name}</h3>
              <p style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.85rem', color: f.featured ? '#D4964A' : '#C87533', marginBottom: '1.1rem' }}>{f.duration}</p>
              <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: f.featured ? '#C8D8D0' : '#5E5248', flexGrow: 1 }}>{f.detail}</p>
              <p style={{ marginTop: '1.4rem', paddingTop: '1rem', borderTop: `1px solid ${f.featured ? 'rgba(255,255,255,0.14)' : '#EBEBEB'}`, fontSize: '0.8rem', color: f.featured ? '#A8C8B8' : '#8A7B6C' }}>
                Best for: <strong style={{ color: f.featured ? '#FFFFFF' : '#1A1410', fontWeight: 600 }}>{f.best}</strong>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Curriculum ──────────────────────────────── */
function Curriculum() {
  return (
    <section id="curriculum" className="sec px" style={{ background: '#FAFAF8', borderTop: '1px solid #F0EEEA', borderBottom: '1px solid #F0EEEA' }}>
      <div className="wrap">
        <SectionHead
          eyebrow="Curriculum"
          title="What we cover."
          intro="Seven modules. Each session uses the ones that fit your audience and time slot, and every exercise uses examples from your field."
        />

        <ol style={{ listStyle: 'none' }}>
          {mc.curriculum.map((m, i) => (
            <motion.li key={m.title} {...inView(i * 0.04)} className="mc-module">
              <span className="mc-module-num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="serif text-ink" style={{ fontSize: '1.3rem', lineHeight: 1.25, marginBottom: 6 }}>{m.title}</h3>
                <p style={{ fontSize: '0.92rem', lineHeight: 1.7, color: '#5E5248', maxWidth: '62ch' }}>{m.summary}</p>
              </div>
              <div className="mc-module-topics">
                {m.topics.map(t => <span key={t} className="chip">{t}</span>)}
              </div>
            </motion.li>
          ))}
        </ol>

        <motion.div {...inView()} style={{ marginTop: '3.5rem' }}>
          <p className="eyebrow" style={{ marginBottom: '1rem' }}>Tailored to your field</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {mc.fields.map(f => <span key={f} className="skills-cat-item" style={{ fontSize: '0.85rem', padding: '6px 13px' }}>{f}</span>)}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/* ── Tools + takeaways ───────────────────────── */
function ToolsAndTakeaways() {
  return (
    <section className="sec px">
      <div className="wrap">
        <SectionHead eyebrow="Tools" title="Tools you'll actually use." intro="All the exercises work on free plans. No installs or coding needed unless you're in the engineering track." />
        <motion.div {...inView()} className="mc-tools">
          {mc.tools.map(t => (
            <div key={t.name} className="mc-tool">
              <BrandSvg icon={TOOL_ICONS[t.icon]} size={22} colored />
              <span>{t.name}</span>
            </div>
          ))}
        </motion.div>

        <div style={{ marginTop: '5rem' }}>
          <SectionHead eyebrow="Takeaways" title="What participants take home." />
          <div className="mc-grid-4">
            {mc.takeaways.map((t, i) => (
              <motion.div key={t.title} {...inView(i * 0.06)} className="ach-card" style={{ flexDirection: 'column', gap: '0.5rem' }}>
                <span className="ach-idx">{String(i + 1).padStart(2, '0')}</span>
                <h3 style={{ fontWeight: 700, fontSize: '1.02rem', color: '#1A1410' }}>{t.title}</h3>
                <p style={{ fontSize: '0.88rem', lineHeight: 1.65, color: '#5E5248' }}>{t.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── Instructor ──────────────────────────────── */
function Instructor() {
  return (
    <section id="instructor" className="sec px" style={{ background: '#FAFAF8', borderTop: '1px solid #F0EEEA', borderBottom: '1px solid #F0EEEA' }}>
      <div className="wrap">
        <div className="mc-instructor">
          <motion.div {...inView()} className="mc-instructor-side">
            <div className="hero-portrait" style={{ width: 'clamp(160px, 20vw, 240px)', height: 'clamp(160px, 20vw, 240px)', marginBottom: '1.5rem' }}>
              <img src={instructor.image} alt={`${instructor.name}, AI trainer and Gen AI engineer`} width="240" height="240" loading="lazy" />
            </div>
            <p className="eyebrow" style={{ marginBottom: '0.6rem' }}>Your instructor</p>
            <h2 className="serif text-ink" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', lineHeight: 1.1, marginBottom: '1rem' }}>
              {instructor.name}
            </h2>
            <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#5E5248', marginBottom: '1.25rem', maxWidth: '46ch' }}>
              I build AI products, including RAG tutors, AI code reviewers and Gemini-powered assistants,
              and I teach people how to use these tools well. As a <strong style={{ color: '#1A1410' }}>Google Student
              Ambassador for Gemini</strong> I ran workshops that got students using AI for real work.
              These masterclasses continue that work for classrooms.
            </p>
            <p style={{ fontSize: '0.88rem', color: '#8A7B6C', marginBottom: '1.5rem' }}>
              {instructor.education.degree} · {instructor.education.institution.replace('B K Birla Institute of Engineering & Technology', 'BKBIET')}
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
              {instructor.social.map(({ platform, url, icon }) => {
                const entry = SOCIAL_ICONS[icon]
                if (!entry) return null
                return (
                  <a key={platform} href={url} target="_blank" rel="noopener noreferrer me" title={entry.label} aria-label={entry.label} className="soc">
                    <BrandSvg icon={entry.icon} size={16} />
                  </a>
                )
              })}
              <a href="/" className="btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', marginLeft: 4 }}>
                Full portfolio <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.div>

          <div>
            <motion.p {...inView()} className="eyebrow" style={{ marginBottom: '1rem' }}>Experience</motion.p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
              {instructor.experience.map((e, i) => (
                <motion.div key={e.company} {...inView(i * 0.06)} className="exp-card" style={{ padding: '1.25rem 1.5rem', background: '#FFFFFF' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.5rem', flexWrap: 'wrap', marginBottom: 4 }}>
                    <h3 style={{ fontWeight: 700, fontSize: '1rem', color: '#1A1410' }}>{e.position}</h3>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.7rem', color: '#8A7B6C' }}>{e.period}</span>
                  </div>
                  <p style={{ fontSize: '0.85rem', fontWeight: 600, color: e.type === 'ambassador' ? '#C87533' : '#2A6049', marginBottom: 6 }}>{e.company}</p>
                  <p style={{ fontSize: '0.87rem', lineHeight: 1.7, color: '#5E5048' }}>{e.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.p {...inView()} className="eyebrow" style={{ marginBottom: '1rem' }}>AI I've built for learning</motion.p>
            <div className="mc-grid-2" style={{ marginBottom: '2.5rem' }}>
              {mc.relevantWork.map((w, i) => (
                <motion.a key={w.title} {...inView(i * 0.05)} href={w.url} target="_blank" rel="noopener noreferrer" className="mc-work">
                  <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 700, color: '#1A1410', marginBottom: 4 }}>
                    {w.title} <ArrowUpRight size={15} className="mc-work-arrow" />
                  </span>
                  <span style={{ fontSize: '0.84rem', lineHeight: 1.6, color: '#5E5248' }}>{w.text}</span>
                </motion.a>
              ))}
            </div>

            <motion.p {...inView()} className="eyebrow" style={{ marginBottom: '1rem' }}>Certifications</motion.p>
            <motion.div {...inView()} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
              {instructor.certifications.map(c => (
                <span key={c.title} className="tag" style={{ background: '#FFFFFF', whiteSpace: 'normal' }}>{c.title} · {c.org}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── How it works ────────────────────────────── */
function Steps() {
  return (
    <section className="sec px">
      <div className="wrap">
        <SectionHead eyebrow="How it works" title="From first message to session day." />
        <div className="mc-grid-4">
          {mc.steps.map((s, i) => (
            <motion.div key={s.title} {...inView(i * 0.07)} className="mc-step">
              <span className="mc-step-num">{i + 1}</span>
              <h3 style={{ fontWeight: 700, fontSize: '1.05rem', color: '#1A1410', margin: '1rem 0 0.4rem' }}>{s.title}</h3>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.65, color: '#5E5248' }}>{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── FAQ ─────────────────────────────────────── */
function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="sec px" style={{ background: '#FAFAF8', borderTop: '1px solid #F0EEEA' }}>
      <div className="wrap" style={{ maxWidth: 860 }}>
        <SectionHead eyebrow="FAQ" title="Questions people usually ask." />
        <div>
          {mc.faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <div key={f.q} className="mc-faq">
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  className="mc-faq-q"
                >
                  <span>{f.q}</span>
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </button>
                {/* Answer stays in the DOM (hidden) so crawlers and find-in-page still see it */}
                <div id={`faq-${i}`} hidden={!isOpen} style={{ paddingBottom: '1.25rem', fontSize: '0.95rem', lineHeight: 1.8, color: '#5E5248', maxWidth: '70ch' }}>
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
const AUDIENCES = ['Teachers / Faculty', 'Students', 'Mixed group', 'Other']
const FORMATS = ['Webinar (60–90 min)', 'Masterclass (3 hrs)', 'Workshop series / FDP', 'Not sure yet']

function Enquiry() {
  const [form, setForm] = useState({
    name: '', org: '', audience: AUDIENCES[0], format: FORMATS[1], size: '', field: '', date: '', notes: '',
  })
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const body = [
    'Hi Karan,',
    '',
    "I'd like to book an AI session.",
    '',
    `Name: ${form.name}`,
    `Institution / organisation: ${form.org}`,
    `Audience: ${form.audience}`,
    `Format: ${form.format}`,
    `Approx. participants: ${form.size}`,
    `Subject / field: ${form.field}`,
    `Preferred dates: ${form.date}`,
    '',
    form.notes,
  ].join('\n')

  const subject = `AI Masterclass enquiry${form.org ? ` — ${form.org}` : ''}`
  const mailto = `mailto:${instructor.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  const whatsapp = `https://wa.me/${instructor.phone.replace('+', '')}?text=${encodeURIComponent(body)}`

  const submit = (e) => {
    e.preventDefault()
    window.location.href = mailto
  }

  return (
    <section id="enquire" className="sec px" style={{ background: '#0C0C0C' }}>
      <div className="wrap mc-enquire">
        <motion.div {...inView()}>
          <h2 className="serif" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.8rem)', color: '#F0EBE3', lineHeight: 0.98, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
            Bring AI to<br /><span style={{ color: '#D4964A' }}>your classroom.</span>
          </h2>
          <p style={{ fontSize: '1rem', lineHeight: 1.8, color: '#8A8A8A', maxWidth: '40ch', marginBottom: '2rem' }}>
            Tell me about your group and I'll send back a draft agenda and a quote, usually within 24 hours.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem', marginBottom: '2rem' }}>
            {['Sessions for teachers, students or both', 'Agenda planned around your syllabus', 'Online, or on-campus in Rajasthan'].map(t => (
              <li key={t} style={{ display: 'flex', gap: 10, alignItems: 'center', color: '#C8C8C8', fontSize: '0.92rem' }}>
                <Check size={15} style={{ color: '#6FB08C' }} /> {t}
              </li>
            ))}
          </ul>
          <a href={`mailto:${instructor.email}`} style={{ color: '#A8C8B8', fontWeight: 600, textDecoration: 'none', borderBottom: '1px solid rgba(168,200,184,0.3)', paddingBottom: 4 }}>
            {instructor.email}
          </a>
        </motion.div>

        <motion.form {...inView(0.1)} onSubmit={submit} className="mc-form" aria-label="Session enquiry">
          <div className="mc-form-row">
            <label>Your name<input required value={form.name} onChange={set('name')} autoComplete="name" /></label>
            <label>School / college / organisation<input value={form.org} onChange={set('org')} autoComplete="organization" /></label>
          </div>
          <div className="mc-form-row">
            <label>Audience
              <select value={form.audience} onChange={set('audience')}>{AUDIENCES.map(a => <option key={a}>{a}</option>)}</select>
            </label>
            <label>Format
              <select value={form.format} onChange={set('format')}>{FORMATS.map(a => <option key={a}>{a}</option>)}</select>
            </label>
          </div>
          <div className="mc-form-row">
            <label>Approx. participants<input inputMode="numeric" value={form.size} onChange={set('size')} placeholder="e.g. 40" /></label>
            <label>Preferred dates<input value={form.date} onChange={set('date')} placeholder="e.g. mid-November" /></label>
          </div>
          <label>Subject / field<input value={form.field} onChange={set('field')} placeholder="e.g. Class 9–10 science, B.Com, CSE" /></label>
          <label>Anything else?<textarea rows={3} value={form.notes} onChange={set('notes')} placeholder="Goals, experience level, special requests…" /></label>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button type="submit" className="btn-amber">Send enquiry <ArrowRight size={15} /></button>
            <a href={whatsapp} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ color: '#E0E0E0', borderColor: 'rgba(255,255,255,0.18)' }}>
              Send on WhatsApp
            </a>
          </div>
          <p style={{ fontSize: '0.72rem', color: '#6A6A6A', marginTop: '0.25rem' }}>
            Opens your email or WhatsApp with these details filled in. Nothing is stored on this site.
          </p>
        </motion.form>
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
        <Audiences />
        <Formats />
        <Curriculum />
        <ToolsAndTakeaways />
        <Instructor />
        <Steps />
        <Faq />
        <Enquiry />
      </main>
      <Footer />
    </>
  )
}
