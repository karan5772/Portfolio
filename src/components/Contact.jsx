import { BrandSvg, SOCIAL_ICONS } from '../lib/brandIcons'
import { data } from '../data/portfolio'

const socialLinks = [
  { key: 'github',   handle: 'github.com/karan5772' },
  { key: 'linkedin', handle: 'linkedin.com/in/karan5772' },
  { key: 'twitter',  handle: 'x.com/karankumar5772' },
  { key: 'hashnode', handle: 'hashnode.com/@karan5772' },
]

// Pre-filled so a prospect never faces a blank email
const MAILTO = `mailto:${data.email}?subject=${encodeURIComponent('Project enquiry via karanchoudhary.dev')}&body=${encodeURIComponent('Hi Karan,\n\nWhat I need built: \nTimeline: \nBudget range (optional): \n')}`
const WHATSAPP = `https://wa.me/${data.phone.replace('+', '')}?text=${encodeURIComponent('Hi Karan, found you via karanchoudhary.dev. I have a project to discuss.')}`

export default function Contact() {
  return (
    <section id="contact" className="sec px" style={{ background: 'var(--night)' }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '4rem', alignItems: 'start' }}>

          <div>
            <h2 className="serif" style={{ fontSize: 'clamp(2.5rem, 6.5vw, 4.75rem)', color: '#F0EBE3', lineHeight: 1.02, marginBottom: '1.5rem' }}>
              Let's work<br />
              <span style={{ color: '#D4964A' }}>together.</span>
            </h2>

            <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: 'var(--night-text)', maxWidth: '40ch', marginBottom: '2rem' }}>
              I'm available for freelance projects, contract work and full-time roles. Tell me what you're
              building and when you need it. I reply within 24 hours.
            </p>

            <a href={MAILTO} className="btn btn-amber">Email me</a>
          </div>

          <div>
            <a href={MAILTO} className="contact-row">
              <span className="contact-row-label">Email</span>
              <span>{data.email}</span>
            </a>
            <a href={`tel:${data.phone}`} className="contact-row">
              <span className="contact-row-label">Phone</span>
              <span>{data.phone}</span>
            </a>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="contact-row">
              <span className="contact-row-label">WhatsApp</span>
              <span>Chat on WhatsApp</span>
            </a>
            <div className="contact-row">
              <span className="contact-row-label">Location</span>
              <span>Rajasthan, India</span>
            </div>

            {socialLinks.map(({ key, handle }) => {
              const entry = SOCIAL_ICONS[key]
              const socialItem = data.social.find(s => s.icon === key)
              if (!entry || !socialItem) return null
              return (
                <a key={key} href={socialItem.url} target="_blank" rel="noopener noreferrer me" className="contact-row">
                  <span className="contact-row-label">
                    <BrandSvg icon={entry.icon} size={16} />
                    {entry.label}
                  </span>
                  <span>{handle}</span>
                </a>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
