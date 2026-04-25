import Link from 'next/link'
import type { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import { Reveal } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Le Docteur Digital',
  description:
    "Arnaud Guedj, fondateur de Nexperio. 30 ans d'expérience, 4 entreprises, une méthode : diagnostiquer, prescrire, soigner.",
}

const PODCAST_LINKS = [
  { label: 'Spotify', href: 'https://lnkd.in/dUB74jMq' },
  { label: 'Apple Podcasts', href: 'https://lnkd.in/dPavRt9k' },
  { label: 'YouTube', href: 'https://lnkd.in/d6zMHEW5' },
  { label: 'Amazon Music', href: 'https://lnkd.in/dhsBJyNR' },
  { label: 'Deezer', href: 'https://lnkd.in/d6GA8CkM' },
]

const PRINCIPLES = [
  {
    label: 'Excellence',
    body:
      "Chaque diagnostic, chaque action est menée avec un niveau d'exigence maximal.",
  },
  {
    label: 'Engagement',
    body: 'Je suis à vos côtés. Je co-construis votre succès.',
  },
  {
    label: 'Agilité',
    body: "J'anticipe. Je veille. J'imagine avec vous les solutions de demain.",
  },
  {
    label: 'Intégrité',
    body:
      "Pas de poudre aux yeux. Pas de fausses promesses. Juste un digital éthique, transparent, respectueux.",
  },
]

const QA = [
  {
    q: 'Quel a été le moment décisif qui vous a conduit à créer Nexperio ?',
    a: "Ma formation sur le leadership de transformation, particulièrement la partie sur l'intelligence émotionnelle, a été le déclencheur. J'ai réalisé qu'il était temps pour moi de créer ma propre société et d'être en rapport direct avec le client, qui est au centre de mes préoccupations.",
  },
  {
    q: 'Quelles expériences professionnelles ont le plus façonné votre vision du digital ?',
    a: "Avec 30 ans d'expérience et seulement 4 entreprises, chacune m'a apporté une dimension essentielle : la première m'a appris à garder une vue centralisée sur le client, la deuxième m'a initié au marketing digital, la troisième m'a enseigné la vente en ligne dans toutes ses dimensions, et la quatrième a été une synthèse où j'ai exercé un rôle d'entrepreneur/directeur général responsable de la rentabilité du business.",
  },
  {
    q: 'Quelles formations ont eu le plus grand impact sur votre approche professionnelle ?',
    a: "Ma formation en architecture intérieure et scénographie m'a fait prendre conscience de la place centrale de l'humain dans son environnement. Récemment, les certifications en négociation, leadership de transformation, gestion financière et intelligence artificielle générative ont considérablement enrichi ma pratique professionnelle.",
  },
  {
    q: 'Quelles sont les trois valeurs fondamentales qui guident votre approche ?',
    a: "Honnêteté/intégrité, Générosité/bienveillance, et Enjouement/humour/bonne humeur.",
  },
  {
    q: 'Quelle est votre « signature » professionnelle ?',
    a: "Je challenge d'abord le statu quo en cherchant à comprendre la stratégie initiale et sa validité. J'analyse ensuite si les actions sont en accord avec cette stratégie. J'apporte professionnalisme et curiosité pour définir convenablement les objectifs et ne pas se tromper sur les actions à mener. Je fais du sur-mesure.",
  },
  {
    q: 'Comment décririez-vous votre méthodologie de travail ?',
    a: "Ma méthodologie se déroule en trois étapes : d'abord un questionnement approfondi pour comprendre la demande du client, puis une reformulation avec proposition d'axes de travail, et enfin une co-construction de la feuille de route (process, outils, formations) que nous appliquons ensemble.",
  },
  {
    q: 'Comment équilibrez-vous technologie et besoins humains dans vos projets ?',
    a: "L'humain est la ressource la plus essentielle dans une entreprise. La technologie doit appuyer le travail de l'humain, libérant du temps pour des tâches à forte valeur ajoutée comme l'accompagnement, l'encadrement et le développement personnel.",
  },
  {
    q: 'Comment abordez-vous les situations où un client est réticent au changement ?',
    a: "Plutôt que de forcer, je préfère questionner pour faire exprimer les frustrations, laisser « mijoter » et demander ce qui empêche la mise en place de solutions. J'utilise la méthode des 5 pourquoi pour identifier la véritable raison de la résistance et permettre au client de la verbaliser lui-même.",
  },
  {
    q: 'Comment décririez-vous votre style de leadership ?',
    a: "Bienveillant et encourageant. Je donne le cadre et l'objectif, puis je laisse faire. Je reste disponible si besoin, mais je préfère donner un axe de réflexion plutôt que ma solution.",
  },
  {
    q: 'Quel est votre conseil pour quelqu’un qui débute dans la transformation digitale ?',
    a: "Reste curieux. Lis beaucoup, inspire-toi de ce qui marche et aussi de ce qui ne fonctionne pas. Réfléchis à comment tout cela peut t'enrichir professionnellement et améliorer tes interactions avec le client.",
  },
]

