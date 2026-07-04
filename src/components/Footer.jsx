export default function Footer() {
  return (
    <footer style={{ background: '#080F0C', borderTop: '1px solid rgba(255,255,255,0.04)', padding: '1.5rem clamp(1.25rem, 5vw, 4.5rem)' }}>
      <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: '#4E8A6A', fontSize: '0.95rem' }}>
          Karan Kumar
        </span>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: '0.62rem', color: '#233320', letterSpacing: '0.1em' }}>
          © 2025 · Built with React + Vite
        </span>
      </div>
    </footer>
  )
}
