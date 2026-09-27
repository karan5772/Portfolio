/**
 * Template keys used in URLs (?t=minimal) and in pricing.js.
 * Loaded lazily so each template's CSS and fonts stay in their own chunk: a demo page ships only
 * the template it shows, instead of all three templates' styles and font preloads.
 */
export const TEMPLATES = {
  minimal: () => import('./MinimalScholar'),
  lab: () => import('./ResearchLab'),
  modern: () => import('./ModernProfile'),
}
