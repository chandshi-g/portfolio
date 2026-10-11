import { useState, useEffect, useCallback } from 'react'

const NAV_LINKS = [
  { label: 'Me', href: '#me' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Beyond Tech', href: '#beyond-tech' },
  { label: 'Contact', href: '#contact' },
]


const SECTION_IDS = NAV_LINKS.map((l) => l.href.slice(1))

function Navbar() {
  const [active, setActive] = useState('me')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  /* Track scroll depth & set top section */
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      if (window.scrollY < 80) {
        setActive('me')
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* IntersectionObserver — highlight active section */
  useEffect(() => {
    const visible = {}
    const observers = []

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          visible[id] = entry.isIntersecting ? entry.intersectionRatio : 0
          const best = Object.entries(visible).sort(([, a], [, b]) => b - a)[0]
          if (best && best[1] > 0.05 && window.scrollY >= 80) {
            setActive(best[0])
          }
        },
        { threshold: [0, 0.1, 0.25, 0.5], rootMargin: '-10% 0px -40% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  /* Close mobile menu on Escape key */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleNav = useCallback((e, href) => {
    e.preventDefault()
    setMobileOpen(false)
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActive(href.slice(1))
    }
  }, [])

  return (
    <header
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none"
      aria-label="Site navigation"
    >
      <nav
        className={[
          'group relative pointer-events-auto w-full max-w-4xl rounded-2xl px-4 py-2 sm:px-5 sm:py-2.5',
          'transition-all duration-300 ease-out',
          scrolled ? 'shadow-xl shadow-purple-950/25' : 'shadow-lg shadow-black/30',
        ].join(' ')}
        style={{
          background: scrolled ? 'rgba(12, 9, 22, 0.72)' : 'rgba(10, 8, 18, 0.52)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: scrolled
            ? '1px solid rgba(168, 85, 247, 0.24)'
            : '1px solid rgba(168, 85, 247, 0.14)',
        }}
      >
        {/* Subtle top edge liquid glass sheen */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent transition-opacity duration-300 group-hover:via-violet-400/40"
          aria-hidden="true"
        />

        <div className="flex items-center justify-between gap-3">
          {/* Brand Monogram */}
          <a
            href="#me"
            onClick={(e) => handleNav(e, '#me')}
            className="font-heading font-bold text-sm sm:text-base text-slate-100 tracking-tight shrink-0 select-none hover:text-purple-300 transition-colors flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" aria-hidden="true" />
            <span>CG</span>
          </a>

          {/* Desktop navigation links */}
          <ul className="hidden md:flex items-center gap-0.5 flex-wrap justify-end">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.slice(1)
              const isActive = active === id
              return (
                <li key={id}>
                  <a
                    href={href}
                    onClick={(e) => handleNav(e, href)}
                    className={[
                      'relative font-body text-xs sm:text-xs lg:text-sm px-3 py-1.5 rounded-lg transition-all duration-200',
                      'whitespace-nowrap select-none outline-none font-medium',
                      isActive
                        ? 'text-white bg-purple-500/15 border border-purple-500/20 shadow-sm shadow-purple-500/10'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-white/5 border border-transparent',
                    ].join(' ')}
                  >
                    {label}
                    {isActive && (
                      <span
                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-violet-500 to-magenta-500 rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Mobile hamburger button */}
          <button
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500"
          >
            <span
              className={[
                'block w-5 h-0.5 bg-current rounded-full transition-transform duration-200',
                mobileOpen ? 'translate-y-2 rotate-45' : '',
              ].join(' ')}
            />
            <span
              className={[
                'block w-5 h-0.5 bg-current rounded-full transition-opacity duration-200',
                mobileOpen ? 'opacity-0' : 'opacity-100',
              ].join(' ')}
            />
            <span
              className={[
                'block w-5 h-0.5 bg-current rounded-full transition-transform duration-200',
                mobileOpen ? '-translate-y-2 -rotate-45' : '',
              ].join(' ')}
            />
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={[
            'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
            mobileOpen ? 'max-h-96 opacity-100 mt-2.5 pt-2.5 border-t border-purple-500/20' : 'max-h-0 opacity-0',
          ].join(' ')}
        >
          <ul className="flex flex-col gap-1 pb-1">
            {NAV_LINKS.map(({ label, href }) => {
              const id = href.slice(1)
              const isActive = active === id
              return (
                <li key={id}>
                  <a
                    href={href}
                    onClick={(e) => handleNav(e, href)}
                    className={[
                      'flex items-center justify-between font-body text-sm px-3 py-2 rounded-lg transition-colors duration-150 select-none font-medium',
                      isActive
                        ? 'text-white bg-purple-500/20 border border-purple-500/25'
                        : 'text-slate-400 hover:text-slate-100 hover:bg-white/5 border border-transparent',
                    ].join(' ')}
                  >
                    <span>{label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

