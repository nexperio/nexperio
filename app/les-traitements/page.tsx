import Link from 'next/link'
import type { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import { Reveal } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Les traitements',
  description:
    "Trois traitements sur mesure pour recouvrer la santé de votre eCommerce, guérir votre expérience client et vous vacciner à l'Intelligence Artificielle.",
}

const TREATMENTS = [
  {
    num: '01',
    tag: 'eCommerce',
    title: 'eCommerce B2B et B2C',
    subtitle: 'Votre catalogue en perfusion digitale',
    body:
      "De la définition du protocole stratégique à l'exécution opérationnelle, chaque étape est calibrée au scalpel. On injecte les bonnes doses d'optimisation sur vos canaux d'acquisition.",
    result: 'Un cœur de croissance qui bat plus vite. Un ROI en pleine forme.',
  },
  {
    num: '02',
    tag: 'CX',
    title: 'Expérience Client',
    subtitle: 'Bilan clinique du parcours utilisateur',
    body:
      "On détecte chaque point de friction comme un foyer infectieux. On prescrit et implémente les antidotes sur-mesure.",
    result: 'Satisfaction renforcée. Engagement réanimé. Fidélisation garantie.',
  },
  {
    num: '03',
    tag: 'IA',
    title: 'Intelligence Artificielle',
    subtitle: 'Programme intensif d’acculturation',
    body:
      "Webinaire d'introduction, ateliers pratiques thématiques, diagnostic personnalisé et bootcamp immersif. ChatGPT et ses cousins, génération d'images, calendrier éditorial IA, workflows sur-mesure…",
    result: "Chaque session est un acte opératoire pour implanter l'IA dans vos process.",
  },
]

const ECOMMERCE_DETAIL = [
  {
    title: 'Audit & Vision stratégique',
    items: [
      'Analyse approfondie de votre modèle économique',
      "Stratégie résultant d'objectifs ambitieux et atteignables",
      'Roadmap digitale collaborative, assortie d’indicateurs de suivi',
    ],
  },
  {
    title: 'Excellence opérationnelle',
    items: [
      "Optimisation de l'expérience utilisateur sur tous les points de contact",
      "Déploiement de leviers d'acquisition performants",
      'Renforcement de la conversion (merchandising, pricing, promotions)',
    ],
  },
  {
    title: 'Performance durable',
    items: [
      'Stratégies de fidélisation client innovantes',
      'Pilotage de la rentabilité par le suivi des indicateurs',
      'Sélection et intégration des solutions technologiques adaptées',
    ],
  },
]

const CX_DETAIL = [
  {
    title: 'Optimisation data-driven du parcours',
    items: [
      'Acquisition : attirer les clients idéaux',
      "Conversion : transformer l'intérêt en action",
      'Fidélisation : créer des relations durables',
    ],
  },
  {
    title: 'Mesure & pilotage',
    items: [
      "Mesure du NPS pour l'amélioration continue",
      'Analyse fine des données pour éliminer les frictions',
      'Tableaux de bord opérationnels',
    ],
  },
  {
    title: 'Stratégie conversationnelle omnicanale',
    items: [
      'Marketing relationnel (eCRM)',
      'Réseaux sociaux',
      'Messagerie instantanée (SMS, WhatsApp)',
    ],
  },
]

const IA_DETAIL = [
  {
    title: 'Acculturation des équipes',
    items: [
      "Sessions interactives sur l'IA générative",
      "Applications dans l'optimisation de l'expérience client",
      "Intégration aux technologies eCommerce existantes",
    ],
  },
  {
    title: 'Implémentation',
    items: [
      "Évaluation des opportunités d'intégration dans vos process",
      "Mise en place d'un processus d'optimisation itératif",
      "Affinage des modèles pour maximiser le ROI",
    ],
  },
]

