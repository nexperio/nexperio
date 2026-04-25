import Link from 'next/link'
import type { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import { Reveal } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Cas de guérison',
  description:
    'Études de cas concrètes : du transactionnel au relationnel, transformation digitale d’une marque de mode. Méthode et résultats du Docteur Digital.',
}

const CASES = [
  {
    num: '01',
    tag: 'Electronique · B2B',
    title: 'Du transactionnel au relationnel',
    subtitle: 'Comment passer d’un site de vente à une vraie marque engagée',
    context:
      "Un acteur e-commerce spécialisé en équipement électronique cherche à passer d'un modèle transactionnel à une relation durable avec ses clients stratégiques.",
    challenge:
      "Développer l'engagement et la valeur des clients existants. Créer une véritable proximité avec les segments prioritaires.",
    steps: [
      {
        label: 'Diagnostic',
        body:
          "Analyse approfondie des segments clients, cartographie des moments-clés du parcours, identification des leviers de différenciation.",
      },
      {
        label: 'Prescription',
        body:
          "Refonte des parcours par segment, personnalisation fine des campagnes, expériences sur-mesure, enrichissement de l'offre, programme de fidélité repensé.",
      },
      {
        label: 'Exécution',
        body:
          "Formation des équipes, A/B testing continu, optimisation itérative.",
      },
    ],
    results: [
      { value: '+120%', label: 'inscriptions clients (vs N-1)' },
      { value: '+25%', label: 'taux de conversion' },
      { value: '+20%', label: 'taux de visiteurs récurrents' },
      { value: '+18%', label: 'NPS — objectif dépassé' },
    ],
    closer: 'Pas de recette miracle. Des tests, des ajustements, de la rigueur.',
  },
  {
    num: '02',
    tag: 'Mode · DTC',
    title: 'Transformation digitale d’une marque de mode',
    subtitle: 'Quand le social booste l’e-commerce',
    context:
      "Une marque de chaussures avec une forte audience sur les réseaux sociaux mais des ventes en ligne décevantes : trafic présent, conversion absente.",
    challenge:
      "Aligner l'expérience client entre les réseaux sociaux, le site e-commerce et les points de vente.",
    steps: [
      {
        label: 'Diagnostic',
        body:
          "Audit complet de la stratégie digitale, évaluation des objectifs, analyse de l'influence omnicanale et du parcours client.",
      },
      {
        label: 'Prescription',
        body:
          "Refonte de l'architecture e-commerce, intégration du contenu social dans le parcours d'achat, harmonisation des données produits, unification CRM.",
      },
      {
        label: 'Exécution',
        body:
          "Formation des équipes aux nouveaux outils, optimisation du merchandising digital, gestion des stocks orientée data.",
      },
    ],
    results: [
      { value: '+100%', label: 'rendez-vous en pop-up store' },
      { value: '+35%', label: 'ventes en 6 mois (budget marketing constant)' },
      { value: '↓', label: 'stocks optimisés (analyse prédictive)' },
    ],
    closer: 'Ne traitez pas les symptômes. Soignez la cause.',
  },
]

const LOGOS = ['Bastille', 'DamsPro', 'Melissa', 'Queue-it', 'RLVNT']

