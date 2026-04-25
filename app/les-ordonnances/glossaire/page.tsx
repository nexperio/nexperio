import Link from 'next/link'
import type { Metadata } from 'next'
import CTASection from '@/components/CTASection'
import { Reveal } from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Le glossaire',
  description:
    "Toutes les définitions e-commerce, expérience client et IA en clair — par le Docteur Digital.",
}

type Term = {
  term: string
  acronym?: string
  category: 'E-commerce' | 'Marketing' | 'Data' | 'IA' | 'Expérience client'
  definition: string
}

const TERMS: Term[] = [
  {
    term: 'Coût d’acquisition client',
    acronym: 'CAC',
    category: 'Marketing',
    definition:
      "Combien vous dépensez en moyenne pour obtenir un nouveau client. Si vous dépensez 10 000 € en marketing pour 200 nouveaux clients, votre CAC est de 50 €. Indicateur critique pour piloter la rentabilité de l’acquisition.",
  },
  {
    term: 'Customer Lifetime Value',
    acronym: 'CLV / LTV',
    category: 'Marketing',
    definition:
      "Valeur totale qu’un client génère pour votre entreprise sur la durée. Mise en regard du CAC, elle révèle la rentabilité réelle de chaque client. Le ratio LTV/CAC est l’un des plus puissants indicateurs de santé d’un e-commerce.",
  },
  {
    term: 'Taux de conversion',
    acronym: 'TC',
    category: 'E-commerce',
    definition:
      "Pourcentage de visiteurs qui réalisent une action attendue (achat, inscription, demande de devis). En e-commerce, c’est souvent le ratio entre le nombre de commandes et le nombre de visiteurs uniques.",
  },
  {
    term: 'Panier moyen',
    acronym: 'PM',
    category: 'E-commerce',
    definition:
      "Montant moyen dépensé par commande. Levier souvent sous-estimé : augmenter le panier moyen via bundles, cross-sell ou upsell est moins coûteux que d’acquérir de nouveaux clients.",
  },
  {
    term: 'Taux de répétition',
    acronym: 'TR',
    category: 'E-commerce',
    definition:
      "Part des clients qui reviennent acheter. Indicateur clé de fidélité. Un client fidèle coûte 5 à 25 fois moins cher qu’un nouveau client à acquérir.",
  },
  {
    term: 'Retour sur dépenses publicitaires',
    acronym: 'ROAS',
    category: 'Marketing',
    definition:
      "Revenue On Ad Spend. Pour 1 € dépensé en publicité, combien d’euros de chiffre d’affaires sont générés. Indicateur d’efficacité publicitaire à court terme — à pondérer par la marge réelle.",
  },
  {
    term: 'Coût par mille impressions',
    acronym: 'CPM',
    category: 'Marketing',
    definition:
      "Coût pour afficher une publicité 1 000 fois. Indicateur d’achat média utilisé sur Meta, Google, TikTok pour comparer la pression et la portée des campagnes.",
  },
  {
    term: 'Customer Data Platform',
    acronym: 'CDP',
    category: 'Data',
    definition:
      "Plateforme qui centralise les données clients issues de tous vos canaux (site, CRM, caisse, app, support) pour créer une vision unifiée du client. Brique fondamentale d’une stratégie omnicanale réussie.",
  },
  {
    term: 'Customer Relationship Management',
    acronym: 'CRM',
    category: 'Data',
    definition:
      "Outil de gestion de la relation client : centralisation des contacts, historiques d’achat, segmentation, automatisation des emails. Le couteau suisse de la fidélisation.",
  },
  {
    term: 'Enterprise Resource Planning',
    acronym: 'ERP',
    category: 'Data',
    definition:
      "Système de gestion intégré qui orchestre stocks, commandes, comptabilité, ressources humaines. En e-commerce, c’est souvent la pièce maîtresse qui synchronise online et offline.",
  },
  {
    term: 'Content Management System',
    acronym: 'CMS',
    category: 'E-commerce',
    definition:
      "Outil qui permet de gérer le contenu d’un site sans coder. Shopify, Magento, WooCommerce, Webflow, Wix, Next.js + headless CMS… chaque CMS impose ses contraintes et ses libertés.",
  },
  {
    term: 'Direct-to-Consumer',
    acronym: 'DTC / D2C',
    category: 'E-commerce',
    definition:
      "Modèle où la marque vend directement au consommateur final, sans intermédiaire. Maîtrise de la marge, de la donnée client, et de l’expérience—mais charge complète de l’acquisition.",
  },
  {
    term: 'Digital Native Vertical Brand',
    acronym: 'DNVB',
    category: 'E-commerce',
    definition:
      "Marque née digitalement, qui contrôle sa chaîne de valeur de la conception à la distribution. Le Slip Français, Sézane, Tediber… typiques du modèle DTC français.",
  },
  {
    term: 'Omnicanal',
    category: 'Expérience client',
    definition:
      "Approche où tous les points de contact (site, boutique, app, réseaux sociaux, marketplace, SAV) sont intégrés pour offrir une expérience fluide et continue. Le client passe d’un canal à l’autre sans rupture.",
  },
  {
    term: 'Multicanal',
    category: 'Expérience client',
    definition:
      "Présence sur plusieurs canaux—mais sans intégration. Chaque canal vit sa vie. À ne pas confondre avec l’omnicanal, qui suppose des données et une logique unifiées.",
  },
  {
    term: 'Click & collect',
    category: 'Expérience client',
    definition:
      "Achat en ligne, retrait en boutique. Levier omnicanal puissant : zéro frais de port pour le client, génération de trafic en magasin, opportunités de cross-sell à la prise en main.",
  },
  {
    term: 'User Generated Content',
    acronym: 'UGC',
    category: 'Marketing',
    definition:
      "Contenus créés par les clients eux-mêmes : avis, photos produits, vidéos TikTok, posts Instagram. Authentique, scalable, et puissant pour le SEO comme pour la conversion.",
  },
  {
    term: 'Search Engine Optimization',
    acronym: 'SEO',
    category: 'Marketing',
    definition:
      "Référencement naturel—l’art de positionner ses pages dans les résultats Google sans payer. En 2025, le SEO conversationnel et la recherche vocale prennent le pas sur le SEO classique.",
  },
  {
    term: 'Search Engine Advertising',
    acronym: 'SEA',
    category: 'Marketing',
    definition:
      "Publicité dans les moteurs de recherche (Google Ads, Bing Ads). On paie pour apparaître en tête. Rapide à activer, mais le coût par clic ne fait que monter.",
  },
  {
    term: 'Service Après-Vente',
    acronym: 'SAV',
    category: 'Expérience client',
    definition:
      "Tout ce qui se passe après l’achat : assistance, retours, réclamations. Trop souvent négligé—alors que c’est l’un des plus puissants leviers de fidélisation et de bouche-à-oreille.",
  },
  {
    term: 'Test A/B',
    category: 'Data',
    definition:
      "Méthode qui consiste à comparer deux versions (A et B) d’une page, d’un email ou d’une publicité pour identifier celle qui performe le mieux. La base de l’optimisation continue.",
  },
  {
    term: 'Large Language Model',
    acronym: 'LLM',
    category: 'IA',
    definition:
      "Modèle de langage entraîné sur d’immenses volumes de texte. ChatGPT, Claude, Gemini—les LLM sont les moteurs de l’IA générative actuelle.",
  },
  {
    term: 'Génération augmentée par récupération',
    acronym: 'RAG',
    category: 'IA',
    definition:
      "Retrieval-Augmented Generation. Architecture qui combine un LLM avec une base documentaire propre à votre entreprise, pour des réponses précises et contextualisées.",
  },
  {
    term: 'Prompt',
    category: 'IA',
    definition:
      "Instruction donnée à une IA générative. Un bon prompt suit la méthode RTCOF : Rôle, Tâche, Contexte, Objectif, Format. La qualité du prompt fait 80 % du résultat.",
  },
  {
    term: 'Cookieless',
    category: 'Marketing',
    definition:
      "Environnement publicitaire sans cookies tiers. Force les marques à miser sur leurs propres données (first-party) pour cibler et reciblеr efficacement.",
  },
  {
    term: 'Données first-party',
    category: 'Data',
    definition:
      "Données que vous collectez directement auprès de vos clients (site, app, CRM, programme de fidélité). Plus précieuses que jamais à l’heure du cookieless.",
  },
  {
    term: 'Time-to-market',
    category: 'E-commerce',
    definition:
      "Délai entre l’idée et la mise en marché. Indicateur clé d’agilité opérationnelle—plus il est court, plus vous pouvez tester, apprendre, et itérer.",
  },
  {
    term: 'Churn',
    category: 'Marketing',
    definition:
      "Taux d’attrition—la part de clients qui ne reviennent plus. À surveiller comme le lait sur le feu : un churn élevé annule les bénéfices de l’acquisition.",
  },
  {
    term: 'Welcome flow',
    category: 'Marketing',
    definition:
      "Séquence automatique d’emails envoyée à un nouvel inscrit ou nouveau client. Premier rendez-vous critique pour ancrer la marque et déclencher le premier (ou deuxième) achat.",
  },
  {
    term: 'Cross-sell',
    category: 'E-commerce',
    definition:
      "Vente additionnelle de produits complémentaires. « Vous achetez une chemise ? Voici la cravate qui va avec. »",
  },
  {
    term: 'Upsell',
    category: 'E-commerce',
    definition:
      "Montée en gamme : on propose au client une version supérieure ou plus complète de ce qu’il s’apprête à acheter.",
  },
  {
    term: 'Bundle',
    category: 'E-commerce',
    definition:
      "Lot de plusieurs produits vendus ensemble à un prix avantageux. Excellente technique pour augmenter le panier moyen et écouler des stocks.",
  },
]

