import { timingSafeEqual } from 'node:crypto'
import { TEMPLATES } from './templates'

const SLUG = /^[a-z0-9_-]+$/

/** Constant-time comparison so response timing doesn't reveal how much of a key was right */
function keyMatches(given) {
  const expected = process.env.PREVIEW_KEY
  if (!expected || typeof given !== 'string') return false
  const a = Buffer.from(given)
  const b = Buffer.from(expected)
  return a.length === b.length && timingSafeEqual(a, b)
}

/**
 * Resolves a private preview. Returns null for anything invalid (unknown prospect, unknown template,
 * missing or wrong key) so every failure looks the same: a 404.
 * @param {string} slug
 * @param {{ t?: string | string[], k?: string | string[] }} query
 */
export async function loadPreview(slug, query) {
  const t = Array.isArray(query.t) ? query.t[0] : query.t
  const k = Array.isArray(query.k) ? query.k[0] : query.k
  if (!keyMatches(k)) return null
  if (!SLUG.test(slug) || !t || !Object.hasOwn(TEMPLATES, t)) return null
  try {
    // Prospect files live in content/academic/prospects/<slug>.js
    const mod = await import(`../../content/academic/prospects/${slug}.js`)
    /** @type {import('@/types/academic').AcademicProfile} */
    const profile = mod.default
    if (!profile?.name) return null
    const { default: Template } = await TEMPLATES[t]()
    return { profile, Template }
  } catch {
    return null
  }
}
