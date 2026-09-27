// Shared data shape for every academic template. Swapping a professor means swapping one
// data file that matches AcademicProfile; the templates never change.
//
// Data files opt into editor checking with `// @ts-check` and a JSDoc type annotation, e.g.
//   /** @type {import('@/types/academic').AcademicProfile} */
//   export default { ... }

/**
 * @typedef {object} Publication
 * @property {string} title
 * @property {string} authors      "A. Rao, K. Mehta, P. Iyer". The profile owner's own name is bolded by the templates.
 * @property {string} venue        Journal or conference name
 * @property {number} year
 * @property {string} [link]       DOI or PDF URL
 * @property {boolean} [highlight] Show in "selected work"
 */

/**
 * @typedef {object} Person
 * @property {string} name
 * @property {string} role   "PhD scholar", "M.E. student", "Alumni, now at IIT Delhi"
 * @property {string} [photo]
 * @property {string} [link]
 */

/**
 * @typedef {object} Project
 * @property {string} title
 * @property {string} summary  1–2 sentences, plain language
 * @property {string} [funder] "DST-SERB", "DST INSPIRE"
 * @property {string} [years]  "2024–2027"
 * @property {string} [image]
 */

/**
 * @typedef {object} NewsItem
 * @property {string} date  ISO date, "2026-08-14"
 * @property {string} text
 * @property {string} [link]
 */

/**
 * @typedef {object} AcademicLinks
 * @property {string} [scholar]
 * @property {string} [orcid]
 * @property {string} [researchgate]
 * @property {string} [linkedin]
 * @property {string} [github]
 * @property {string} [cv]
 */

/**
 * @typedef {object} AcademicProfile
 * @property {string} slug
 * @property {string} name          "Dr. Meera Kulkarni"
 * @property {string} title         "Assistant Professor"
 * @property {string} department
 * @property {string} institution
 * @property {string} location
 * @property {string} [photo]       Omit to show an initials avatar
 * @property {string} email
 * @property {string} [office]
 * @property {AcademicLinks} links
 * @property {string} shortBio      One sentence for the hero
 * @property {string} bio           1–3 paragraphs, separated by blank lines
 * @property {string[]} researchAreas
 * @property {{ degree: string, institution: string, year?: string }[]} education
 * @property {{ role: string, org: string, years: string }[]} [experience]
 * @property {Publication[]} publications
 * @property {Project[]} [projects]
 * @property {Person[]} [team]
 * @property {Person[]} [alumni]
 * @property {{ code?: string, title: string, semester?: string }[]} [teaching]
 * @property {{ title: string, year?: string }[]} [awards]
 * @property {NewsItem[]} [news]
 * @property {string} [openings]    "Looking for PhD students in traffic simulation…"
 * @property {{ title: string, event: string, year: string, link?: string }[]} [talks]
 * @property {{ name: string, mission: string }} [lab]  Addition to the spec: the Research Lab template's name and one-line mission
 */

export {}
