'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { NexperioLogo } from './MoleculeLogo'

const NAV = [
  { href: '/les-ordonnances', label: 'Les ordonnances' },
  { href: '/les-traitements', label: 'Les traitements' },
  { href: '/cas-de-guerison', label: 'Cas de guérison' },
  { href: '/nexperio-tech', label: 'Nexperio Tech' },
  { href: '/le-docteur-digital', label: 'Le Docteur Digital' },
  { href: '/blog', label: 'Blog' },
]

const DARK_HERO_PATHS = ['/le-docteur-digital', '/cas-de-guerison', '/nexperio-tech']

export default function Navbar() {
  const pathname = usePathname() || '/'
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const overDarkHero = !scrolled && DARK_HERO_PATHS.includes(pathname)
  const linkColor = overDarkHero ? 'rgba(255,255,255,0.92)' : 'var(--ink)'

  return (
    <header
      className={scrolled ? 'nav-scrolled' : ''}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'background 250ms, border-color 250ms',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: 76,
        }}
      >
        <Link href="/" style={{ display: 'inline-block' }}>
          <NexperioLogo height={32} />
        </Link>

        <nav className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          {NAV.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  padding: '8px 0',
                  fontFamily: "'Prompt', sans-serif",
                  fontSize: 13.5,
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                  color: active ? 'var(--orange)' : linkColor,
                  position: 'relative',
                  transition: 'color 200ms',
                }}
              >
                {item.label}
                {active && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: -2,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: 'var(--orange)',
                    }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <Link href="/rdv" className="btn btn-primary nav-cta" style={{ padding: '12px 20px', fontSize: 11 }}>
          Prendre rendez-vous
          <span className="arrow">→</span>
        </Link>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="nav-burger"
          style={{
            display: 'none',
            background: 'none',
            border: 0,
            padding: 8,
            flexDirection: 'column',
            gap: 5,
          }}
        >
          <span style={{ display: 'block', width: 22, height: 2, background: linkColor }} />
          <span style={{ display: 'block', width: 22, height: 2, background: linkColor }} />
          <span style={{ display: 'block', width: 22, height: 2, background: linkColor }} />
        </button>
      </div>

      {open && (
        <div
          className="nav-mobile-panel"
          style={{
            background: 'var(--bg)',
            borderTop: '1px solid var(--line)',
            padding: '20px 24px',
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ fontFamily: "'Prompt', sans-serif", fontSize: 16, color: 'var(--ink)' }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/rdv"
              onClick={() => setOpen(false)}
              className="btn btn-primary"
              style={{ padding: '12px 20px', fontSize: 11, alignSelf: 'flex-start' }}
            >
              Prendre rendez-vous <span className="arrow">→</span>
            </Link>
          </nav>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 960px) {
          :global(.nav-desktop) { display: none !important; }
          :global(.nav-cta) { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </header>
  )
}
