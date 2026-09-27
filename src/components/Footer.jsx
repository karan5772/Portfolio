export default function Footer() {
  return (
    <footer style={{ background: '#080F0C', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '1.5rem clamp(1.25rem, 5vw, 4.5rem)' }}>
      <div className="wrap" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem', fontSize: '0.9375rem' }}>
        <a href="/" style={{ fontWeight: 700, color: '#8FC0A4', textDecoration: 'none' }}>Karan Kumar</a>
        <span style={{ color: '#9AA79F' }}>© {new Date().getFullYear()} · Built with React and Vite</span>
      </div>
    </footer>
  )
}
