import Link from 'next/link'
import CTASection from '@/components/CTASection'

const services = [
  {
    tag: 'eCommerce',
    title: 'eCommerce B2B et B2C',
    body: "L'e-commerce n'est plus un canal. C'est un pilier. Il irrigue toute l'entreprise : stratégie, offre, marges, relation client. Sans vision claire, il plombe plus qu'il ne propulse.",
    callout: '🧠 Diagnostic précis. Traitement sur mesure. Impact concret sur le chiffre.',
    href: '/les-traitements',
  },
  {
    tag: 'CX',
    title: 'Expérience Client',
    body: "Pas d'expérience client, pas de fidélité. Pas de fidélité, pas de business. Les marques qui durent soignent chaque étape du parcours client.",
    callout: '🎯 Expériences fluides, utiles, mémorables. Chaque interaction devient un levier de croissance.',
    href: '/les-traitements',
  },
  {
    tag: 'IA',
    title: 'Intelligence Artificielle',
    body: "L'IA n'est plus une option. C'est un avantage compétitif. Encore faut-il savoir par où commencer — et comment l'appliquer concrètement.",
    callout: '🎓 Webinaires de mise à niveau + workshops opérationnels pour vos équipes.',
    href: '/les-traitements',
  },
]

const testimonial = {
  quote:
    'Nexperio nous a aidé à repenser totalement notre stratégie digitale et notre relation client. Les résultats du canal de ventes en ligne ont doublé en 6 mois !',
  author: 'Felipe Jacome',
  role: 'CEO, Melissa',
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex flex-col justify-center section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl">
            <p className="font-heading text-brand-orange text-sm tracking-widest uppercase mb-6">
              Bienvenue à la clinique nexperio
            </p>
            <h1 className="font-heading font-bold text-5xl md:text-7xl leading-[1.05] mb-8">
              Je ne fais pas du conseil.{' '}
              <span className="text-brand-orange">Je soigne.</span>
            </h1>
            <p className="font-heading text-xl md:text-2xl text-gray-600 mb-4 max-w-2xl leading-relaxed">
              Trafic qui stagne. Conversions qui patinent. Clients qui décrochent.
            </p>
            <p className="font-heading text-lg text-gray-500 mb-8 max-w-2xl leading-relaxed">
              L'e-commerce est un organisme vivant. Quand il va mal, il faut plus qu'un
              "avis". Il faut un diagnostic. Et un vrai traitement.
            </p>
            <div className="mb-10 max-w-2xl border-l-4 border-brand-orange pl-6">
              <p className="font-heading text-base text-gray-700 mb-4">
                C'est mon métier. Je suis le Docteur Digital. J'analyse, je soigne, je renforce :
              </p>
              <ul className="space-y-2">
                {[
                  'Votre stratégie e-commerce',
                  'Votre expérience client',
                  'Vos leviers de conversion et de fidélisation',
                  "Vos usages de l'IA (webinaires, workshops, intégration opérationnelle)",
                ].map((item) => (
                  <li key={item} className="font-heading text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-brand-orange font-bold mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="font-heading text-sm text-gray-700 mt-4 font-medium">
                Vous voulez remettre votre business en pleine forme ?
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/rdv" className="btn-primary">
                Prendre rendez-vous pour une consultation
              </Link>
              <Link href="/les-traitements" className="btn-outline">
                Voir les traitements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="section-padding bg-gray-50 border-y border-gray-100">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-heading font-bold text-2xl md:text-3xl leading-relaxed text-brand-navy">
              L'e-commerce n'est pas une science molle.{' '}
              <span className="text-brand-orange">C'est une discipline exigeante.</span>{' '}
              Technique. Stratégique. Opérationnelle.
            </p>
            <p className="font-heading text-gray-500 text-lg mt-6 leading-relaxed">
              Chez Nexperio, nous ne vendons pas des recettes miracles. Nous soignons.
              Avec des diagnostics précis. Et des traitements adaptés à chaque business.
            </p>
          </div>
        </div>
      </section>

      {/* UX Principle */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-heading text-brand-orange text-sm tracking-widest uppercase mb-4">
                La priorité absolue
              </p>
              <h2 className="font-heading font-bold text-4xl md:text-5xl leading-tight mb-6">
                L'expérience client n'est pas un sujet annexe.{' '}
                <span className="text-brand-orange">C'est LE sujet.</span>
              </h2>
              <p className="font-heading text-gray-600 text-lg leading-relaxed mb-6">
                Chaque point de contact doit nourrir la relation. Et chaque relation bien
                traitée nourrit la croissance.
              </p>
              <p className="font-heading text-gray-600 leading-relaxed">
                Si l'interface est floue, si le parcours cloche, si l'effort est à la charge
                du client… Vous perdez des ventes. Et vous ne le saurez peut-être jamais.
              </p>
            </div>
            <div className="bg-brand-navy text-white p-10">
              <p className="font-heading text-brand-orange text-sm tracking-widest uppercase mb-6">
                💉 Mon rôle
              </p>
              {[
                'Ausculter votre expérience actuelle',
                'Identifier les points de friction',
                'Faire sauter les obstacles',
                'Optimiser chaque clic, chaque étape',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 mb-4">
                  <span className="text-brand-orange font-heading font-bold text-lg mt-0.5">→</span>
                  <p className="font-heading text-gray-200">{item}</p>
                </div>
              ))}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <p className="font-heading font-bold text-xl text-white">
                  Des visiteurs qui comprennent.{' '}
                  <span className="text-brand-orange">Des clients qui achètent.</span>{' '}
                  Des utilisateurs qui reviennent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <p className="font-heading text-brand-orange text-sm tracking-widest uppercase mb-4">
              Nos traitements
            </p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl">
              Des traitements ciblés pour des{' '}
              <span className="text-brand-orange">résultats mesurables</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div key={s.tag} className="bg-white p-8 border border-gray-100 hover:border-brand-orange transition-colors duration-300 group">
                <span className="tag mb-4 inline-block">{s.tag}</span>
                <h3 className="font-heading font-bold text-xl mb-4 group-hover:text-brand-orange transition-colors">
                  {s.title}
                </h3>
                <p className="font-heading text-gray-600 text-sm leading-relaxed mb-6">
                  {s.body}
                </p>
                <p className="font-heading text-sm text-gray-800 font-medium leading-relaxed mb-8">
                  {s.callout}
                </p>
                <Link
                  href={s.href}
                  className="font-heading text-sm font-semibold tracking-wide text-brand-blue hover:text-brand-orange transition-colors"
                >
                  Voir le traitement →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <p className="font-heading text-brand-orange text-sm tracking-widest uppercase">
              Nos cas de guérison
            </p>
          </div>
          <blockquote className="max-w-3xl mx-auto text-center">
            <p className="font-heading font-bold text-2xl md:text-3xl leading-relaxed text-brand-navy mb-8">
              « {testimonial.quote} »
            </p>
            <footer>
              <p className="font-heading font-semibold text-base">{testimonial.author}</p>
              <p className="font-heading text-gray-500 text-sm">{testimonial.role}</p>
            </footer>
          </blockquote>
          <div className="text-center mt-10">
            <Link href="/cas-de-guerison" className="btn-outline">
              Voir les cas de guérison
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
