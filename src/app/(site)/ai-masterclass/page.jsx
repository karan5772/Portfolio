import MasterclassPage from '@/src/masterclass/MasterclassPage'
import JsonLd from '@/src/seo/JsonLd'
import { masterclassSchema } from '@/src/seo/structuredData'

const TITLE = 'AI Masterclass for College Students & Faculty | Karan Kumar'
const DESCRIPTION =
  'Live, online AI webinars for college students and faculty. Learn ChatGPT, Gemini and NotebookLM for your own syllabus, taught by ex-Google Student Ambassador for Gemini Karan Kumar.'
const SHARE_DESCRIPTION = 'Live AI webinars for college students and faculty, planned around your own syllabus.'
const SHARE_IMAGE = {
  url: '/og-masterclass.png',
  width: 1200,
  height: 630,
  alt: 'AI Masterclass by Karan Kumar: practical AI training for college students and faculty.',
}

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'AI masterclass', 'AI webinar for college students', 'AI webinar for faculty', 'generative AI webinar',
    'AI workshop for engineering colleges', 'AI training for college faculty', 'AI in higher education',
    'ChatGPT for faculty', 'Gemini for education', 'NotebookLM workshop', 'prompt engineering workshop',
    'generative AI training India', 'AI webinar India', 'Karan Kumar',
  ],
  alternates: { canonical: '/ai-masterclass/' },
  openGraph: {
    type: 'website',
    url: '/ai-masterclass/',
    siteName: 'Karan Kumar',
    locale: 'en_IN',
    title: TITLE,
    description: SHARE_DESCRIPTION,
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@karankumar5772',
    creator: '@karankumar5772',
    title: TITLE,
    description: SHARE_DESCRIPTION,
    images: [SHARE_IMAGE],
  },
}

export default function Page() {
  return (
    <>
      <JsonLd data={masterclassSchema} />
      <MasterclassPage />
    </>
  )
}
