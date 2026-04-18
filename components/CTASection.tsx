import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-brand-navy text-white section-padding">
      <div className="container-max text-center">
        <p className="font-heading text-brand-orange text-sm tracking-widest uppercase mb-4">
          Diagnostic offert
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6 max-w-3xl mx-auto leading-tight">
          Ne tentez pas de vous soigner sans ordonnance
        </h2>
        <p className="font-heading text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Le diagnostic initial est offert.
        </p>
        <Link href="/rdv" className="btn-primary">
          Demander une consultation
        </Link>
        <p className="mt-8 text-gray-500 text-sm font-heading italic">
          "Je ne fais pas du conseil. Je soigne." — Le Docteur Digital
        </p>
      </div>
    </section>
  )
}
