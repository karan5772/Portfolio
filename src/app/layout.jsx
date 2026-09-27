import '../index.css'
import { SITE_URL } from '../data/masterclass'

export const metadata = {
  metadataBase: new URL(SITE_URL),
  authors: [{ name: 'Karan Kumar', url: `${SITE_URL}/` }],
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  icons: {
    // Favicon set lives in /public; a 48px-multiple ICO/PNG is required for Google search results
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon-96.png', type: 'image/png', sizes: '96x96' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-icon-180.png', sizes: '180x180' }],
  },
}

export const viewport = {
  themeColor: '#2A6049',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  )
}
