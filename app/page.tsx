'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import CTASection from '@/components/CTASection'
import { MoleculeLogo } from '@/components/MoleculeLogo'
import { Reveal } from '@/components/Reveal'

export default function HomePage() {
  return (
    <div className="page-enter">
      <HeroEditorial />
      <MarqueeSection />
      <ManifestoSection />
      <CXSection />
      <ServicesSection />
      <TestimonialSection />
      <CTASection />
    </div>
  )
}

function HeroEditorial() {
  const [parallax, setParallax] = useState(0)
  useEffect(() => {
    const onScroll = () => setParallax(Math.min(window.scrollY * 0.3, 200))
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 100,
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: '-8%',
          top: '15%',
          transform: `translateY(${-parallax}px) rotate(${parallax * 0.3}deg)`,
          opacity: 0.85,
          pointerEvents: 'none',
        }}
      >
        <MoleculeLogo size={620} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <p className="eyebrow" style={{ marginBottom: 32 }}>
          <span className="pulse-dot" style={{ marginRight: 4 }} />
          Bienvenue à la clinique Nexperio
        </p>

        <h1 className="display" style={{ maxWidth: 1100, marginBottom: 40 }}>
          Je ne fais pas <br />
          du conseil. <span className="serif accent">Je soigne.</span>
        </h1>

        <div
          className="hero-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(280px, 380px)',
            gap: 64,
            alignItems: 'end',
            marginBottom: 56,
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Prompt', sans-serif",
                fontSize: 22,
                fontWeight: 500,
                color: 'var(--ink)',
                maxWidth: 560,
                lineHeight: 1.4,
                marginBottom: 16,
              }}
            >
              Trafic qui stagne. Conversions qui patinent. Clients qui décrochent.
            </p>
            <p
              style={{
                fontFamily: "'Prompt', sans-serif",
                fontSize: 17,
                color: 'var(--ink-soft)',
                maxWidth: 560,
                lineHeight: 1.6,
              }}
            >
              L&apos;e-commerce est un organisme vivant. Quand il va mal, il faut plus qu&apos;un
              &laquo;avis&raquo;. Il faut un{' '}
              <span style={{ color: 'var(--orange)', fontWeight: 600 }}>diagnostic</span>. Et un
              vrai <span style={{ color: 'var(--orange)', fontWeight: 600 }}>traitement</span>.
            </p>
          </div>

          <div style={{ borderLeft: '2px solid var(--orange)', paddingLeft: 24 }}>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--ink-mute)',
                marginBottom: 12,
              }}
            >
              Mon métier
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                'Stratégie e-commerce',
                'Expérience client',
                'Conversion & fidélisation',
                "Usage opérationnel de l'IA",
              ].map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontFamily: "'Prompt', sans-serif",
                    fontSize: 14,
                    color: 'var(--ink)',
                    padding: '8px 0',
                    borderBottom: i < 3 ? '1px solid var(--line)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <span
                    style={{ color: 'var(--orange)', fontFamily: 'monospace', fontSize: 12 }}
                  >
                    0{i + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <Link href="/rdv" className="btn btn-primary">
            Prendre rendez-vous <span className="arrow">→</span>
          </Link>
          <Link href="/les-traitements" className="btn btn-outline">
            Voir les traitements
          </Link>
        </div>

        <div
          style={{
            position: 'absolute',
            bottom: 40,
            right: 0,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            letterSpacing: '0.18em',
            color: 'var(--ink-mute)',
            writingMode: 'vertical-rl',
            transform: 'rotate(180deg)',
          }}
        >
          NEXPERIO · CLINIQUE DIGITALE · EST. 2024
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 900px) {
          :global(.hero-grid) {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  )
}

