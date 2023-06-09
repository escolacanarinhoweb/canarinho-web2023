import { TemplateHome } from '@/components/TemplateHome'
import { createClient } from '../../../prismicio'
import type { Metadata } from 'next'

type Params = {
  params: {
    locale: string
  }
}
interface HomeProps {
  params: {
    locale: string
  }
}

export async function generateMetadata({
  params: { locale }
}: Params): Promise<Metadata> {
  const client = createClient()

  const home = await client.getSingle('home', {
    lang: locale
  })

  // @ts-ignore
  const newDescription = 'teste'

  return {
    title: home.data.meta_title,
    description: newDescription,
    openGraph: {
      title: home.data.meta_title as string,
      description: newDescription,
      type: 'website',
      images: [
        {
          url: home.data.meta_image.url || '',
          width: home.data.meta_image.dimensions?.width || 1200,
          height: home.data.meta_image.dimensions?.height || 630,
          alt: home.data.meta_image.alt || 'Escola Canarinho'
        }
      ]
    }
  }
}

export default async function Home({ params }: HomeProps) {
  const client = createClient()

  const navTop = await client.getSingle('nav_top', {
    lang: params.locale
  })

  const navSocial = await client.getSingle('nav_social', {
    lang: params.locale
  })

  const navSide = await client.getSingle('nav_side', {
    lang: params.locale
  })

  const header = {
    menu: navTop.data,
    social: navSocial.data.slices,
    button_language: navTop.data.button_language,
    text_registration: navTop.data.text_registration,
    link_pre_registration: navTop.data.link_pre_registration,
    text_responsible_space: navTop.data.text_responsible_space,
    link_responsible_space: navTop.data.link_responsible_space,
    menuSide: navSide
  }

  const footer = await client.getSingle('footer', {
    lang: params.locale
  })

  const home = await client.getSingle('home', {
    lang: params.locale
  })

  return (
    <>
      <TemplateHome header={header} home={home.data} footer={footer} />
    </>
  )
}
