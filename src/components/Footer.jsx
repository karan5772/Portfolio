import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: '#080F0C', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '1.5rem clamp(1.25rem, 5vw, 4.5rem)' }}>
      <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', fontSize: '0.9375rem' }}>
        <Link href="/" style={{ fontWeight: 700, color: '#8FC0A4', textDecoration: 'none' }}>Karan Kumar</Link>
        <nav aria-label="More from Karan" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 1.25rem' }}>
          <Link href="/ai-masterclass/" style={{ color: '#C8D8D0' }}>AI Masterclass</Link>
          <Link href="/academic/" style={{ color: '#C8D8D0' }}>Academic websites</Link>
        </nav>
      </div>
    </footer>
  )
}