const CATEGORIES: Term['category'][] = [
  'E-commerce',
  'Marketing',
  'Data',
  'IA',
  'Expérience client',
]

export default function GlossairePage() {
  const grouped = CATEGORIES.map((cat) => ({
    cat,
    items: TERMS.filter((t) => t.category === cat).sort((a, b) =>
      a.term.localeCompare(b.term, 'fr'),
    ),
  }))

  return (
    <div className="page-enter">
      <section
        style={{
          minHeight: '50vh',
          display: 'flex',
          alignItems: 'center',
          paddingTop: 140,
          paddingBottom: 60,
          background: 'var(--bg-soft)',
        }}
      >
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 32 }}>
            <span className="pulse-dot" /> Le glossaire du Docteur Digital
          </p>
          <h1 className="display" style={{ maxWidth: 1100, marginBottom: 32 }}>
            Le vocabulaire <span className="serif accent">essentiel.</span>
          </h1>
          <p
            style={{
              fontFamily: "'Prompt', sans-serif",
              fontSize: 22,
              color: 'var(--ink-soft)',
              maxWidth: 720,
              lineHeight: 1.5,
              marginBottom: 16,
            }}
          >
            E-commerce, marketing, data, IA, expérience client : toutes les définitions à connaître,
            en clair.
          </p>
          <p
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
              fontSize: 22,
              color: 'var(--orange)',
              maxWidth: 720,
            }}
          >
            Pour que ce ne soit plus du chinois pour vous.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-section)' }}>
        <div className="container">
          {grouped.map(({ cat, items }) => (
            <Reveal key={cat}>
              <div style={{ marginBottom: 80 }}>
                <h2
                  className="display-2"
                  style={{ marginBottom: 40, paddingBottom: 24, borderBottom: '1px solid var(--line)' }}
                >
                  {cat}
                </h2>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: 24,
                  }}
                >
                  {items.map((t) => (
                    <div
                      key={t.term}
                      style={{
                        background: 'var(--bg)',
                        border: '1px solid var(--line)',
                        padding: 32,
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 16, flexWrap: 'wrap' }}>
                        <h3
                          style={{
                            fontFamily: "'Prompt', sans-serif",
                            fontWeight: 700,
                            fontSize: 20,
                            letterSpacing: '-0.01em',
                          }}
                        >
                          {t.term}
                        </h3>
                        {t.acronym && (
                          <span
                            style={{
                              fontFamily: "'JetBrains Mono', monospace",
                              fontSize: 11,
                              letterSpacing: '0.12em',
                              color: 'var(--orange)',
                              background: 'rgba(255, 102, 0, 0.08)',
                              padding: '4px 10px',
                              borderRadius: 2,
                            }}
                          >
                            {t.acronym}
                          </span>
                        )}
                      </div>
                      <p
                        style={{
                          fontFamily: "'Prompt', sans-serif",
                          fontSize: 15,
                          color: 'var(--ink-soft)',
                          lineHeight: 1.6,
                        }}
                      >
                        {t.definition}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          <div style={{ marginTop: 64, textAlign: 'center' }}>
            <Link href="/les-ordonnances" className="btn">
              ← Retour aux ordonnances
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
