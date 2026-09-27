import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Work from '../components/Work'
import Experience from '../components/Experience'
import Teaching from '../components/Teaching'
import Education from '../components/Education'
import Achievements from '../components/Achievements'
import Contact from '../components/Contact'
import JsonLd from '../seo/JsonLd'
import { portfolioSchema } from '../seo/structuredData'

const TITLE = 'Karan Kumar | Software Engineer'
const DESCRIPTION =
  'Freelance MERN Stack & Gen AI developer. Full-stack web apps, AI-powered tools, and REST APIs, from idea to deployment. Google Student Ambassador for Gemini, 3 internships, 5+ shipped projects.'

export const metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'Karan Kumar',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@karankumar5772',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/og-image.png'],
  },
}

export default function Home() {
  return (
    <>
      <JsonLd data={portfolioSchema} />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Experience />
      <Teaching />
      <Education />
      <Achievements />
      <Contact />
    </>
  )
}
