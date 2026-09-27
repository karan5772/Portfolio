import profile from '@/content/academic/demo/lab'
import ResearchLab from '@/src/academic/templates/ResearchLab'
import DemoBar from '@/src/academic/components/DemoBar'
import JsonLd from '@/src/seo/JsonLd'
import { personSchema } from '@/src/academic/personSchema'
import { SITE_URL } from '@/src/data/masterclass'

const PATH = '/academic/demo/lab/'
const TITLE = `${profile.lab?.name ?? profile.name} (demo) | Research Lab template`
const DESCRIPTION =
  'A live demo of the Research Lab academic website template by Karan Kumar: funded projects, team, publications, news and a clear “Join the lab” section. Filled with a fictional water resources lab.'

const SHARE_IMAGE = { url: '/academic/og/lab.da4fbca2.png', width: 1200, height: 630, alt: 'Research Lab template demo' }

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: { type: 'website', url: PATH, siteName: 'Karan Kumar', title: TITLE, description: DESCRIPTION, images: [SHARE_IMAGE] },
  twitter: { card: 'summary_large_image', creator: '@karankumar5772', title: TITLE, description: DESCRIPTION, images: [SHARE_IMAGE] },
}

export default function Page() {
  return (
    <>
      <JsonLd data={personSchema(profile, `${SITE_URL}${PATH}`, { fictional: true })} />
      <ResearchLab profile={profile} />
      <DemoBar background="#14201F" />
    </>
  )
}
