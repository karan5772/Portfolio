import profile from '@/content/academic/demo/modern'
import ModernProfile from '@/src/academic/templates/ModernProfile'
import DemoBar from '@/src/academic/components/DemoBar'
import JsonLd from '@/src/seo/JsonLd'
import { personSchema } from '@/src/academic/personSchema'
import { SITE_URL } from '@/src/data/masterclass'

const PATH = '/academic/demo/modern/'
const TITLE = `${profile.name}, ${profile.title} (demo) | Modern Profile template`
const DESCRIPTION =
  'A live demo of the Modern Profile website template by Karan Kumar, for Professors of Practice, consultants and speakers: portrait hero, career timeline, talks and selected work. Filled with a fictional professor.'

const SHARE_IMAGE = { url: '/academic/og/modern.66ae04a1.png', width: 1200, height: 630, alt: 'Modern Profile template demo' }

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
      <ModernProfile profile={profile} />
      <DemoBar background="#2A0F1D" />
    </>
  )
}