function DetailBlock({
  eyebrow,
  title,
  blocks,
  background,
}: {
  eyebrow: string
  title: string
  blocks: { title: string; items: string[] }[]
  background?: string
}) {
  return (
    <section className="section" style={{ background: background || 'var(--bg)' }}>
      <div className="container">
        <Reveal>
          <p className="eyebrow" style={{ marginBottom: 16 }}>{eyebrow}</p>
          <h2 className="display-2" style={{ marginBottom: 64, maxWidth: 900 }}>
            {title}
          </h2>
        </Reveal>
        <Reveal stagger>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24,
            }}
          >
            {blocks.map((b, i) => (
              <div key={i} className="card">
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--orange)',
                    marginBottom: 16,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h3
                  style={{
                    fontFamily: "'Prompt', sans-serif",
                    fontWeight: 700,
                    fontSize: 22,
                    marginBottom: 24,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {b.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {b.items.map((it, j) => (
                    <li
                      key={j}
                      style={{
                        fontFamily: "'Prompt', sans-serif",
                        fontSize: 15,
                        color: 'var(--ink-soft)',
                        padding: '10px 0',
                        borderBottom:
                          j < b.items.length - 1 ? '1px solid var(--line)' : 'none',
                        lineHeight: 1.5,
                        display: 'flex',
                        gap: 10,
                      }}
                    >
                      <span style={{ color: 'var(--orange)', flexShrink: 0 }}>—</span>
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function TraitementsPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section
        style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 140,
          paddingBottom: 80,
          background: 'var(--bg-soft)',
        }}
      >
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 32 }}>
            <span className="pulse-dot" /> Nos 3 traitements
          </p>
          <h1 className="display" style={{ maxWidth: 1200, marginBottom: 32 }}>
            Diagnostiquée. Soignée. <span className="serif accent">Optimisée.</span>
          </h1>
          <p
            style={{
              fontFamily: "'Prompt', sans-serif",
              fontSize: 22,
              color: 'var(--ink-soft)',
              maxWidth: 820,
              lineHeight: 1.5,
              marginBottom: 40,
            }}
          >
            Nos traitements sur mesure vous permettent de recouvrer la santé de votre eCommerce,
            de guérir votre expérience client et de vous vacciner à l&apos;Intelligence
            Artificielle.
          </p>
          <Link href="/rdv" className="btn btn-primary">
            Demander un diagnostic <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      {/* 3 treatments overview */}
      <section className="section" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <Reveal stagger>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 24,
              }}
            >
              {TREATMENTS.map((t) => (
                <div key={t.num} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 32 }}>
                    <span className="tag">{t.tag}</span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 13,
                        color: 'var(--ink-mute)',
                      }}
                    >
                      {t.num}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Prompt', sans-serif",
                      fontWeight: 700,
                      fontSize: 28,
                      marginBottom: 8,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {t.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Instrument Serif', serif",
                      fontStyle: 'italic',
                      fontSize: 18,
                      color: 'var(--orange)',
                      marginBottom: 24,
                    }}
                  >
                    {t.subtitle}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Prompt', sans-serif",
                      fontSize: 15,
                      color: 'var(--ink-soft)',
                      lineHeight: 1.6,
                      marginBottom: 24,
                      flex: 1,
                    }}
                  >
                    {t.body}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Prompt', sans-serif",
                      fontSize: 14,
                      fontWeight: 600,
                      color: 'var(--ink)',
                      lineHeight: 1.5,
                      paddingTop: 24,
                      borderTop: '1px solid var(--line)',
                    }}
                  >
                    {t.result}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <DetailBlock
        eyebrow="Traitement 01 · eCommerce"
        title={"Votre eCommerce au microscope."}
        blocks={ECOMMERCE_DETAIL}
      />
      <DetailBlock
        eyebrow="Traitement 02 · CX"
        title={"Le parcours client, en perfusion."}
        blocks={CX_DETAIL}
        background="var(--bg-soft)"
      />
      <DetailBlock
        eyebrow="Traitement 03 · IA"
        title={"L’IA implantée dans vos process."}
        blocks={IA_DETAIL}
      />

      <CTASection />
    </div>
  )
}
