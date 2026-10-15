import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Manrope } from 'next/font/google'
import { Suspense } from 'react'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Envasys | Envase de Sachês Personalizados',
  description:
    'Envase terceirizado de líquidos, pastosos e cremosos em sachês personalizados. Soluções para cosméticos, hotelaria, alimentos, esporte, pet care e muito mais.',
  generator: 'v0.app',
  metadataBase: new URL('https://www.envasys.com.br'),
  alternates: {
    canonical: 'https://www.envasys.com.br',
  },
  openGraph: {
    title: 'Envasys | Envase de Sachês Personalizados',
    description:
      'Envase terceirizado de líquidos, pastosos e cremosos em sachês personalizados. Sua marca. Nosso envase.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Envasys',
    url: 'https://www.envasys.com.br',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Envasys | Envase de Sachês Personalizados',
    description:
      'Envase terceirizado de líquidos, pastosos e cremosos em sachês personalizados.',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f3d40',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${manrope.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Suspense fallback={null}>{children}</Suspense>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