function MarqueeSection() {
  const items = [
    'DIAGNOSTIC',
    'PRESCRIPTION',
    'TRAITEMENT',
    'GUÉRISON',
    'PRÉVENTION',
    'eCOMMERCE',
    'CX',
    'IA',
  ]
  return (
    <section
      style={{
        padding: '32px 0',
        borderTop: '1px solid var(--line)',
        borderBottom: '1px solid var(--line)',
        overflow: 'hidden',
      }}
    >
      <div className="marquee">
        {[...items, ...items, ...items].map((it, i) => (
          <span
            key={i}
            style={{
              fontFamily: "'Prompt', sans-serif",
              fontWeight: 700,
              fontSize: 56,
              letterSpacing: '-0.02em',
              color: i % 2 === 0 ? 'var(--ink)' : 'transparent',
              WebkitTextStroke: i % 2 === 0 ? 'none' : '1px var(--ink)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 48,
            }}
          >
            {it}
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--orange)',
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </section>
  )
}

function ManifestoSection() {
  return (
    <section className="section" style={{ background: 'var(--bg-soft)' }}>
      <div className="container">
        <Reveal>
          <div
            className="manifesto-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(280px, 380px) 1fr',
              gap: 64,
              alignItems: 'center',
              maxWidth: 1100,
              margin: '0 auto',
            }}
          >
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'absolute',
                  inset: '-12px',
                  background: 'var(--orange)',
                  transform: 'rotate(-2deg)',
                  zIndex: 0,
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/docteur-digital.png"
                alt="Le Docteur Digital — Arnaud Guedj"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  filter: 'grayscale(0%) saturate(1.05)',
                  boxShadow: '0 24px 48px rgba(11, 18, 33, 0.18)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 16,
                  right: -16,
                  background: 'var(--navy)',
                  color: '#fff',
                  padding: '10px 16px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: '0.18em',
                }}
              >
                ARNAUD GUEDJ · M.D.
              </div>
            </div>

            <div>
              <p className="eyebrow" style={{ marginBottom: 24 }}>Manifeste</p>
              <p
                style={{
                  fontFamily: "'Prompt', sans-serif",
                  fontWeight: 600,
                  fontSize: 'clamp(24px, 2.6vw, 36px)',
                  lineHeight: 1.25,
                  letterSpacing: '-0.02em',
                  color: 'var(--ink)',
                  marginBottom: 24,
                }}
              >
                Chez Nexperio, nous ne vendons pas{' '}
                <span className="serif accent">de recettes miracles.</span>
              </p>
              <p
                style={{
                  fontFamily: "'Prompt', sans-serif",
                  fontSize: 18,
                  lineHeight: 1.6,
                  color: 'var(--ink-soft)',
                }}
              >
                Nous soignons. Avec des diagnostics précis. Et des traitements adaptés à chaque
                business. Notre expertise transforme vos leviers digitaux en moteur de croissance
                durable. Avec ce qui marche. Pas avec les tendances du moment.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
      <style jsx>{`
        @media (max-width: 800px) {
          :global(.manifesto-grid) {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </section>
  )
}

function CXSection() {
  return (
    <section className="section">
      <div className="container">
        <div
          className="cx-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'center',
          }}
        >
          <Reveal>
            <p className="eyebrow" style={{ marginBottom: 16 }}>La priorité absolue</p>
            <h2 className="display-2" style={{ marginBottom: 24 }}>
              L&apos;expérience client n&apos;est pas un sujet annexe.{' '}
              <span className="serif accent">C&apos;est LE sujet.</span>
            </h2>
            <p
              style={{
                fontFamily: "'Prompt', sans-serif",
                fontSize: 18,
                color: 'var(--ink-soft)',
                lineHeight: 1.6,
                marginBottom: 16,
              }}
            >
              Chaque point de contact doit nourrir la relation. Et chaque relation bien traitée
              nourrit la croissance.
            </p>
            <p
              style={{
                fontFamily: "'Prompt', sans-serif",
                fontSize: 16,
                color: 'var(--ink-soft)',
                lineHeight: 1.6,
              }}
            >
              Si l&apos;interface est floue, si le parcours cloche, si l&apos;effort est à la charge
              du client… Vous perdez des ventes. Et vous ne le saurez peut-être jamais.
            </p>
          </Reveal>
          <Reveal>
            <div
              style={{
                background: 'var(--navy)',
                color: '#fff',
                padding: 48,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{ position: 'absolute', top: -40, right: -40, opacity: 0.08 }}>
                <MoleculeLogo size={240} animated={false} />
              </div>
              <p
                className="eyebrow"
                style={{ color: '#ff6600', marginBottom: 32, position: 'relative' }}
              >
                💉 Mon rôle
              </p>
              {[
                'Ausculter votre expérience actuelle',
                'Identifier les points de friction',
                'Faire sauter les obstacles',
                'Optimiser chaque clic, chaque étape',
              ].map((it, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 16,
                    padding: '14px 0',
                    borderBottom: i < 3 ? '1px solid rgba(255,255,255,0.15)' : 'none',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12,
                      color: '#ff6600',
                    }}
                  >
                    0{i + 1}
                  </span>
                  <p
                    style={{
                      fontFamily: "'Prompt', sans-serif",
                      fontSize: 17,
                      color: 'rgba(255,255,255,0.9)',
                    }}
                  >
                    {it}
                  </p>
                </div>
              ))}
              <div
                style={{
                  marginTop: 32,
                  paddingTop: 32,
                  borderTop: '1px solid rgba(255,255,255,0.2)',
                  position: 'relative',
                }}
              >
                <p
                  style={{
                    fontFamily: "'Prompt', sans-serif",
                    fontSize: 22,
                    fontWeight: 600,
                    lineHeight: 1.3,
                  }}
                >
                  Des visiteurs qui comprennent.{' '}
                  <span className="accent">Des clients qui achètent.</span> Des utilisateurs qui
                  reviennent.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 900px) {
          :global(.cx-grid) {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}

function ServicesSection() {
  const services = [
    {
      tag: 'eCommerce',
      num: '01',
      title: 'eCommerce B2B et B2C',
      body:
        "L'e-commerce n'est plus un canal. C'est un pilier. Il irrigue toute l'entreprise : stratégie, offre, marges, relation client.",
      callout: 'Diagnostic précis. Traitement sur mesure. Impact concret sur le chiffre.',
    },
    {
      tag: 'CX',
      num: '02',
      title: 'Expérience Client',
      body:
        "Pas d'expérience client, pas de fidélité. Pas de fidélité, pas de business. Les marques qui durent soignent chaque étape.",
      callout:
        'Expériences fluides, utiles, mémorables. Chaque interaction devient un levier de croissance.',
    },
    {
      tag: 'IA',
      num: '03',
      title: 'Intelligence Artificielle',
      body:
        "L'IA n'est plus une option. C'est un avantage compétitif. Encore faut-il savoir par où commencer — et comment l'appliquer.",
      callout: 'Webinaires de mise à niveau + workshops opérationnels pour vos équipes.',
    },
  ]

  return (
    <section className="section" style={{ background: 'var(--bg-section)' }}>
      <div className="container">
        <Reveal>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'end',
              marginBottom: 64,
              flexWrap: 'wrap',
              gap: 24,
            }}
          >
            <div>
              <p className="eyebrow" style={{ marginBottom: 16 }}>Nos traitements</p>
              <h2 className="display-2" style={{ maxWidth: 700 }}>
                Ciblés. Mesurés. <span className="serif accent">Concrets.</span>
              </h2>
            </div>
            <Link href="/les-traitements" className="btn btn-ghost">
              Voir tous les traitements →
            </Link>
          </div>
        </Reveal>

        <Reveal stagger>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24,
            }}
          >
            {services.map((s) => (
              <Link
                key={s.num}
                href="/les-traitements"
                className="card"
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 32 }}>
                  <span className="tag">{s.tag}</span>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 13,
                      color: 'var(--ink-mute)',
                    }}
                  >
                    {s.num}
                  </span>
                </div>
                <h3
                  style={{
                    fontFamily: "'Prompt', sans-serif",
                    fontWeight: 700,
                    fontSize: 28,
                    marginBottom: 16,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {s.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Prompt', sans-serif",
                    fontSize: 15,
                    color: 'var(--ink-soft)',
                    lineHeight: 1.6,
                    marginBottom: 24,
                  }}
                >
                  {s.body}
                </p>
                <p
                  style={{
                    fontFamily: "'Prompt', sans-serif",
                    fontSize: 14,
                    fontWeight: 500,
                    color: 'var(--orange)',
                    lineHeight: 1.5,
                    marginBottom: 32,
                    marginTop: 'auto',
                    borderTop: '1px solid var(--line)',
                    paddingTop: 24,
                  }}
                >
                  {s.callout}
                </p>
                <span
                  style={{
                    fontFamily: "'Prompt', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: 'var(--ink)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  Voir le traitement <span style={{ fontSize: 16 }}>→</span>
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function TestimonialSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <p
            className="eyebrow"
            style={{ justifyContent: 'center', textAlign: 'center', marginBottom: 32 }}
          >
            Cas de guérison
          </p>
          <blockquote style={{ maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
            <p
              style={{
                fontFamily: "'Prompt', sans-serif",
                fontWeight: 500,
                fontSize: 'clamp(28px, 3.4vw, 44px)',
                lineHeight: 1.25,
                letterSpacing: '-0.02em',
                marginBottom: 40,
              }}
            >
              <span className="serif accent" style={{ fontSize: '1.4em', verticalAlign: '-0.1em' }}>
                «
              </span>{' '}
              Nexperio nous a aidé à repenser totalement notre stratégie digitale et notre relation
              client. Les résultats du canal de ventes en ligne ont{' '}
              <span className="accent">doublé en 6 mois.</span>{' '}
              <span className="serif accent" style={{ fontSize: '1.4em', verticalAlign: '-0.1em' }}>
                »
              </span>
            </p>
            <footer
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 16,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #ff6600, #fcc01e)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontFamily: "'Prompt', sans-serif",
                  fontWeight: 600,
                  fontSize: 18,
                }}
              >
                FJ
              </div>
              <div style={{ textAlign: 'left' }}>
                <p style={{ fontFamily: "'Prompt', sans-serif", fontWeight: 600, fontSize: 16 }}>
                  Felipe Jacome
                </p>
                <p
                  style={{
                    fontFamily: "'Prompt', sans-serif",
                    fontSize: 14,
                    color: 'var(--ink-mute)',
                  }}
                >
                  CEO, Melissa
                </p>
              </div>
            </footer>
          </blockquote>
          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link href="/cas-de-guerison" className="btn btn-outline">
              Voir les cas de guérison
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