export default function CasPage() {
  return (
    <div className="page-enter">
      {/* Dark hero */}
      <section
        style={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 140,
          paddingBottom: 80,
          background: 'var(--navy-deep)',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.08,
            pointerEvents: 'none',
            backgroundImage:
              'radial-gradient(circle at 20% 30%, #ff6600 0, transparent 50%), radial-gradient(circle at 80% 70%, #fcc01e 0, transparent 50%)',
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow" style={{ color: '#ff6600', marginBottom: 32 }}>
            <span className="pulse-dot" /> Patients guéris
          </p>
          <h1 className="display" style={{ color: '#fff', maxWidth: 1100, marginBottom: 32 }}>
            Pas de recettes miracles. <br />
            <span className="serif" style={{ color: '#fcc01e' }}>Des résultats mesurés.</span>
          </h1>
          <p
            style={{
              fontFamily: "'Prompt', sans-serif",
              fontSize: 22,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: 760,
              lineHeight: 1.5,
              marginBottom: 24,
            }}
          >
            Nos études de cas vous permettent de comprendre notre expertise, quelques
            problématiques traitées et notre méthode de travail.
          </p>
          <p
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
              fontSize: 26,
              color: '#fcc01e',
            }}
          >
            « Ne traitez pas les symptômes. Soignez la cause. »
          </p>
        </div>
      </section>

      {/* Logos strip */}
      <section
        style={{
          padding: '40px 0',
          borderBottom: '1px solid var(--line)',
          background: 'var(--bg)',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 56,
            }}
          >
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--ink-mute)',
              }}
            >
              Ils nous ont fait confiance
            </p>
            {LOGOS.map((l) => (
              <span
                key={l}
                style={{
                  fontFamily: "'Prompt', sans-serif",
                  fontWeight: 600,
                  fontSize: 18,
                  color: 'var(--ink-soft)',
                  letterSpacing: '-0.01em',
                }}
              >
                {l}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies */}
      {CASES.map((c, idx) => (
        <section
          key={c.num}
          className="section"
          style={{ background: idx % 2 === 0 ? 'var(--bg)' : 'var(--bg-soft)' }}
        >
          <div className="container">
            <Reveal>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(280px, 380px) 1fr',
                  gap: 64,
                  marginBottom: 64,
                  alignItems: 'start',
                }}
                className="case-grid"
              >
                <div>
                  <span className="tag" style={{ marginBottom: 24, display: 'inline-block' }}>
                    {c.tag}
                  </span>
                  <p
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 80,
                      fontWeight: 500,
                      lineHeight: 1,
                      color: 'var(--orange)',
                      letterSpacing: '-0.05em',
                      marginTop: 24,
                    }}
                  >
                    {c.num}
                  </p>
                </div>
                <div>
                  <h2
                    className="display-2"
                    style={{ marginBottom: 16, fontSize: 'clamp(32px, 4vw, 56px)' }}
                  >
                    {c.title}
                  </h2>
                  <p
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontStyle: 'italic',
                      fontSize: 22,
                      color: 'var(--orange)',
                      marginBottom: 32,
                    }}
                  >
                    {c.subtitle}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Prompt', sans-serif",
                      fontSize: 17,
                      color: 'var(--ink-soft)',
                      lineHeight: 1.6,
                      marginBottom: 24,
                    }}
                  >
                    {c.context}
                  </p>
                  <div
                    style={{
                      borderLeft: '3px solid var(--orange)',
                      paddingLeft: 20,
                      fontFamily: "'Prompt', sans-serif",
                      fontSize: 18,
                      fontWeight: 600,
                      color: 'var(--ink)',
                      lineHeight: 1.5,
                    }}
                  >
                    {c.challenge}
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal stagger>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: 24,
                  marginBottom: 64,
                }}
              >
                {c.steps.map((s, i) => (
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
                        fontSize: 11,
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'var(--orange)',
                        marginBottom: 12,
                      }}
                    >
                      Étape {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3
                      style={{
                        fontFamily: "'Prompt', sans-serif",
                        fontWeight: 700,
                        fontSize: 22,
                        marginBottom: 16,
                      }}
                    >
                      {s.label}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Prompt', sans-serif",
                        fontSize: 14,
                        color: 'var(--ink-soft)',
                        lineHeight: 1.6,
                      }}
                    >
                      {s.body}
                    </p>
                  </div>
                ))}
              </div>
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
                <p className="eyebrow" style={{ color: '#ff6600', marginBottom: 32 }}>
                  Résultats
                </p>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(auto-fit, minmax(160px, 1fr))`,
                    gap: 32,
                  }}
                >
                  {c.results.map((r, i) => (
                    <div key={i}>
                      <p
                        style={{
                          fontFamily: "'Prompt', sans-serif",
                          fontWeight: 700,
                          fontSize: 56,
                          letterSpacing: '-0.03em',
                          color: '#fcc01e',
                          lineHeight: 1,
                          marginBottom: 8,
                        }}
                      >
                        {r.value}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Prompt', sans-serif",
                          fontSize: 13,
                          color: 'rgba(255,255,255,0.7)',
                          lineHeight: 1.4,
                        }}
                      >
                        {r.label}
                      </p>
                    </div>
                  ))}
                </div>
                <p
                  style={{
                    marginTop: 48,
                    paddingTop: 32,
                    borderTop: '1px solid rgba(255,255,255,0.15)',
                    fontFamily: "'Instrument Serif', serif",
                    fontStyle: 'italic',
                    fontSize: 22,
                    color: 'rgba(255,255,255,0.85)',
                  }}
                >
                  « {c.closer} »
                </p>
              </div>
            </Reveal>
          </div>

          <style>{`
            @media (max-width: 800px) {
              .case-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
            }
          `}</style>
        </section>
      ))}

      <CTASection />
    </div>
  )
}
