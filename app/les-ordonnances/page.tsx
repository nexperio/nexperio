import Link from 'next/link'
import type { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import { Reveal } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Les ordonnances',
  description:
    "Les ressources du Docteur Digital pour recouvrer la santé de votre e-commerce : la formule magique, le glossaire, le livre blanc des 7 pièges, le B-A BA de l'IA.",
}

type Resource = {
  num: string
  tag: string
  title: string
  body: string
  href: string
  cta: string
  external?: boolean
}

const RESOURCES: Resource[] = [
  {
    num: '01',
    tag: 'Fondamentaux',
    title: 'La formule magique',
    body: "Pour tout comprendre de l'e-commerce et revenir aux fondamentaux. La grille de lecture qui aligne stratégie, exécution et rentabilité.",
    href: '/pdf/nexperio-formule-magique-ecommerce-2025.pdf',
    cta: 'Télécharger le PDF',
    external: true,
  },
  {
    num: '02',
    tag: 'Vocabulaire',
    title: 'Le glossaire',
    body: "Pour savoir de quoi l'on parle — et que cela ne soit plus du chinois pour vous. Toutes les définitions e-commerce, CX et IA, en clair.",
    href: '/les-ordonnances/glossaire',
    cta: 'Consulter le glossaire',
  },
  {
    num: '03',
    tag: 'Livre blanc',
    title: 'Les 7 pièges invisibles',
    body: "À mettre dans toutes les mains des e-commerçants pour ne plus tomber dans les pièges qui freinent la croissance sans qu'on s'en aperçoive.",
    href: '/pdf/nexperio-7-pieges-ecommerce-2025.pdf',
    cta: 'Télécharger le PDF',
    external: true,
  },
  {
    num: '04',
    tag: 'IA · 2025',
    title: "Le B-A BA de l'IA",
    body: "L'indispensable pour comprendre l'IA en 2025 : ce qui marche, ce qui ne marche pas, et comment l'intégrer concrètement dans vos process.",
    href: '/pdf/nexperio-ba-ba-ia-2025.pdf',
    cta: 'Télécharger le PDF',
    external: true,
  },
]

export default function OrdonnancesPage() {
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
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <p className="eyebrow" style={{ marginBottom: 32 }}>
            <span className="pulse-dot" /> Les ordonnances du Docteur Digital
          </p>
          <h1 className="display" style={{ maxWidth: 1100, marginBottom: 32 }}>
            Recouvrez la <span className="serif accent">santé</span><br />
            de votre e-commerce.
          </h1>
          <p
            style={{
              fontFamily: "'Prompt', sans-serif",
              fontSize: 22,
              color: 'var(--ink-soft)',
              maxWidth: 720,
              lineHeight: 1.4,
              marginBottom: 16,
            }}
          >
            Parce que l&apos;e-commerce, sans cadrage médical, c&apos;est comme une chirurgie sans
            anesthésie : douloureux et risqué.
          </p>
          <p
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
              fontSize: 26,
              color: 'var(--orange)',
              maxWidth: 720,
              marginBottom: 40,
            }}
          >
            Vous voulez des résultats ? Arrêtez le bricolage.
          </p>
          <Link href="/rdv" className="btn btn-primary">
            Demander une consultation <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      {/* Resources */}
      <section className="section" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          <Reveal>
            <div style={{ marginBottom: 64, maxWidth: 720 }}>
              <p className="eyebrow" style={{ marginBottom: 16 }}>4 ressources essentielles</p>
              <h2 className="display-2">
                Lisez. Comprenez. <span className="serif accent">Soignez.</span>
              </h2>
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
              {RESOURCES.map((r) => {
                const cardContent = (
                  <>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 32 }}>
                      <span className="tag">{r.tag}</span>
                      <span
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontSize: 13,
                          color: 'var(--ink-mute)',
                        }}
                      >
                        {r.num}
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
                      {r.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Prompt', sans-serif",
                        fontSize: 15,
                        color: 'var(--ink-soft)',
                        lineHeight: 1.6,
                        marginBottom: 32,
                        flex: 1,
                      }}
                    >
                      {r.body}
                    </p>
                    <span
                      style={{
                        fontFamily: "'Prompt', sans-serif",
                        fontSize: 13,
                        fontWeight: 600,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        color: 'var(--orange)',
                        paddingTop: 24,
                        borderTop: '1px solid var(--line)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 8,
                      }}
                    >
                      {r.cta} <span className="arrow">→</span>
                    </span>
                  </>
                )
                const cardStyle = { display: 'flex', flexDirection: 'column' as const }
                return r.external ? (
                  <a
                    key={r.num}
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card"
                    style={cardStyle}
                  >
                    {cardContent}
                  </a>
                ) : (
                  <Link key={r.num} href={r.href} className="card" style={cardStyle}>
                    {cardContent}
                  </Link>
                )
              })}
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
