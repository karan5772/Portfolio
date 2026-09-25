// schema.org JSON-LD, injected into the static HTML at build time (see vite.config.js)
// so crawlers see it without running JS. Built from the same data the pages render.
import { data } from '../data/portfolio'
import { masterclass as mc, SITE_URL, PAGE_URL } from '../data/masterclass'

const PERSON_ID = `${SITE_URL}/#person`

const person = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: data.name,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}${data.profileImage}`,
  email: `mailto:${data.email}`,
  jobTitle: 'Software Engineer & AI Trainer',
  description: data.summary,
  address: { '@type': 'PostalAddress', addressRegion: 'Rajasthan', addressCountry: 'IN' },
  alumniOf: data.education.map(e => ({ '@type': 'EducationalOrganization', name: e.institution })),
  knowsAbout: ['Generative AI', 'AI in education', 'Prompt engineering', ...data.skills],
  hasCredential: data.achievements.map(a => ({
    '@type': 'EducationalOccupationalCredential',
    name: a.title,
    recognizedBy: { '@type': 'Organization', name: a.org },
  })),
  sameAs: data.social.map(s => s.url),
}

export const portfolioSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    person,
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: `${data.name} | Software Engineer`,
      publisher: { '@id': PERSON_ID },
    },
  ],
}

export const masterclassSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    person,
    {
      '@type': 'WebPage',
      '@id': `${PAGE_URL}#webpage`,
      url: PAGE_URL,
      name: 'AI Masterclass for Teachers & Students',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${PAGE_URL}#service` },
      breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'Service',
      '@id': `${PAGE_URL}#service`,
      name: 'AI Masterclasses, Webinars & Workshops',
      serviceType: 'AI training for education',
      description:
        'Hands-on AI webinars, masterclasses and faculty development programmes for teachers, students, schools and colleges.',
      provider: { '@id': PERSON_ID },
      areaServed: [{ '@type': 'Country', name: 'India' }, 'Online'],
      audience: mc.audiences.map(a => ({ '@type': 'EducationalAudience', educationalRole: a.label.replace('For ', '') })),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Session formats',
        itemListElement: mc.formats.map(f => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: f.name, description: `${f.duration} · ${f.mode}. ${f.detail}` },
        })),
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${PAGE_URL}#faq`,
      mainEntity: mc.faqs.map(f => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${PAGE_URL}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: data.name, item: `${SITE_URL}/` },
        { '@type': 'ListItem', position: 2, name: 'AI Masterclass', item: PAGE_URL },
      ],
    },
  ],
}
