'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { data } from '../data/portfolio'

const idFor = (n) => (n === 'Home' ? 'home' : n.toLowerCase())

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
        const el = document.getElementById(idFor(n))
        if (el && el.offsetTop <= y) cur = n
      }
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (n) => {
    setOpen(false)
    if (n === 'Home') { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
    document.getElementById(idFor(n))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 px transition-colors duration-300 ${
          scrolled ? 'py-3 bg-white/95 backdrop-blur-md border-b border-[#E8E4DE]' : 'py-5'
        }`}
      >
        <div className="wrap flex items-center justify-between">
          <button
            onClick={() => go('Home')}
            style={{ fontWeight: 700, fontSize: '1.15rem', color: 'var(--ink)', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Karan<span style={{ color: 'var(--sage)' }}>.</span>
          </button>

          <nav className="hidden md:flex items-center gap-1" aria-label="Sections">
            {data.nav.slice(1).map(n => (
              <button key={n} onClick={() => go(n)} className="nav-link" aria-current={active === n || undefined}>
                {n}
              </button>
            ))}
            <Link href="/ai-masterclass/" className="nav-link" style={{ color: 'var(--amber)' }}>
              AI Masterclass
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <a href={data.resumeUrl} target="_blank" rel="noopener noreferrer" className="hidden sm:inline-flex btn btn-sage btn-sm">
              Resume
            </a>
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-[#D9D4CD] text-[#6F6257]"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            style={{ position: 'fixed', inset: 0, zIndex: 40, background: '#FFFFFF', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
          >
            {data.nav.map(n => (
              <button
                key={n}
                onClick={() => go(n)}
                style={{
                  fontWeight: 700, fontSize: 'clamp(1.6rem, 7vw, 2.6rem)', lineHeight: 1.25,
                  background: 'none', border: 'none', cursor: 'pointer',
                  color: active === n ? 'var(--sage)' : 'var(--ink)',
                }}
              >
                {n}
              </button>
            ))}
            <Link href="/ai-masterclass/" style={{ marginTop: '0.75rem', fontWeight: 700, fontSize: 'clamp(1.2rem, 5vw, 1.7rem)', color: 'var(--amber)', textDecoration: 'none' }}>
              AI Masterclass
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
