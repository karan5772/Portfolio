// @ts-check
// Every price on the site comes from this file. Amounts are in rupees.

/**
 * @typedef {object} TemplatePrice
 * @property {'minimal' | 'modern' | 'lab'} id  Matches the template key used in URLs (?t=minimal)
 * @property {string} name
 * @property {string} audience  One line: who it's for
 * @property {number} price
 */

/** @type {TemplatePrice[]} */
export const templatePrices = [
  { id: 'minimal', name: 'Minimal Scholar', audience: 'A clean, text-first page for your research and publications.', price: 10000 },
  { id: 'modern', name: 'Modern Profile', audience: 'For Professors of Practice, consultants and speakers.', price: 18000 },
  { id: 'lab', name: 'Research Lab', audience: 'For faculty building a group and recruiting PhD students.', price: 25000 },
]

export const updatesPlan = {
  name: 'Yearly updates plan',
  price: 4000,
  period: 'year',
  includes: ['New papers and news', 'Team and student changes', 'Hosting'],
}

export const domainNote = 'Prices do not include the domain. You buy it in your own name (usually ₹800–1,500 a year) and I set it up for you.'

/** @param {number} amount */
export const formatINR = (amount) => `₹${amount.toLocaleString('en-IN')}`
