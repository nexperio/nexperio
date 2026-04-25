import Link from 'next/link'
import type { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import { Reveal } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Remèdes e-commerce & digital — articles, analyses et retours d’expérience du Docteur Digital.',
}

const POSTS = [
  {
    slug: 'e-commerce-7-pieges-invisibles',
    title:
      "E-commerce : et si votre croissance était freinée par l'un de ces 7 pièges invisibles ?",
    excerpt:
      "Les freins de croissance qu'on ne voit pas — et pourquoi en 2025, l'expérience client doit être irréprochable.",
    date: '17 avril 2026',
    readTime: '2 min',
    tag: 'Stratégie',
  },
  {
    slug: 'doubler-ventes-en-ligne-upsell',
    title:
      "J'ai vu des business e-commerce doubler leurs ventes en ligne en une année…",
    excerpt:
      'La stratégie d’upsell « good, better, best » : comment la structurer pour doubler vos ventes en ligne.',
    date: '24 mars 2026',
    readTime: '2 min',
    tag: 'Conversion',
  },
  {
    slug: 'beaute-strategie-ecommerce',
    title:
      "🪞 Miroir, miroir, dis-moi qui aura la plus belle stratégie e-commerce dans l'industrie de la beauté…",
    excerpt:
      'Marché de la beauté : 24,5 % du marché US des cosmétiques en ligne projeté à horizon 2028.',
    date: '24 mars 2026',
    readTime: '1 min',
    tag: 'Marché',
  },
  {
    slug: 'levier-strategique-meconnu',
    title:
      "Un levier stratégique méconnu en e-commerce… vous voulez l'info ?",
    excerpt:
      'La recherche interne — l’un des leviers e-commerce les plus sous-exploités, et pourquoi cela coûte cher.',
    date: '24 mars 2026',
    readTime: '2 min',
    tag: 'Conversion',
  },
  {
    slug: 'digital-river-depot-de-bilan',
    title:
      "🚨 Digital River en dépôt de bilan : séisme dans le monde de l'e-commerce 🚨",
    excerpt:
      'Une faillite qui en dit long sur l’infrastructure du e-commerce mondial — analyse et conséquences.',
    date: '24 mars 2026',
    readTime: '2 min',
    tag: 'Actualité',
  },
  {
    slug: 'mobile-conversion-superieure',
    title:
      'Les sites e-commerce optimisés pour mobile enregistrent un taux de conversion 1,5× supérieur',
    excerpt:
      "74 % des transactions e-commerce mondiales se font sur mobile. Ce que cela implique pour votre conversion.",
    date: '24 mars 2026',
    readTime: '1 min',
    tag: 'Mobile',
  },
]

export default function BlogPage() {
  const [featured, ...rest] = POSTS

  return (
    <div className="page-enter">
      {/* Hero */}
      <section
        style={{
          paddingTop: 140,
          paddingBottom: 64,
          background: 'var(--bg-soft)',
        }}
      >
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 32 }}>
            <span className="pulse-dot" /> Le Blog du Docteur Digital
          </p>
          <h1 className="display" style={{ maxWidth: 1100, marginBottom: 32 }}>
            Remèdes e-commerce. <br />
            <span className="serif accent">Et digital.</span>
          </h1>
          <p
            style={{
              fontFamily: "'Prompt', sans-serif",
              fontSize: 22,
              color: 'var(--ink-soft)',
              maxWidth: 720,
              lineHeight: 1.5,
            }}
          >
            Articles, analyses et retours d&apos;expérience. Pour comprendre, décider, agir.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="section" style={{ paddingTop: 48 }}>
        <div className="container">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 64,
                alignItems: 'center',
                background: 'var(--navy)',
                color: '#fff',
                padding: 56,
                position: 'relative',
                overflow: 'hidden',
              }}
              className="featured-post"
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
                <p
                  className="eyebrow"
                  style={{ color: '#ff6600', marginBottom: 24 }}
                >
                  À la une · {featured.tag}
                </p>
                <h2
                  className="display-2"
                  style={{
                    color: '#fff',
                    fontSize: 'clamp(28px, 3.6vw, 48px)',
                    marginBottom: 24,
                  }}
                >
                  {featured.title}
                </h2>
                <p
                  style={{
                    fontFamily: "'Prompt', sans-serif",
                    fontSize: 17,
                    color: 'rgba(255,255,255,0.75)',
                    lineHeight: 1.6,
                  }}
                >
                  {featured.excerpt}
                </p>
              </div>
              <div style={{ position: 'relative', textAlign: 'right' }}>
                <p
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 12,
                    letterSpacing: '0.18em',
                    color: 'rgba(255,255,255,0.5)',
                    marginBottom: 16,
                  }}
                >
                  {featured.date} · {featured.readTime}
                </p>
                <span
                  style={{
                    fontFamily: "'Prompt', sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#fcc01e',
                  }}
                >
                  Lire l&apos;article →
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
        <style dangerouslySetInnerHTML={{ __html: `
          @media (max-width: 800px) {
            .featured-post { grid-template-columns: 1fr !important; gap: 32px !important; padding: 32px !important; }
            .featured-post > div:last-child { text-align: left !important; }
          }
        ` }} />
      </section>

      {/* Posts grid */}
      <section className="section" style={{ paddingTop: 0, background: 'var(--bg-section)' }}>
        <div className="container">
          <Reveal stagger>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: 24,
              }}
            >
              {rest.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="card"
                  style={{ display: 'flex', flexDirection: 'column' }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      marginBottom: 24,
                    }}
                  >
                    <span className="tag">{p.tag}</span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        color: 'var(--ink-mute)',
                      }}
                    >
                      {p.readTime}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Prompt', sans-serif",
                      fontWeight: 700,
                      fontSize: 22,
                      lineHeight: 1.25,
                      letterSpacing: '-0.01em',
                      marginBottom: 16,
                      flex: 1,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Prompt', sans-serif",
                      fontSize: 14,
                      color: 'var(--ink-soft)',
                      lineHeight: 1.6,
                      marginBottom: 24,
                    }}
                  >
                    {p.excerpt}
                  </p>
                  <div
                    style={{
                      paddingTop: 20,
                      borderTop: '1px solid var(--line)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        color: 'var(--ink-mute)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {p.date}
                    </span>
                    <span
                      style={{
                        fontFamily: "'Prompt', sans-serif",
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        color: 'var(--orange)',
                      }}
                    >
                      Lire →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
