import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import { Sofia, Comic_Neue, Mulish } from 'next/font/google'
import { createTranslator, NextIntlClientProvider } from 'next-intl'

import './globals.css'
import { Providers } from './providers'

// const inter = Inter({ subsets: ['latin'] })
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
const mulish = Mulish({ subsets: ['latin'], variable: '--font-mulish' })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

interface LayoutProps {
  children: React.ReactNode
  params: {
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
        className={`${sofia.variable} ${comic_neue.variable} ${mulish.variable} ${Body}`}
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