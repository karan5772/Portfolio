// Helpers shared by every academic template. Templates render from AcademicProfile data only,
// so anything that derives display text from that data lives here.

const TITLES = /^(dr\.?|prof\.?|professor)\s+/i

/** "Dr. Meera Kulkarni" -> "Meera Kulkarni" */
export const plainName = (name) => {
  let n = name.trim()
  while (TITLES.test(n)) n = n.replace(TITLES, '')
  return n
}

/** "Dr. Meera Kulkarni" -> "MK" */
export const initials = (name) => {
  const parts = plainName(name).split(/\s+/).filter(Boolean)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ''
  return (first + last).toUpperCase()
}

const normalise = (s) => s.toLowerCase().replace(/[^a-z]/g, '')

/**
 * Splits an author string and marks the profile owner's own name, which templates bold.
 * Matches "M. Kulkarni", "Meera Kulkarni" and "Kulkarni, M." forms.
 * @param {string} authors
 * @param {string} ownerName
 * @returns {{ name: string, own: boolean }[]}
 */
export const splitAuthors = (authors, ownerName) => {
  const parts = plainName(ownerName).split(/\s+/)
  const first = parts[0] ?? ''
  const last = parts[parts.length - 1] ?? ''
  const variants = new Set([
    normalise(`${first} ${last}`),
    normalise(`${first[0]} ${last}`),
    normalise(`${last} ${first[0]}`),
  ])
  return authors
    .split(/,\s*|\s+and\s+/)
    .map((a) => a.trim())
    .filter(Boolean)
    .map((name) => ({ name, own: variants.has(normalise(name)) }))
}

/** Label for a publication link: DOI, PDF or Link */
export const linkLabel = (url) => {
  if (/doi\.org\//i.test(url)) return 'DOI'
  if (/\.pdf($|\?)/i.test(url)) return 'PDF'
  return 'Link'
}

/**
 * Publications grouped by year, newest first.
 * @template {{ year: number }} P
 * @param {P[]} pubs
 * @returns {[number, P[]][]}
 */
export const groupByYear = (pubs) => {
  const groups = new Map()
  for (const p of [...pubs].sort((a, b) => b.year - a.year)) {
    if (!groups.has(p.year)) groups.set(p.year, [])
    groups.get(p.year).push(p)
  }
  return [...groups.entries()]
}

/** Bio text -> paragraphs (split on blank lines) */
export const paragraphs = (text) => text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean)

/** "2026-08-12" -> "Aug 2026" */
export const monthYear = (iso) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' })

/** Display labels for profile links, in the order templates show them */
export const LINK_LABELS = {
  scholar: 'Google Scholar',
  orcid: 'ORCID',
  researchgate: 'ResearchGate',
  linkedin: 'LinkedIn',
  github: 'GitHub',
  cv: 'CV',
}

/** @param {Record<string, string | undefined>} links */
export const profileLinks = (links) =>
  Object.entries(LINK_LABELS)
    .filter(([key]) => links[key])
    .map(([key, label]) => ({ key, label, url: /** @type {string} */ (links[key]) }))

/** True when an optional list field has something to show */
export const has = (list) => Array.isArray(list) && list.length > 0
