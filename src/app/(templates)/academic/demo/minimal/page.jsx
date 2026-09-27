import profile from '@/content/academic/demo/minimal'
import MinimalScholar from '@/src/academic/templates/MinimalScholar'
import DemoBar from '@/src/academic/components/DemoBar'
import JsonLd from '@/src/seo/JsonLd'
import { personSchema } from '@/src/academic/personSchema'
import { SITE_URL } from '@/src/data/masterclass'

const PATH = '/academic/demo/minimal/'
const TITLE = `${profile.name}, ${profile.title} (demo) | Minimal Scholar template`
const DESCRIPTION =
  'A live demo of the Minimal Scholar academic website template by Karan Kumar: a text-first page with a typeset publication list. Filled with a fictional civil engineering professor.'

const SHARE_IMAGE = { url: '/academic/og/minimal.3f6f9d6f.png', width: 1200, height: 630, alt: 'Minimal Scholar template demo' }

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { type: 'profile', url: PATH, siteName: 'Karan Kumar', title: TITLE, description: DESCRIPTION, images: [SHARE_IMAGE] },
  twitter: { card: 'summary_large_image', creator: '@karankumar5772', title: TITLE, description: DESCRIPTION, images: [SHARE_IMAGE] },
}

export default function Page() {
  return (
    <>
      <JsonLd data={personSchema(profile, `${SITE_URL}${PATH}`, { fictional: true })} />
      <MinimalScholar profile={profile} />
      <DemoBar />
    </>
  )
}
