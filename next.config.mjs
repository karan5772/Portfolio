/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep the URLs the Vite site used (/ai-masterclass/), so canonicals and shared links still match
  trailingSlash: true,

  async headers() {
    return [
      {
        // Private prospect previews: never indexed, never cached, and the ?k= key never leaks via Referer
        source: '/academic/preview/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
          { key: 'Referrer-Policy', value: 'no-referrer' },
          { key: 'Cache-Control', value: 'private, no-store' },
        ],
      },
    ]
  },
}

export default nextConfig
