import type { Metadata } from 'next'
import Link from 'next/link'
import CTASection from '@/components/CTASection'

export const metadata: Metadata = {
  title: 'Le Docteur Digital',
  description:
    'Arnaud Guedj — Le Docteur Digital. 30 ans d\'expérience en e-commerce et transformation digitale. Fondateur de Nexperio.',
}

const principles = [
  { label: 'Excellence', description: 'Chaque diagnostic, chaque action est menée avec un niveau d\'exigence maximal.' },
  { label: 'Engagement', description: 'Je suis à vos côtés. Je co-construis votre succès.' },
  { label: 'Agilité', description: 'J\'anticipe. Je veille. J\'imagine avec vous les solutions de demain.' },
  { label: 'Intégrité', description: 'Pas de poudre aux yeux. Pas de fausses promesses. Un digital éthique, transparent, respectueux.' },
]

const qa = [
  {
    q: 'Quel a été le moment décisif qui vous a conduit à créer Nexperio ?',
    a: 'C\'est ma formation sur le leadership de transformation, particulièrement la partie sur l\'intelligence émotionnelle, qui a été le déclencheur. J\'ai réalisé qu\'il était temps pour moi de créer ma propre société et d\'être en rapport direct avec le client, qui est au centre de mes préoccupations.',
  },
  {
    q: 'Quelles expériences professionnelles ont le plus façonné votre vision du digital ?',
    a: 'Avec 30 ans d\'expérience et seulement 4 entreprises, chacune m\'a apporté une dimension essentielle : la première m\'a appris à garder une vue centralisée sur le client, la deuxième m\'a initié au marketing digital, la troisième m\'a enseigné la vente en ligne dans toutes ses dimensions, et la quatrième a été une synthèse où j\'ai exercé un rôle d\'entrepreneur/directeur général responsable de la rentabilité du business.',
  },
  {
    q: 'Quelles sont les trois valeurs fondamentales qui guident votre approche ?',
    a: 'Honnêteté/intégrité, Générosité/bienveillance, et Enjouement/humour/bonne humeur.',
  },
  {
    q: 'Quelle est votre "signature" professionnelle ?',
    a: 'Je challenge d\'abord le status quo en cherchant à comprendre la stratégie initiale et sa validité. J\'analyse ensuite si les actions sont en accord avec cette stratégie. J\'apporte professionnalisme et curiosité pour définir convenablement les objectifs et ne pas se tromper sur les actions à mener. Je fais du "sur-mesure".',
  },
  {
    q: 'Comment décririez-vous votre méthodologie de travail ?',
    a: 'Ma méthodologie se déroule en trois étapes : d\'abord un questionnement approfondi pour comprendre la demande du client, puis une reformulation avec proposition d\'axes de travail, et enfin une co-construction de la feuille de route (process, outils, formations) que nous appliquons ensemble.',
  },
  {
    q: 'Comment abordez-vous les situations où un client est réticent au changement ?',
    a: 'Plutôt que de forcer, je préfère questionner pour faire exprimer les frustrations, laisser "mijoter" et demander ce qui empêche la mise en place de solutions. J\'utilise la méthode des 5 pourquoi pour identifier la véritable raison de la résistance et permettre au client de la verbaliser lui-même.',
  },
  {
    q: 'Quel est votre conseil pour quelqu\'un qui débute dans la transformation digitale ?',
    a: 'Reste curieux. Lis beaucoup, inspire-toi de ce qui marche et aussi de ce qui ne fonctionne pas. Réfléchis à comment tout cela peut t\'enrichir professionnellement et améliorer tes interactions avec le client.',
  },
]

export default function DocteurPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding bg-black text-white">
        <div className="container-max">
          <div className="max-w-3xl">
            <p className="font-heading text-brand-orange text-sm tracking-widest uppercase mb-6">
              Fondateur de Nexperio
            </p>
            <h1 className="font-heading font-bold text-5xl md:text-7xl leading-[1.05] mb-8">
              Je ne fais pas du conseil.{' '}
              <span className="text-brand-orange">Je soigne.</span>
            </h1>
            <p className="font-heading text-gray-300 text-xl leading-relaxed mb-4">
              Je suis le Docteur Digital.
            </p>
            <p className="font-heading text-gray-400 text-lg leading-relaxed">
              Le digital n'est pas un gadget. C'est un levier vital. Mais mal prescrit, il
              épuise les équipes. Mal compris, il tue la rentabilité.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <p className="font-heading text-brand-orange text-sm tracking-widest uppercase mb-10">
            Mes 4 principes non négociables
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((p) => (
              <div key={p.label} className="border-l-4 border-brand-orange pl-8 py-4">
                <h2 className="font-heading font-bold text-2xl mb-3 uppercase tracking-wide">
                  {p.label}
                </h2>
                <p className="font-heading text-gray-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Q&A */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <p className="font-heading text-brand-orange text-sm tracking-widest uppercase mb-10">
            Qui est le Docteur Digital ?
          </p>
          <div className="max-w-3xl space-y-12">
            {qa.map(({ q, a }) => (
              <div key={q}>
                <h3 className="font-heading font-bold text-xl mb-4 text-black">{q}</h3>
                <p className="font-heading text-gray-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
