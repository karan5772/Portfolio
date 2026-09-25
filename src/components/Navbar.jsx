import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { data } from '../data/portfolio'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)
  const [active, setActive]     = useState('Home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const y = window.scrollY + 140
      let cur = 'Home'
      for (const n of data.nav) {
        const el = document.getElementById(n === 'Home' ? 'home' : n.toLowerCase())
        if (el && el.offsetTop <= y) cur = n
      }
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (n) => {
    setOpen(false)
    if (n === 'Home') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
    document.getElementById(n.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed inset-x-0 top-0 z-50 px transition-all duration-300 ${
          scrolled ? 'py-3 bg-white/95 backdrop-blur-md border-b border-[#EBEBEB]' : 'py-5'
        }`}
      >
        <div className="wrap flex items-center justify-between">
          <motion.button
            onClick={() => go('Home')}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#1A1410', letterSpacing: '-0.01em', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Karan<span style={{ color: '#2A6049' }}>.</span>
          </motion.button>

          <nav className="hidden md:flex items-center gap-1">
            {data.nav.slice(1).map((n, i) => (
              <motion.button
                key={n}
                onClick={() => go(n)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ position: 'relative', padding: '0.38rem 0.9rem', borderRadius: 8, background: 'none', border: 'none', cursor: 'pointer' }}
              >
                {active === n && (
                  <motion.span
                    layoutId="nav-pill"
                    style={{ position: 'absolute', inset: 0, borderRadius: 8, background: '#2A6049', opacity: 0.1 }}
                    transition={{ type: 'spring', bounce: 0.18, duration: 0.45 }}
                  />
                )}
                <span style={{
                  position: 'relative', zIndex: 1,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.82rem', fontWeight: 600,
                  color: active === n ? '#2A6049' : '#8A7B6C',
                  transition: 'color 0.2s', letterSpacing: '0.02em',
                }}>
                  {n}
                </span>
              </motion.button>
            ))}
            <a
              href="/ai-masterclass/"
              style={{ padding: '0.38rem 0.9rem', fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.82rem', fontWeight: 600, color: '#C87533', letterSpacing: '0.02em', textDecoration: 'none' }}
            >
              Masterclass
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a href={data.resumeUrl} target="_blank" rel="noopener noreferrer"
              className="hidden sm:inline-flex btn-sage" style={{ fontSize: '0.8rem', padding: '0.5rem 1.1rem' }}>
              Resume
            </a>
            <motion.button
              onClick={() => setOpen(!open)}
              whileTap={{ scale: 0.93 }}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-[#EBEBEB] text-[#8A7B6C] hover:text-[#1A1410] transition-colors"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            style={{ position: 'fixed', inset: 0, zIndex: 40, background: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}
          >
            <motion.button
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}
              style={{ position: 'absolute', top: '1.5rem', right: 'clamp(1.25rem, 5vw, 4.5rem)', background: 'none', border: 'none', cursor: 'pointer', color: '#8A7B6C' }}
            >
              <X size={22} />
            </motion.button>

            {data.nav.map((n, i) => (
              <motion.button
                key={n}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.07, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => go(n)}
                style={{
                  fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700,
                  fontSize: 'clamp(1.65rem, 7vw, 3rem)', lineHeight: 1.2,
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: active === n ? '#2A6049' : '#1A1410',
                  transition: 'color 0.15s', letterSpacing: '-0.01em',
                }}
              >
                {n}
              </motion.button>
            ))}
            <a
              href="/ai-masterclass/"
              style={{ marginTop: '0.75rem', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(1.2rem, 5vw, 1.8rem)', color: '#C87533', textDecoration: 'none' }}
            >
              AI Masterclass →
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
