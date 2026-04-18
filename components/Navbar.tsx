'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const navItems = [
  { label: 'Les ordonnances', href: '/les-ordonnances' },
  { label: 'Les traitements', href: '/les-traitements' },
  { label: 'Cas de guérison', href: '/cas-de-guerison' },
  { label: 'Le Docteur Digital', href: '/le-docteur-digital' },
  { label: 'Blog', href: '/blog' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="container-max px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://static.wixstatic.com/media/7f7a19_cb6f7b8ea71744a99a2e93d5640ef57e~mv2.png"
              alt="Nexperio — Le Docteur Digital"
              width={80}
              height={90}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-heading text-sm font-medium text-brand-navy hover:text-brand-orange transition-colors duration-200 tracking-wide"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/rdv" className="btn-primary text-xs">
              Prendre rendez-vous
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 bg-brand-navy transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-brand-navy transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-brand-navy transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-6">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-heading text-base font-medium text-brand-navy hover:text-brand-orange transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/rdv" className="btn-primary text-xs text-center mt-2" onClick={() => setMenuOpen(false)}>
              Prendre rendez-vous
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
