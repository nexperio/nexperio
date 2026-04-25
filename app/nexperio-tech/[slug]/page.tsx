import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CTASection from '@/components/CTASection'
import { Reveal } from '@/components/Reveal'
import { TOOLS, getTool } from '@/lib/tools'

export function generateStaticParams() {
  return TOOLS.map((t) => ({ slug: t.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tool = getTool(params.slug)
  if (!tool) return {}
  return {
    title: tool.title,
    description: tool.description,
  }
}

export default function ToolPage({ params }: { params: { slug: string } }) {
  const tool = getTool(params.slug)
  if (!tool) notFound()

  return (
    <div className="page-enter">
      {/* Hero */}
      <section
        style={{
          paddingTop: 140,
          paddingBottom: 64,
          background: 'var(--bg-soft)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container" style={{ position: 'relative' }}>
          <Link
            href="/nexperio-tech"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--ink-mute)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 32,
            }}
          >
            ← Nexperio Tech · Outil {tool.num}
          </Link>

          <p className="eyebrow" style={{ marginBottom: 32 }}>
            <span className="tag" style={{ marginRight: 4 }}>{tool.tag}</span>
            {tool.href && (
              <>
                <span className="pulse-dot" style={{ width: 6, height: 6 }} />
                <span style={{ color: 'var(--orange)' }}>En ligne</span>
              </>
            )}
          </p>

          <h1
            className="display"
            style={{
              maxWidth: 1100,
              marginBottom: 24,
              fontSize: 'clamp(48px, 7vw, 96px)',
            }}
          >
            {tool.title}
          </h1>

          <p
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(24px, 3vw, 36px)',
              color: 'var(--orange)',
              maxWidth: 900,
              lineHeight: 1.3,
              marginBottom: 40,
            }}
          >
            « {tool.subtitle} »
          </p>

          <p
            style={{
              fontFamily: "'Prompt', sans-serif",
              fontSize: 22,
              color: 'var(--ink-soft)',
              maxWidth: 820,
              lineHeight: 1.55,
              marginBottom: 40,
            }}
          >
            {tool.description}
          </p>

          {tool.href ? (
            <a
              href={tool.href}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
              style={{
                padding: '20px 32px',
                fontSize: 14,
                letterSpacing: '0.14em',
              }}
            >
              Lancer l&apos;outil <span className="arrow">→</span>
            </a>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '14px 22px',
                  border: '1.5px solid var(--ink-mute)',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 12,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-mute)',
                }}
              >
                ⏳ Bientôt disponible
              </span>
              <a
                href={tool.legacy}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "'Prompt', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'var(--orange)',
                  borderBottom: '1.5px solid var(--orange)',
                }}
              >
                Voir la version actuelle (Wix) →
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Audience */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <Reveal>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(220px, 280px) 1fr',
                gap: 48,
                alignItems: 'start',
                paddingBottom: 64,
                borderBottom: '1px solid var(--line)',
              }}
              className="aud-grid"
            >
              <p className="eyebrow">Pour qui</p>
              <p
                style={{
                  fontFamily: "'Prompt', sans-serif",
                  fontWeight: 500,
                  fontSize: 'clamp(22px, 2.4vw, 32px)',
                  lineHeight: 1.35,
                  letterSpacing: '-0.01em',
                  color: 'var(--ink)',
                  maxWidth: 880,
                }}
              >
                {tool.audience}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Inputs / Outputs */}
      <section className="section">
        <div className="container">
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 16 }}>Comment ça marche</p>
            <h2 className="display-2" style={{ marginBottom: 56, maxWidth: 700 }}>
              Vous donnez. <span className="serif accent">L&apos;outil rend.</span>
            </h2>
          </Reveal>

          <Reveal stagger>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: 24,
              }}
            >
              <div
                style={{
                  background: 'var(--bg)',
                  border: '1px solid var(--line)',
                  padding: 32,
                }}
              >
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--orange)',
                    marginBottom: 16,
                  }}
                >
                  ↓ Données à fournir
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {tool.inputs.map((it, i) => (
                    <li
                      key={i}
                      style={{
                        fontFamily: "'Prompt', sans-serif",
                        fontSize: 16,
                        color: 'var(--ink)',
                        padding: '12px 0',
                        borderBottom:
                          i < tool.inputs.length - 1 ? '1px solid var(--line)' : 'none',
                        display: 'flex',
                        gap: 12,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 12,
                          color: 'var(--ink-mute)',
                          minWidth: 24,
                        }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  background: 'var(--navy)',
                  color: '#fff',
                  padding: 32,
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: 0.06,
                    pointerEvents: 'none',
                    backgroundImage:
                      'radial-gradient(circle at 90% 20%, #ff6600 0, transparent 50%)',
                  }}
                />
                <p
                  className="eyebrow"
                  style={{ color: '#ff6600', marginBottom: 16, position: 'relative' }}
                >
                  ↑ Ce que vous obtenez
                </p>
                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    position: 'relative',
                  }}
                >
                  {tool.outputs.map((it, i) => (
                    <li
                      key={i}
                      style={{
                        fontFamily: "'Prompt', sans-serif",
                        fontSize: 17,
                        fontWeight: 500,
                        color: '#fff',
                        padding: '14px 0',
                        borderBottom:
                          i < tool.outputs.length - 1
                            ? '1px solid rgba(255,255,255,0.15)'
                            : 'none',
                        display: 'flex',
                        gap: 12,
                      }}
                    >
                      <span style={{ color: '#fcc01e', flexShrink: 0 }}>→</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Use cases (optional) */}
      {tool.useCases && tool.useCases.length > 0 && (
        <section className="section" style={{ background: 'var(--bg-section)' }}>
          <div className="container">
            <Reveal>
              <p className="eyebrow" style={{ marginBottom: 16 }}>Cas d&apos;usage</p>
              <h2 className="display-2" style={{ marginBottom: 56, maxWidth: 700 }}>
                Quand <span className="serif accent">ça aide.</span>
              </h2>
            </Reveal>
            <Reveal stagger>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: 24,
                }}
              >
                {tool.useCases.map((uc, i) => (
                  <div
                    key={i}
                    style={{
                      background: 'var(--bg)',
                      border: '1px solid var(--line)',
                      padding: 28,
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 32,
                        fontWeight: 500,
                        color: 'var(--orange)',
                        letterSpacing: '-0.03em',
                        lineHeight: 1,
                        marginBottom: 16,
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Prompt', sans-serif",
                        fontSize: 17,
                        fontWeight: 500,
                        color: 'var(--ink)',
                        lineHeight: 1.4,
                      }}
                    >
                      {uc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Philosophy quote (optional) */}
      {tool.philosophy && (
        <section className="section" style={{ paddingTop: 0, background: 'var(--bg-section)' }}>
          <div className="container">
            <Reveal>
              <blockquote
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: 'italic',
                  fontSize: 'clamp(28px, 3.6vw, 44px)',
                  color: 'var(--ink)',
                  lineHeight: 1.3,
                  letterSpacing: '-0.01em',
                  maxWidth: 900,
                  margin: '0 auto',
                  textAlign: 'center',
                  padding: '32px 0',
                  borderTop: '1px solid var(--line)',
                  borderBottom: '1px solid var(--line)',
                }}
              >
                <span className="serif accent" style={{ fontSize: '1.4em', verticalAlign: '-0.1em' }}>
                  «
                </span>{' '}
                {tool.philosophy}{' '}
                <span className="serif accent" style={{ fontSize: '1.4em', verticalAlign: '-0.1em' }}>
                  »
                </span>
              </blockquote>
            </Reveal>
          </div>
        </section>
      )}

      {/* Launch CTA */}
      <section
        style={{
          background: 'var(--navy-deep)',
          color: '#fff',
          paddingTop: 'var(--section-py)',
          paddingBottom: 'var(--section-py)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            pointerEvents: 'none',
            backgroundImage:
              'radial-gradient(circle at 70% 30%, #ff6600 0, transparent 50%), radial-gradient(circle at 20% 80%, #fcc01e 0, transparent 50%)',
          }}
        />
        <div className="container" style={{ position: 'relative', textAlign: 'center', maxWidth: 800 }}>
          <p className="eyebrow" style={{ color: '#ff6600', justifyContent: 'center', marginBottom: 32 }}>
            {tool.href ? 'Prêt à diagnostiquer ?' : 'Bientôt disponible'}
          </p>
          <h2
            style={{
              fontFamily: "'Prompt', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(40px, 5.5vw, 80px)',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              color: '#fff',
              marginBottom: 32,
            }}
          >
            <>
              Lancez <span className="serif" style={{ color: '#fcc01e' }}>l&apos;outil.</span>
            </>
          </h2>
          {tool.href && (
            <>
              <p
                style={{
                  fontFamily: "'Prompt', sans-serif",
                  fontSize: 18,
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: 40,
                  lineHeight: 1.55,
                }}
              >
                Accès direct, sans friction. Aucune inscription, aucun paywall.
              </p>
              <a
                href={tool.href}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{
                  padding: '24px 40px',
                  fontSize: 15,
                  letterSpacing: '0.14em',
                  boxShadow: '0 16px 48px -12px rgba(255, 102, 0, 0.55)',
                }}
              >
                Ouvrir {new URL(tool.href).hostname} <span className="arrow">→</span>
              </a>
            </>
          )}
        </div>
      </section>

      <CTASection />

      <style>{`
        @media (max-width: 700px) {
          .aud-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
        }
      `}</style>
    </div>
  )
}
