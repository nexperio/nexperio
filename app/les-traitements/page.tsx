import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Les traitements',
  description:
    'Nos traitements sur mesure pour recouvrer la santé de votre eCommerce, guérir votre expérience client et vous vacciner à l\'Intelligence Artificielle.',
}

const treatments = [
  {
    id: 'ecommerce',
    tag: 'eCommerce B2B et B2C',
    subtitle: 'Votre catalogue en perfusion digitale',
    description:
      "De la définition du protocole stratégique à l'exécution opérationnelle, chaque étape est calibrée au scalpel. On injecte les bonnes doses d'optimisation sur vos canaux d'acquisition.",
    result: 'Un cœur de croissance qui bat plus vite, un ROI en pleine forme.',
    steps: [
      {
        icon: '🔬',
        label: 'Audit & Vision stratégique',
        items: [
          'Analyse approfondie de votre modèle économique',
          'Établissement d\'une stratégie résultant d\'objectifs ambitieux et atteignables',
          'Construction collaborative d\'une roadmap digitale',
        ],
      },
      {
        icon: '⚙️',
        label: 'Excellence opérationnelle',
        items: [
          'Optimisation de l\'expérience utilisateur sur tous les points de contact',
          'Déploiement de leviers d\'acquisition performants',
          'Renforcement des techniques de conversion (merchandising, pricing, promotions)',
        ],
      },
      {
        icon: '📈',
        label: 'Performance durable',
        items: [
          'Stratégies de fidélisation client innovantes',
          'Pilotage de la rentabilité par le suivi des indicateurs définis',
          'Sélection et intégration des solutions technologiques adaptées',
        ],
      },
    ],
  },
  {
    id: 'cx',
    tag: 'Expérience Client',
    subtitle: 'Bilan clinique du parcours utilisateur',
    description:
      'On détecte chaque point de friction comme un foyer infectieux. On prescrit et implémente les antidotes sur-mesure.',
    result: 'Satisfaction renforcée. Engagement réanimé. Fidélisation garantie.',
    steps: [
      {
        icon: '📊',
        label: 'Optimisation data-driven',
        items: [
          'Analyse fine des données pour éliminer les frictions à chaque étape clé',
          'Acquisition : Attirer les clients idéaux',
          'Conversion : Transformer l\'intérêt en action',
          'Fidélisation : Créer des relations durables',
        ],
      },
      {
        icon: '💬',
        label: 'Stratégie conversationnelle omnicanale',
        items: [
          'Dialogue personnalisé avec vos clients sur tous les points de contact',
          'Marketing relationnel (eCRM)',
          'Réseaux sociaux, SMS, WhatsApp',
        ],
      },
      {
        icon: '🎯',
        label: 'Mesure & Pilotage',
        items: [
          'Mesure du NPS (Net Promoter Score)',
          'Reporting sur les indicateurs clés de satisfaction',
          'Optimisation itérative continue',
        ],
      },
    ],
  },
  {
    id: 'ia',
    tag: 'Intelligence Artificielle',
    subtitle: 'Programme intensif d\'acculturation',
    description:
      'Webinaires d\'introduction, ateliers pratiques thématiques, diagnostic personnalisé "Docteur Digital" et bootcamp immersif. On explore ChatGPT et ses cousins, génération d\'images, calendrier éditorial IA, workflows sur-mesure.',
    result: 'Chaque session est un acte opératoire pour implanter l\'IA dans vos process.',
    steps: [
      {
        icon: '🎓',
        label: 'Acculturation des équipes',
        items: [
          'Sessions interactives sur l\'IA générative',
          'Applications dans l\'optimisation de l\'expérience client',
          'Intégration aux technologies eCommerce',
        ],
      },
      {
        icon: '🔧',
        label: 'Implémentation',
        items: [
          'Évaluation des opportunités d\'intégration dans vos processus',
          'Mise en place d\'un processus d\'optimisation itératif',
          'Maximiser le ROI de l\'IA',
        ],
      },
    ],
  },
]

export default function TraitementsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-white border-b border-gray-100">
        <div className="container-max">
          <p className="font-heading text-brand-pink text-sm tracking-widest uppercase mb-4">
            La pharmacopée Nexperio
          </p>
          <h1 className="font-heading font-bold text-5xl md:text-6xl leading-tight max-w-3xl">
            Nos traitements <span className="text-brand-pink">sur mesure</span>
          </h1>
          <p className="font-heading text-xl text-gray-500 mt-6 max-w-2xl leading-relaxed">
            Pour recouvrer la santé de votre eCommerce, guérir votre expérience client et vous
            vacciner à l'Intelligence Artificielle.
          </p>
        </div>
      </section>

      {/* Treatments */}
      {treatments.map((t, idx) => (
        <section
          key={t.id}
          id={t.id}
          className={`section-padding ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="container-max">
            <div className="mb-12">
              <span className="tag mb-4 inline-block">{t.tag}</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">{t.subtitle}</h2>
              <p className="font-heading text-gray-600 text-lg max-w-2xl leading-relaxed mb-3">
                {t.description}
              </p>
              <p className="font-heading font-semibold text-brand-blue">{t.result}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {t.steps.map((step) => (
                <div key={step.label} className="bg-white border border-gray-100 p-8">
                  <p className="text-3xl mb-4">{step.icon}</p>
                  <h3 className="font-heading font-bold text-lg mb-4">{step.label}</h3>
                  <ul className="space-y-2">
                    {step.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 font-heading text-sm text-gray-600">
                        <span className="text-brand-pink mt-0.5">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  )
}
