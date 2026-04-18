import type { Metadata } from 'next'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Cas de guérison',
  description:
    'Études de cas Nexperio : transformation digitale, eCommerce, expérience client. Des résultats concrets, mesurés.',
}

const cases = [
  {
    title: 'Du transactionnel au relationnel : comment passer d\'un site de vente à une vraie marque engagée',
    context:
      'Un e-commerçant spécialisé en équipements électroniques. Objectif : sortir du simple modèle transactionnel pour bâtir une relation durable avec ses clients stratégiques.',
    challenge:
      'Développer l\'engagement et la valeur des clients existants. Créer une véritable proximité avec les segments prioritaires.',
    treatment: [
      { step: '1. Diagnostic', items: ['Analyse poussée des segments clients', 'Cartographie des moments-clés du parcours', 'Identification des leviers d\'engagement différenciants'] },
      { step: '2. Prescription', items: ['Refonte des parcours par segment', 'Personnalisation fine des campagnes et du merchandising', 'Création d\'expériences sur-mesure par cible', 'Conception de programmes de fidélisation innovants'] },
      { step: '3. Mise en œuvre', items: ['Formation des équipes à cette nouvelle approche relationnelle', 'Batteries de tests A/B continus', 'Optimisation itérative des parcours'] },
    ],
    results: ['+120 % d\'inscriptions clients (vs N-1)', '+25 % de taux de conversion', '+20 % de taux de retour visiteurs', 'Objectif NPS dépassé (+18 %)'],
    conclusion:
      'Pas de recette miracle. Des tests, des ajustements, de la rigueur. Mais au final : une progression nette sur tous les KPIs vitaux — preuve qu\'un modèle relationnel bien piloté crée bien plus qu\'une simple vente : il construit la fidélité et la préférence de marque.',
  },
  {
    title: 'Transformation digitale d\'une marque de mode : quand le social booste l\'e-commerce',
    context:
      'Une marque de chaussures mode avec une forte audience sur les réseaux… mais des ventes en ligne décevantes. Le trafic était là, pas la conversion.',
    challenge:
      'Aligner l\'expérience client entre les réseaux sociaux, le site e-commerce et les points de vente. Faire levier sur le potentiel social pour générer du chiffre.',
    treatment: [
      { step: '1. Diagnostic', items: ['Audit complet de la stratégie digitale existante', 'Écoute des objectifs stratégiques', 'Analyse des leviers d\'influence et du parcours client omnicanal'] },
      { step: '2. Prescription', items: ['Refonte de l\'architecture e-commerce', 'Intégration fluide du contenu social dans le parcours d\'achat', 'Harmonisation et enrichissement des données produits', 'Unification des bases CRM'] },
      { step: '3. Mise en œuvre', items: ['Formation des équipes aux nouveaux outils', 'Optimisation du merchandising digital', 'Pilotage data-driven des réassorts'] },
    ],
    results: ['+100 % de rendez-vous en pop-up stores', '+35 % de ventes en 6 mois, à budget marketing constant', 'Stocks optimisés grâce à l\'analyse prédictive'],
    conclusion:
      'Le traitement a porté ses fruits : +100 % de rendez-vous en pop-up stores, +35 % de ventes en seulement 6 mois sans augmenter le budget marketing. Un bel exemple de synergie entre contenu social, e-commerce et retail physique.',
  },
]

export default function CasPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-white border-b border-gray-100">
        <div className="container-max">
          <p className="font-heading text-brand-orange text-sm tracking-widest uppercase mb-4">
            Preuves cliniques
          </p>
          <h1 className="font-heading font-bold text-5xl md:text-6xl leading-tight max-w-3xl">
            Nos <span className="text-brand-orange">cas de guérison</span>
          </h1>
          <p className="font-heading text-xl text-gray-500 mt-6 max-w-2xl leading-relaxed">
            Nos études de cas vous permettent de comprendre notre expertise, quelques problématiques
            traitées et notre méthode de travail.
          </p>
        </div>
      </section>

      {/* Cases */}
      {cases.map((c, idx) => (
        <section key={idx} className={`section-padding ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
          <div className="container-max">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-12 max-w-3xl leading-tight">
              {c.title}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-black text-white p-8">
                <p className="font-heading text-brand-orange text-xs tracking-widest uppercase mb-3">
                  Contexte
                </p>
                <p className="font-heading text-gray-200 text-sm leading-relaxed">{c.context}</p>
              </div>
              <div className="bg-brand-orange/10 border border-brand-orange/20 p-8">
                <p className="font-heading text-brand-orange text-xs tracking-widest uppercase mb-3">
                  Enjeu vital
                </p>
                <p className="font-heading text-gray-800 text-sm leading-relaxed">{c.challenge}</p>
              </div>
              <div className="bg-brand-blue/5 border border-brand-blue/20 p-8">
                <p className="font-heading text-brand-blue text-xs tracking-widest uppercase mb-3">
                  Conclusion
                </p>
                <p className="font-heading text-gray-700 text-sm leading-relaxed">{c.conclusion}</p>
              </div>
            </div>

            {/* Treatment steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {c.treatment.map((t) => (
                <div key={t.step} className="bg-white border border-gray-100 p-6">
                  <h3 className="font-heading font-bold text-base mb-4 text-brand-orange">{t.step}</h3>
                  <ul className="space-y-2">
                    {t.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 font-heading text-sm text-gray-600">
                        <span className="text-brand-orange mt-0.5 shrink-0">→</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Results */}
            <div className="bg-black text-white p-8">
              <p className="font-heading text-brand-orange text-xs tracking-widest uppercase mb-6">
                4. Résultats cliniques
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {c.results.map((r) => (
                  <div key={r} className="text-center">
                    <p className="font-heading font-bold text-brand-orange text-2xl mb-2">
                      {r.split(' ')[0]}
                    </p>
                    <p className="font-heading text-gray-300 text-xs leading-relaxed">
                      {r.split(' ').slice(1).join(' ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {idx < cases.length - 1 && (
              <div className="mt-16 text-center">
                <p className="font-heading text-gray-400 text-sm tracking-widest uppercase">
                  Ne traitez pas les symptômes. Soignez la cause.
                </p>
              </div>
            )}
          </div>
        </section>
      ))}

      <CTASection />
    </>
  )
}
