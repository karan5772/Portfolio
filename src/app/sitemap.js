import { SITE_URL, PAGE_URL } from '../data/masterclass'

export default function sitemap() {
  return [
    { url: `${SITE_URL}/`, changeFrequency: 'monthly', priority: 1 },
    { url: PAGE_URL, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/academic/`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/academic/demo/minimal/`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE_URL}/academic/demo/lab/`, changeFrequency: 'yearly', priority: 0.5 },
    { url: `${SITE_URL}/academic/demo/modern/`, changeFrequency: 'yearly', priority: 0.5 },
  ]
}
