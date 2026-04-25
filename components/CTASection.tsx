import Link from 'next/link'
import { MoleculeLogo } from './MoleculeLogo'

export default function CTASection() {
  return (
    <section
      style={{
        background: 'var(--navy)',
        color: '#fff',
        paddingTop: 'var(--section-py)',
        paddingBottom: 'var(--section-py)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Single molecule watermark — sits at the bottom-right, bridging visually to the footer */}
      <div
        style={{
          position: 'absolute',
          right: '-12%',
          bottom: '-30%',
          opacity: 0.07,
          pointerEvents: 'none',
        }}
      >
        <MoleculeLogo size={720} animated={false} />
      </div>
      {/* Soft radial glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.12,
          pointerEvents: 'none',
          backgroundImage:
            'radial-gradient(circle at 20% 30%, #ff6600 0, transparent 50%), radial-gradient(circle at 80% 70%, #fcc01e 0, transparent 50%)',
        }}
      />

      <div className="container" style={{ position: 'relative' }}>
        <p className="eyebrow" style={{ color: '#ff6600', marginBottom: 32 }}>
          Diagnostic offert
        </p>

        <h2
          style={{
            fontFamily: "'Prompt', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(48px, 7vw, 120px)',
            lineHeight: 0.92,
            letterSpacing: '-0.03em',
            color: '#fff',
            maxWidth: 1100,
            marginBottom: 48,
          }}
        >
          Ne tentez pas de vous soigner{' '}
          <span className="serif" style={{ color: '#fcc01e' }}>sans ordonnance.</span>
        </h2>

        <p
          style={{
            fontFamily: "'Prompt', sans-serif",
            fontSize: 22,
            color: 'rgba(255,255,255,0.75)',
            maxWidth: 720,
            lineHeight: 1.5,
            marginBottom: 56,
          }}
        >
          Parlez-moi de votre business. Je prescris le traitement adapté. Le diagnostic initial
          est gratuit.
        </p>

        <Link
          href="/rdv"
          className="btn btn-primary"
          style={{
            padding: '24px 40px',
            fontSize: 15,
            letterSpacing: '0.14em',
            boxShadow: '0 16px 48px -12px rgba(255, 102, 0, 0.55)',
          }}
        >
          Demander une consultation <span className="arrow">→</span>
        </Link>

        <p
          style={{
            marginTop: 56,
            fontFamily: "'Instrument Serif', serif",
            fontStyle: 'italic',
            fontSize: 22,
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          &ldquo;Je ne fais pas du conseil. Je soigne.&rdquo; — Le Docteur Digital
        </p>
      </div>
    </section>
  )
}
