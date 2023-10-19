import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { Sofia, Comic_Neue, Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { Providers } from './providers'
import type { Metadata } from 'next'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const sofia = Sofia({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-sofia'
})
const comic_neue = Comic_Neue({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-comic-neue'
})
// const mulish = Mulish({ subsets: ['latin'], variable: '--font-mulish' })

export const metadata = {
  icons: {
    icon: [{ url: '/icons/favicon.ico' }],
    appleTouchIcon: [
      {
        url: '/icons/apple-icon-180x180.png',
        size: '180x180'
      }
    ]
  },
  manifest: '/icons/site.webmanifest.json',
  generator: 'trydo.com.br',
  applicationName: 'Escola Canarinho',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Escola Canarinho',
    'Escola infantil',
    'Ensino infantil',
    'Educação infantil',
    'Crianças',
    'Aprendizado',
    'Desenvolvimento',
    'Experiência',
    'Qualidade',
    'Proposta pedagógica',
    'Ensino desde 1974',
    'Educação de qualidade',
    'Aprendizado divertido',
    'Cuidado infantil',
    'Atividades lúdicas',
    'Desenvolvimento cognitivo',
    'Desenvolvimento emocional',
    'Acompanhamento individualizado',
    'Ambiente acolhedor',
    'Professores experientes'
  ],
  authors: [{ name: 'Trydo Studio Digital', url: 'https://trydo.com.br' }],
  publisher: 'Trydo Studio Digital',
  colorScheme: 'light',
  creator: 'André Santiago - Trydo Studio Digital',
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/pt-br',
      'en-GB': '/en-gb'
    }
  }
} as Metadata

interface LayoutProps {
  children: React.ReactNode
  params: {
    uid: string
    locale: string
  }
}

export default function RootLayout({ children, params }: LayoutProps) {
  const locale = useLocale()

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound()
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${sofia.variable} ${comic_neue.variable} ${inter.variable} ${Body}`}
      >
        <NextIntlClientProvider locale={locale}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

const Body = `
  font-sans
  text-gray-500
  bg-yellow-400
  dark:bg-yellow-900
  bg-[url('/images/textureYellow.png')]
  dark:bg-[url('/images/textureYellowDark.png')]
  bg-repeat
  bg-[length:400px_400px]
`
