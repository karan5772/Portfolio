import { SITE_URL } from '../data/masterclass'

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/academic/preview/' },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
