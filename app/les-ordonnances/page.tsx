import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Les ordonnances',
  description:
    'Ressources gratuites du Docteur Digital : glossaire, livre blanc, guide IA. Parce que l\'e-commerce sans cadrage médical, c\'est risqué.',
}

const resources = [
  {
    icon: '📋',
    title: 'La formule magique',
    description:
      'Pour tout comprendre de l\'ecommerce et revenir aux fondamentaux. Le guide complet du Docteur Digital.',
    tag: 'Guide',
    color: 'border-brand-pink',
  },
  {
    icon: '📖',
    title: 'Le glossaire',
    description:
      'Pour savoir de quoi l\'on parle et que cela ne soit plus du chinois pour vous. Les termes clés du digital décortiqués.',
    tag: 'Référence',
    color: 'border-brand-blue',
  },
  {
    icon: '📕',
    title: 'Le livre blanc des 7 pièges',
    description:
      'À mettre dans toutes les mains des ecommerçants pour ne plus tomber dans les pièges. Les erreurs fatales et comment les éviter.',
    tag: 'Livre blanc',
    color: 'border-brand-pink',
    featured: true,
  },
  {
    icon: '🤖',
    title: 'Le B-A BA de l\'IA en 2025',
    description:
      'L\'indispensable pour comprendre l\'IA en 2025. Démystifier, comprendre, adopter intelligemment.',
    tag: 'Guide IA',
    color: 'border-brand-blue',
  },
]

export default function OrdonnancesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-white border-b border-gray-100">
        <div className="container-max">
          <p className="font-heading text-brand-pink text-sm tracking-widest uppercase mb-4">
            Ressources gratuites
          </p>
          <h1 className="font-heading font-bold text-5xl md:text-6xl leading-tight max-w-3xl">
            Les ordonnances du <span className="text-brand-pink">Docteur Digital</span>
          </h1>
          <p className="font-heading text-xl text-gray-500 mt-6 max-w-2xl leading-relaxed">
            Parce que l'e-commerce, sans cadrage médical, c'est comme une chirurgie sans anesthésie : douloureux et risqué.
          </p>
          <p className="font-heading font-semibold text-lg mt-4">
            Vous voulez des résultats ? Arrêtez le bricolage. Recouvrez la santé de votre e-commerce.
          </p>
        </div>
      </section>

      {/* Resources grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((r) => (
              <div
                key={r.title}
                className={`bg-white p-8 border-l-4 ${r.color} border-t border-r border-b border-gray-100 ${r.featured ? 'ring-2 ring-brand-pink/20' : ''} hover:shadow-md transition-shadow duration-300`}
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-4xl">{r.icon}</span>
                  <span className="tag">{r.tag}</span>
                </div>
                <h2 className="font-heading font-bold text-2xl mb-4">{r.title}</h2>
                <p className="font-heading text-gray-600 leading-relaxed mb-8">
                  {r.description}
                </p>
                <Link href="/rdv" className="btn-primary text-xs">
                  Recevoir l'ordonnance
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
