import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center">
              <img
                src="https://static.wixstatic.com/media/7f7a19_cb6f7b8ea71744a99a2e93d5640ef57e~mv2.png"
                alt="Nexperio"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed font-heading">
              "Je ne fais pas du conseil.<br />
              Je soigne."
            </p>
            <p className="mt-2 text-brand-orange text-sm font-heading font-semibold tracking-wide">
              — Le Docteur Digital
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-heading font-semibold text-sm tracking-widest uppercase text-gray-400 mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Les ordonnances', href: '/les-ordonnances' },
                { label: 'Les traitements', href: '/les-traitements' },
                { label: 'Cas de guérison', href: '/cas-de-guerison' },
                { label: 'Le Docteur Digital', href: '/le-docteur-digital' },
                { label: 'Blog', href: '/blog' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-gray-300 hover:text-brand-orange transition-colors font-heading"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-sm tracking-widest uppercase text-gray-400 mb-4">
              Contact
            </h4>
            <p className="text-sm text-gray-300 font-heading mb-2">ag@nexperio.com</p>
            <p className="text-sm text-gray-300 font-heading mb-6">+33 6 70 77 88 99</p>
            <Link href="/rdv" className="btn-primary text-xs">
              Diagnostic offert
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 font-heading">
            © {new Date().getFullYear()} Nexperio. Tous droits réservés.
          </p>
          <p className="text-xs text-gray-500 font-heading">
            Fait avec 💉 par le Docteur Digital
          </p>
        </div>
      </div>
    </footer>
  )
}
