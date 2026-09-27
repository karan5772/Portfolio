import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import Footer from '@/src/components/Footer'
import JsonLd from '@/src/seo/JsonLd'
import { SITE_URL } from '@/src/data/masterclass'
import { templatePrices, updatesPlan, domainNote, formatINR } from '@/content/academic/pricing'
import { contact, templates, included, steps, faqs, whyMe, budget } from '@/content/academic/showcase'

const PATH = '/academic/'
const TITLE = 'Research websites for professors | Karan Kumar'
const DESCRIPTION =
  'Personal and lab websites for university faculty, built and kept up to date for you. Three templates, your own domain, publications and Google Scholar links. From ₹10,000 one-time.'

const SHARE_IMAGE = { url: '/academic/og/academic.4c23af66.png', width: 1200, height: 630, alt: 'Research websites for professors: three templates by Karan Kumar' }

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { type: 'website', url: PATH, siteName: 'Karan Kumar', locale: 'en_IN', title: TITLE, description: DESCRIPTION, images: [SHARE_IMAGE] },
  twitter: { card: 'summary_large_image', creator: '@karankumar5772', title: TITLE, description: DESCRIPTION, images: [SHARE_IMAGE] },
}

const WHATSAPP = `${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappText)}`
const MAILTO = `mailto:${contact.email}?subject=${encodeURIComponent(contact.emailSubject)}`
const WHATSAPP_BUDGET = `${contact.whatsapp}?text=${encodeURIComponent(contact.budgetText)}`

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${SITE_URL}${PATH}#service`,
      name: 'Academic websites for professors',
      description: DESCRIPTION,
      serviceType: 'Website design and maintenance for university faculty',
      provider: { '@id': `${SITE_URL}/#person` },
      areaServed: { '@type': 'Country', name: 'India' },
      offers: [
        ...templatePrices.map((t) => ({ '@type': 'Offer', name: t.name, price: t.price, priceCurrency: 'INR', url: `${SITE_URL}${templates[t.id].demo}` })),
        { '@type': 'Offer', name: updatesPlan.name, price: updatesPlan.price, priceCurrency: 'INR' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
}

function Header() {
  return (
    <header className="px" style={{ position: 'absolute', inset: '0 0 auto 0', zIndex: 10, paddingTop: '1.25rem' }}>
      <div className="wrap flex items-center justify-between" style={{ gap: '1rem' }}>
        <Link href="/" style={{ fontWeight: 700, fontSize: '1.15rem', color: 'var(--ink)', textDecoration: 'none' }}>
          Karan<span style={{ color: 'var(--sage)' }}>.</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1" aria-label="Page sections">
          <a href="#templates" className="nav-link">Templates</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <Link href="/" className="nav-link" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <ArrowLeft size={15} aria-hidden="true" /> Portfolio
          </Link>
        </nav>
        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-sage btn-sm">Chat on WhatsApp</a>
      </div>
    </header>
  )
}

export default function AcademicPage() {
  return (
    <>
      <JsonLd data={schema} />
      <Header />
      <main>
        <section className="ac-hero px">
          <div className="wrap ac-hero-grid">
            <div>
            <h1 className="serif">Research websites for professors, built and maintained for you.</h1>
            <p className="lead" style={{ maxWidth: '54ch', marginBottom: '2rem' }}>
              A clean site for your work, publications, and students. I set it up, you send updates on
              WhatsApp, I keep it current.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href="#templates" className="btn btn-sage">See the templates</a>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Chat on WhatsApp</a>
            </div>
            </div>

            {/* The three templates, overlapped, so the product is visible before scrolling. Decorative: the same
                screenshots appear with full descriptions in the next section, so they are hidden from screen readers. */}
            <div className="ac-stack" aria-hidden="true">
              {['minimal', 'lab', 'modern'].map((id, i) => (
                <div key={id} className={`ac-stack-item ac-stack-${i}`}>
                  <Image src={templates[id].shot} alt="" width={1440} height={900} sizes="(max-width: 900px) 0px, 420px" priority />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="templates" className="sec px sec-alt" style={{ scrollMarginTop: '1rem' }}>
          <div className="wrap">
            <div className="sec-head">
              <h2 className="h2">Three templates</h2>
              <p>Each demo is a complete site filled with a fictional professor. Open one and click around as a visitor would.</p>
            </div>
            <div>
              {templatePrices.map((t, i) => {
                const tpl = templates[t.id]
                return (
                  <article key={t.id} className="proj-row">
                    <a href={tpl.demo} target="_blank" rel="noopener noreferrer" className="ac-shot" style={{ order: i % 2 === 0 ? 0 : 1 }} aria-label={`Open the ${t.name} demo in a new tab`}>
                      <Image src={tpl.shot} alt={`Screenshot of the ${t.name} template`} width={1440} height={900} sizes="(max-width: 700px) 100vw, 560px" />
                    </a>
                    <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                      <h3 className="serif" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.1rem)', lineHeight: 1.15, color: 'var(--ink)', marginBottom: '0.5rem' }}>{t.name}</h3>
                      <p style={{ fontWeight: 600, color: 'var(--ink)', marginBottom: '0.75rem' }}>{t.audience}</p>
                      <p className="text" style={{ marginBottom: '1rem' }}>{tpl.highlight}</p>
                      <p className="ac-price-inline" style={{ marginBottom: '1.5rem' }}>{formatINR(t.price)} one-time</p>
                      <a href={tpl.demo} target="_blank" rel="noopener noreferrer" className="btn btn-sage">
                        View live demo <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="sec px">
          <div className="wrap">
            <div className="sec-head"><h2 className="h2">What’s included</h2></div>
            <div className="ac-included">
              {included.map((item) => (
                <div key={item.title}>
                  <h3 className="h3" style={{ marginBottom: '0.4rem' }}>{item.title}</h3>
                  <p className="text">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="sec px sec-alt">
          <div className="wrap ac-why">
            <div className="ac-why-head">
              <h2 className="h2" style={{ marginBottom: '0.9rem' }}>Why not build it yourself, or with AI?</h2>
              <p className="lead">{whyMe.intro}</p>
            </div>
            <ul className="ac-why-list">
              {whyMe.reasons.map((r) => (
                <li key={r.title}>
                  <h3 className="h3" style={{ marginBottom: '0.35rem' }}>{r.title}</h3>
                  <p className="text">{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="sec px">
          <div className="wrap">
            <div className="sec-head"><h2 className="h2">How it works</h2></div>
            <ol className="mc-steps">
              {steps.map((s) => (
                <li key={s.title}>
                  <h3 className="h3" style={{ marginBottom: '0.4rem' }}>{s.title}</h3>
                  <p className="text">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="pricing" className="sec px sec-alt" style={{ scrollMarginTop: '1rem' }}>
          <div className="wrap"><div style={{ maxWidth: 860 }}>
            <div className="sec-head">
              <h2 className="h2">Pricing</h2>
              <p>One payment for the site. The yearly plan keeps it hosted and up to date.</p>
            </div>
            <ul className="ac-prices">
              {templatePrices.map((t) => (
                <li key={t.id}>
                  <div>
                    <h3 className="h3">{t.name}</h3>
                    <p className="muted">{t.audience} <a href={templates[t.id].demo} target="_blank" rel="noopener noreferrer" className="link" style={{ fontSize: '0.9375rem' }}>View live demo</a></p>
                  </div>
                  <p className="ac-amount">{formatINR(t.price)}<span className="ac-period">one-time</span></p>
                </li>
              ))}
              <li className="ac-plan">
                <div>
                  <h3 className="h3">{updatesPlan.name}</h3>
                  <p className="muted">{updatesPlan.includes.map((x, i) => (i ? x[0].toLowerCase() + x.slice(1) : x)).join(', ')}.</p>
                </div>
                <p className="ac-amount">{formatINR(updatesPlan.price)}<span className="ac-period">per {updatesPlan.period}</span></p>
              </li>
            </ul>
            <p className="text" style={{ marginTop: '1.1rem' }}><strong style={{ color: 'var(--ink)' }}>Domain not included.</strong> {domainNote.replace(/^Prices do not include the domain\. /, '')}</p>

            <div className="ac-budget">
              <div>
                <h3 className="h3" style={{ marginBottom: '0.3rem' }}>{budget.title}</h3>
                <p className="text">{budget.text}</p>
              </div>
              <a href={WHATSAPP_BUDGET} target="_blank" rel="noopener noreferrer" className="btn btn-sage" style={{ whiteSpace: 'nowrap' }}>Send your budget on WhatsApp</a>
            </div>
          </div></div>
        </section>

        <section id="faq" className="sec px" style={{ scrollMarginTop: '1rem' }}>
          <div className="wrap">
            <div className="sec-head"><h2 className="h2">Questions</h2></div>
            <div style={{ maxWidth: 860 }}>
              {faqs.map((f) => (
                <details key={f.q} className="ac-faq">
                  <summary>{f.q}</summary>
                  <p className="text measure">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="sec px" style={{ background: 'var(--night)' }}>
          <div className="wrap">
            <h2 className="serif" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', lineHeight: 1.08, color: '#F0EBE3', maxWidth: '18ch', marginBottom: '1rem' }}>
              Want a site like this?
            </h2>
            <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: 'var(--night-text)', maxWidth: '46ch', marginBottom: '2rem' }}>
              Message me with the template you like, or just your profile link, and I will tell you what your
              site would look like. {contact.location}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn btn-amber">Chat on WhatsApp</a>
              <a href={MAILTO} className="btn btn-outline" style={{ color: '#E6E6E6', borderColor: 'rgba(255,255,255,0.3)' }}>Send an email</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
