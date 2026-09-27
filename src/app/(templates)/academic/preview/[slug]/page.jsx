import { notFound } from 'next/navigation'
import { loadPreview } from '@/src/academic/preview'

// Private previews for prospects: never indexed, never cached, no demo bar.
export const dynamic = 'force-dynamic'

export async function generateMetadata({ params, searchParams }) {
  const preview = await loadPreview((await params).slug, await searchParams)
  // Same 404 as the page, so a wrong key doesn't reveal the prospect's name in the title
  if (!preview) notFound()
  return {
    title: `${preview.profile.name} (preview)`,
    robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
    referrer: 'no-referrer',
  }
}

export default async function PreviewPage({ params, searchParams }) {
  const preview = await loadPreview((await params).slug, await searchParams)
  if (!preview) notFound()
  const { Template, profile } = preview
  return <Template profile={profile} />
}
