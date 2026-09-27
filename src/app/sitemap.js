import { SITE_URL, PAGE_URL } from '../data/masterclass'

export default function sitemap() {
  return [
    { url: `${SITE_URL}/`, changeFrequency: 'monthly', priority: 1 },
    { url: PAGE_URL, changeFrequency: 'monthly', priority: 0.9 },
  ]
}
