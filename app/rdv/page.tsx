import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Prendre rendez-vous',
  description:
    'Demandez votre consultation avec le Docteur Digital. Le diagnostic initial est offert.',
}

export default function RdvPage() {
  return (
    <section className="section-padding bg-white min-h-[80vh] flex flex-col justify-center">
      <div className="container-max max-w-2xl text-center">
        <p className="font-heading text-brand-pink text-sm tracking-widest uppercase mb-6">
          Diagnostic offert
        </p>
        <h1 className="font-heading font-bold text-4xl md:text-5xl leading-tight mb-6">
          Prenez rendez-vous avec le{' '}
          <span className="text-brand-pink">Docteur Digital</span>
        </h1>
        <p className="font-heading text-xl text-gray-500 leading-relaxed mb-12">
          Le diagnostic initial est offert. Parlez-moi de votre business, je vous prescris
          le traitement adapté.
        </p>
        <div className="bg-gray-50 border border-gray-100 p-10 text-left">
          <p className="font-heading text-brand-pink text-sm tracking-widest uppercase mb-6">
            Formulaire de contact
          </p>
          <form className="space-y-6" action="mailto:ag@nexperio.com" method="get">
            <div>
              <label className="font-heading text-sm font-semibold text-gray-700 block mb-2">
                Votre nom *
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full border border-gray-200 px-4 py-3 font-heading text-sm focus:outline-none focus:border-brand-pink transition-colors"
                placeholder="Arnaud Guedj"
              />
            </div>
            <div>
              <label className="font-heading text-sm font-semibold text-gray-700 block mb-2">
                Votre email *
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full border border-gray-200 px-4 py-3 font-heading text-sm focus:outline-none focus:border-brand-pink transition-colors"
                placeholder="vous@entreprise.com"
              />
            </div>
            <div>
              <label className="font-heading text-sm font-semibold text-gray-700 block mb-2">
                Votre entreprise
              </label>
              <input
                type="text"
                name="company"
                className="w-full border border-gray-200 px-4 py-3 font-heading text-sm focus:outline-none focus:border-brand-pink transition-colors"
                placeholder="Nexperio SAS"
              />
            </div>
            <div>
              <label className="font-heading text-sm font-semibold text-gray-700 block mb-2">
                Décrivez vos symptômes *
              </label>
              <textarea
                name="body"
                required
                rows={5}
                className="w-full border border-gray-200 px-4 py-3 font-heading text-sm focus:outline-none focus:border-brand-pink transition-colors resize-none"
                placeholder="Mon e-commerce stagne, mes conversions baissent, je ne sais pas par où commencer..."
              />
            </div>
            <button type="submit" className="btn-primary w-full text-center">
              Envoyer ma demande
            </button>
          </form>
          <p className="font-heading text-xs text-gray-400 mt-4 text-center">
            Réponse sous 48h. Le diagnostic initial est gratuit et sans engagement.
          </p>
        </div>
        <p className="font-heading text-gray-400 italic text-sm mt-8">
          "Je ne fais pas du conseil. Je soigne." — Le Docteur Digital
        </p>
      </div>
    </section>
  )
}
