// Email-ready screenshots of a private prospect preview.
//
//   npm run shot -- <slug> <template>          e.g.  npm run shot -- firstname-lastname minimal
//
// Reads PREVIEW_KEY and SHOT_BASE_URL (default http://localhost:3000) from the environment or .env.local.
// Saves screenshots/<slug>-<template>-desktop.png (1440×900) and -mobile.png (390×844, 2× for sharpness).
// Uses your installed Google Chrome through playwright-core, so no separate browser download is needed.
import { mkdir } from 'node:fs/promises'
import { chromium } from 'playwright-core'

const TEMPLATES = ['minimal', 'lab', 'modern']
const [slug, template] = process.argv.slice(2)

function fail(message) {
  console.error(`\n  ${message}\n`)
  process.exit(1)
}

if (!slug || !template) fail('Usage: npm run shot -- <slug> <template>   (template: minimal | lab | modern)')
if (!TEMPLATES.includes(template)) fail(`Unknown template "${template}". Use one of: ${TEMPLATES.join(', ')}.`)
if (!/^[a-z0-9_-]+$/.test(slug)) fail(`"${slug}" is not a valid slug: use lowercase letters, numbers and dashes.`)

const key = process.env.PREVIEW_KEY
if (!key) fail('PREVIEW_KEY is not set. Add it to .env.local (see .env.example).')

const base = (process.env.SHOT_BASE_URL || 'http://localhost:3000').replace(/\/$/, '')
const url = `${base}/academic/preview/${slug}/?t=${template}&k=${encodeURIComponent(key)}`
const safeUrl = url.replace(/k=[^&]+/, 'k=…') // never print the key

const shots = [
  { name: 'desktop', viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1, isMobile: false },
  { name: 'mobile', viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true },
]

let browser
try {
  browser = await chromium.launch({ channel: 'chrome', headless: true })
} catch {
  fail('Could not start Google Chrome. Install Chrome, or run "npx playwright install chromium" and remove channel: \'chrome\' from scripts/shot.mjs.')
}

try {
  await mkdir('screenshots', { recursive: true })
  for (const shot of shots) {
    const context = await browser.newContext({
      viewport: shot.viewport,
      deviceScaleFactor: shot.deviceScaleFactor,
      isMobile: shot.isMobile,
      hasTouch: shot.isMobile,
      reducedMotion: 'reduce', // skip load animations so the capture shows the settled page
    })
    const page = await context.newPage()

    let response
    try {
      response = await page.goto(url, { waitUntil: 'networkidle', timeout: 30_000 })
    } catch {
      fail(`Could not reach ${base}. Is the site running? (npm run dev)`)
    }
    if (!response || response.status() !== 200) {
      fail(`Preview returned ${response?.status() ?? 'no response'} for ${safeUrl}\n  Check that content/academic/prospects/${slug}.js exists and PREVIEW_KEY matches the running server.`)
    }

    // Hide the Next.js dev-mode badge when shooting against `npm run dev`
    await page.addStyleTag({ content: 'nextjs-portal { display: none !important; }' })
    // Wait for web fonts, then for every image in view to finish loading
    await page.evaluate(() => document.fonts.ready)
    await page.evaluate(async () => {
      const inView = [...document.images].filter((img) => img.getBoundingClientRect().top < window.innerHeight)
      await Promise.all(inView.map((img) => (img.complete ? null : new Promise((r) => { img.onload = img.onerror = r }))))
    })

    const file = `screenshots/${slug}-${template}-${shot.name}.png`
    await page.screenshot({ path: file })
    console.log(`  saved ${file}`)
    await context.close()
  }
} finally {
  await browser.close()
}
