import { SITE_URL } from '@/src/data/masterclass'
import { plainName } from './lib'

/**
 * schema.org Person for a demo or preview profile.
 * @param {import('@/types/academic').AcademicProfile} p
 * @param {string} pageUrl absolute URL of the page
 * @param {{ fictional?: boolean }} [opts]
 */
export function personSchema(p, pageUrl, { fictional = false } = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: plainName(p.name),
    honorificPrefix: p.name.match(/^(Dr\.|Prof\.)/)?.[0],
    jobTitle: p.title,
    description: fictional ? `${p.shortBio} (Fictional profile on a website template demo.)` : p.shortBio,
    url: pageUrl,
    image: p.photo ? `${SITE_URL}${p.photo}` : undefined,
    email: `mailto:${p.email}`,
    worksFor: { '@type': 'CollegeOrUniversity', name: p.institution, department: { '@type': 'Organization', name: p.department } },
    alumniOf: p.education.map((e) => ({ '@type': 'CollegeOrUniversity', name: e.institution })),
    knowsAbout: p.researchAreas,
    // Demo links point at service homepages, not real profiles, so they are not claimed as sameAs
    sameAs: fictional ? undefined : Object.values(p.links).filter(Boolean),
  }
}
