import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
      <body>
        <Navbar />
        <main style={{ minHeight: '60vh' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
