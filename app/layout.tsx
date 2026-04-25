import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const GA4_ID = 'G-78PLPDEKDB'
const GTM_ID = 'GTM-5HKMSXM8'

export const metadata: Metadata = {
  title: {
    default: 'La clinique du Docteur Digital | Nexperio',
    template: '%s | Nexperio',
  },
  description:
    'Nexperio soigne votre e-commerce, votre expérience client et votre intégration IA. Diagnostic offert.',
  keywords: ['e-commerce', 'expérience client', 'intelligence artificielle', 'consultant digital', 'Docteur Digital'],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.nexperio.com',
    siteName: 'Nexperio',
  },
  metadataBase: new URL('https://www.nexperio.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA4_ID}');`,
          }}
        />
      </head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Navbar />
        <main style={{ minHeight: '60vh' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