export default function DocteurPage() {
  return (
    <div className="page-enter">
      {/* Dark hero */}
      <section
        style={{
          minHeight: '100vh',
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
          <div
            className="docteur-hero-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr minmax(280px, 380px)',
              gap: 64,
              alignItems: 'center',
            }}
          >
            <div>
              <p className="eyebrow" style={{ color: '#ff6600', marginBottom: 32 }}>
                <span className="pulse-dot" /> Arnaud Guedj · M.D.
              </p>
              <h1 className="display" style={{ color: '#fff', marginBottom: 32 }}>
                Le digital n&apos;est pas un gadget.<br />
                <span className="serif" style={{ color: '#fcc01e' }}>C&apos;est un levier vital.</span>
              </h1>
              <p
                style={{
                  fontFamily: "'Prompt', sans-serif",
                  fontSize: 22,
                  color: 'rgba(255,255,255,0.78)',
                  maxWidth: 720,
                  lineHeight: 1.5,
                  marginBottom: 24,
                }}
              >
                Mal prescrit, il épuise les équipes. Mal compris, il tue la rentabilité. Chez
                Nexperio, je traite les pathologies numériques avant qu&apos;elles ne deviennent
                chroniques.
              </p>
              <p
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: 'italic',
                  fontSize: 24,
                  color: '#fcc01e',
                  marginBottom: 40,
                }}
              >
                Mon rôle : transformer vos défis en croissance durable.
              </p>
              <Link href="/rdv" className="btn btn-primary">
                Demander une consultation <span className="arrow">→</span>
              </Link>
            </div>

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
                alt="Arnaud Guedj — Le Docteur Digital"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                  boxShadow: '0 32px 64px rgba(0,0,0,0.4)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 16,
                  right: -16,
                  background: 'var(--navy-deep)',
                  color: '#fff',
                  padding: '10px 16px',
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 11,
                  letterSpacing: '0.18em',
                  border: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                ARNAUD GUEDJ · M.D.
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .docteur-hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
          }
        `}</style>
      </section>

      {/* 4 principles */}
      <section className="section" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <Reveal>
            <div style={{ marginBottom: 64, maxWidth: 720 }}>
              <p className="eyebrow" style={{ marginBottom: 16 }}>4 principes non-négociables</p>
              <h2 className="display-2">
                Mes <span className="serif accent">engagements.</span>
              </h2>
            </div>
          </Reveal>

          <Reveal stagger>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 24,
              }}
            >
              {PRINCIPLES.map((p, i) => (
                <div key={p.label} className="card">
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
                      fontSize: 28,
                      marginBottom: 16,
                    }}
                  >
                    {p.label}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Prompt', sans-serif",
                      fontSize: 15,
                      color: 'var(--ink-soft)',
                      lineHeight: 1.6,
                    }}
                  >
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Q&A */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div style={{ marginBottom: 64, maxWidth: 720 }}>
              <p className="eyebrow" style={{ marginBottom: 16 }}>Qui est le Docteur Digital ?</p>
              <h2 className="display-2">
                10 questions. <span className="serif accent">10 réponses.</span>
              </h2>
            </div>
          </Reveal>

          <div style={{ maxWidth: 880, margin: '0 auto' }}>
            {QA.map((item, i) => (
              <Reveal key={i}>
                <div
                  style={{
                    padding: '40px 0',
                    borderBottom:
                      i < QA.length - 1 ? '1px solid var(--line)' : 'none',
                    display: 'grid',
                    gridTemplateColumns: '60px 1fr',
                    gap: 24,
                    alignItems: 'start',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 14,
                      color: 'var(--orange)',
                      letterSpacing: '0.05em',
                      paddingTop: 8,
                    }}
                  >
                    Q.{String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Prompt', sans-serif",
                        fontWeight: 600,
                        fontSize: 26,
                        lineHeight: 1.25,
                        letterSpacing: '-0.01em',
                        marginBottom: 16,
                      }}
                    >
                      {item.q}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Prompt', sans-serif",
                        fontSize: 17,
                        color: 'var(--ink-soft)',
                        lineHeight: 1.7,
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interviews & médias */}
      <section className="section" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <Reveal>
            <div style={{ marginBottom: 48, maxWidth: 720 }}>
              <p className="eyebrow" style={{ marginBottom: 16 }}>Le Docteur dans la presse</p>
              <h2 className="display-2">
                Interviews <span className="serif accent">&amp; médias.</span>
              </h2>
              <p
                style={{
                  fontFamily: "'Prompt', sans-serif",
                  fontSize: 18,
                  color: 'var(--ink-soft)',
                  lineHeight: 1.6,
                  marginTop: 24,
                }}
              >
                Conversations, podcasts et passages presse — pour parler e-commerce, IA et stratégie
                digitale en clair.
              </p>
            </div>
          </Reveal>

          {/* Business Legend */}
          <Reveal>
            <div
              className="bl-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '1.1fr 1fr',
                gap: 64,
                alignItems: 'center',
                background: 'var(--navy)',
                color: '#fff',
                padding: 56,
                position: 'relative',
                overflow: 'hidden',
                marginBottom: 32,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: 0.08,
                  pointerEvents: 'none',
                  backgroundImage:
                    'radial-gradient(circle at 80% 30%, #ff6600 0, transparent 50%)',
                }}
              />
              <div style={{ position: 'relative' }}>
                <p className="eyebrow" style={{ color: '#ff6600', marginBottom: 24 }}>
                  Podcast · Business Legend
                </p>
                <h3
                  className="display-2"
                  style={{
                    color: '#fff',
                    fontSize: 'clamp(24px, 3vw, 40px)',
                    marginBottom: 24,
                  }}
                >
                  L&apos;invité de <span className="serif" style={{ color: '#fcc01e' }}>Business Legend.</span>
                </h3>
                <p
                  style={{
                    fontFamily: "'Prompt', sans-serif",
                    fontSize: 17,
                    color: 'rgba(255,255,255,0.75)',
                    lineHeight: 1.6,
                    marginBottom: 32,
                  }}
                >
                  L&apos;épisode complet sur Business Legend — e-commerce, transformation digitale
                  et IA. Disponible sur toutes les plateformes.
                </p>
                <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                  {PODCAST_LINKS.map((p) => (
                    <a
                      key={p.label}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        fontFamily: "'Prompt', sans-serif",
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#fff',
                        padding: '12px 18px',
                        border: '1.5px solid rgba(255,255,255,0.4)',
                        textDecoration: 'none',
                      }}
                    >
                      {p.label} →
                    </a>
                  ))}
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <video
                  controls
                  preload="metadata"
                  style={{
                    width: '100%',
                    background: '#000',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                  poster="/videos/business-legend-poster.jpg"
                >
                  <source src="/videos/business-legend-extrait.mp4" type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture vidéo.
                </video>
                <p
                  style={{
                    marginTop: 12,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.5)',
                  }}
                >
                  Extrait · Business Legend
                </p>
              </div>
            </div>
          </Reveal>

          {/* Café de l'eCommerce */}
          <Reveal>
            <div
              className="card cafe-card"
              style={{
                display: 'grid',
                gridTemplateColumns: '1.1fr 1fr',
                gap: 48,
                alignItems: 'center',
                marginBottom: 32,
              }}
            >
              <div>
                <p className="eyebrow" style={{ marginBottom: 16 }}>
                  Podcast · Le Café de l&apos;eCommerce
                </p>
                <h3
                  style={{
                    fontFamily: "'Prompt', sans-serif",
                    fontWeight: 700,
                    fontSize: 'clamp(22px, 2.6vw, 32px)',
                    letterSpacing: '-0.01em',
                    marginBottom: 16,
                    lineHeight: 1.2,
                  }}
                >
                  Paye Ta Tournée ! <span className="serif accent">#07</span>
                </h3>
                <p
                  style={{
                    fontFamily: "'Prompt', sans-serif",
                    fontSize: 16,
                    color: 'var(--ink-soft)',
                    lineHeight: 1.6,
                    marginBottom: 24,
                  }}
                >
                  L&apos;interview décalée du Café de l&apos;eCommerce. Discussion à bâtons rompus
                  sur le métier, les coulisses et la pratique du Docteur Digital.
                </p>
                <a
                  href="https://smartlink.ausha.co/le-cafe-de-l-ecommerce/paye-ta-tournee-07-arnaud"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Prompt', sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--ink)',
                    padding: '12px 18px',
                    border: '1.5px solid var(--ink)',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  Écouter sur toutes les plateformes →
                </a>
              </div>
              <div>
                <audio controls preload="metadata" style={{ width: '100%' }}>
                  <source src="/audios/paye-ta-tournee.mp3" type="audio/mpeg" />
                  Votre navigateur ne supporte pas la lecture audio.
                </audio>
                <p
                  style={{
                    marginTop: 12,
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-mute)',
                  }}
                >
                  Épisode complet
                </p>
              </div>
            </div>
          </Reveal>

          {/* BlueBirds */}
          <Reveal>
            <a
              href="https://bluebirds.partners/arnaud-guedj-docteur-digital-e-commerce/"
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                display: 'grid',
                gridTemplateColumns: 'auto 1fr auto',
                gap: 32,
                alignItems: 'center',
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  color: 'var(--ink-mute)',
                }}
              >
                01
              </span>
              <div>
                <p className="eyebrow" style={{ marginBottom: 12 }}>
                  Interview · BlueBirds
                </p>
                <h3
                  style={{
                    fontFamily: "'Prompt', sans-serif",
                    fontWeight: 700,
                    fontSize: 22,
                    letterSpacing: '-0.01em',
                    marginBottom: 8,
                  }}
                >
                  Arnaud Guedj, le Docteur Digital de l&apos;e-commerce
                </h3>
                <p
                  style={{
                    fontFamily: "'Prompt', sans-serif",
                    fontSize: 15,
                    color: 'var(--ink-soft)',
                    lineHeight: 1.6,
                  }}
                >
                  Portrait long format sur BlueBirds — parcours, méthode, vision du e-commerce et
                  de la transformation digitale.
                </p>
              </div>
              <span
                style={{
                  fontFamily: "'Prompt', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--orange)',
                }}
              >
                Lire →
              </span>
            </a>
          </Reveal>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .bl-grid { grid-template-columns: 1fr !important; gap: 32px !important; padding: 32px !important; }
            .cafe-card { grid-template-columns: 1fr !important; gap: 32px !important; }
          }
        `}</style>
      </section>

      <CTASection />
    </div>
  )
}
