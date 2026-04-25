import Link from 'next/link'
import { NexperioLogo } from './MoleculeLogo'

const NAV = [
  { href: '/les-ordonnances', label: 'Les ordonnances' },
  { href: '/les-traitements', label: 'Les traitements' },
  { href: '/cas-de-guerison', label: 'Cas de guérison' },
  { href: '/nexperio-tech', label: 'Nexperio Tech' },
  { href: '/le-docteur-digital', label: 'Le Docteur Digital' },
  { href: '/blog', label: 'Blog' },
]

export default function Footer() {
  return (
    <footer
      style={{
        background: 'var(--navy-deep)',
        color: '#fff',
        paddingTop: 80,
        paddingBottom: 40,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative' }}>
        {/* 4-column grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 48,
            paddingBottom: 48,
            borderBottom: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <div>
            <NexperioLogo height={28} />
            <p
              style={{
                marginTop: 20,
                fontFamily: "'Prompt', sans-serif",
                color: 'rgba(255,255,255,0.6)',
                fontSize: 14,
                lineHeight: 1.6,
                maxWidth: 280,
              }}
            >
              &ldquo;Je ne fais pas du conseil. Je soigne.&rdquo;<br />
              <span style={{ color: '#ff6600', fontWeight: 600 }}>— Le Docteur Digital</span>
            </p>
          </div>

          <div>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: 20,
              }}
            >
              Navigation
            </p>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: 'block',
                  padding: '6px 0',
                  fontFamily: "'Prompt', sans-serif",
                  fontSize: 14,
                  color: 'rgba(255,255,255,0.75)',
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: 20,
              }}
            >
              Contact
            </p>
            <p
              style={{
                fontFamily: "'Prompt', sans-serif",
                fontSize: 14,
                color: 'rgba(255,255,255,0.85)',
                marginBottom: 8,
              }}
            >
              contact@nexperio.com
            </p>
            <p
              style={{
                fontFamily: "'Prompt', sans-serif",
                fontSize: 14,
                color: 'rgba(255,255,255,0.85)',
                marginBottom: 24,
              }}
            >
              06 70 77 88 99
            </p>
          </div>

          <div>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                marginBottom: 20,
              }}
            >
              Statut clinique
            </p>
            <p
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontFamily: "'Prompt', sans-serif",
                fontSize: 14,
                color: 'rgba(255,255,255,0.85)',
              }}
            >
              <span className="pulse-dot" /> Cabinet ouvert · Paris
            </p>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: 'rgba(255,255,255,0.4)',
                marginTop: 12,
              }}
            >
              48h · diagnostic offert · sans engagement
            </p>
          </div>
        </div>

        <div
          style={{
            paddingTop: 32,
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: 'rgba(255,255,255,0.35)',
            letterSpacing: '0.05em',
          }}
        >
          <p>© {new Date().getFullYear()} NEXPERIO · TOUS DROITS RÉSERVÉS</p>
          <p>FAIT AVEC 💉 PAR LE DOCTEUR DIGITAL</p>
        </div>
      </div>
    </footer>
  )
}
