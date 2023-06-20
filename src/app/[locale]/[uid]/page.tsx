import { TemplatePage } from '@/components/TemplatePage'
import { createClient } from '../../../../prismicio'
import type { Metadata } from 'next'

interface PageProps {
  params: {
    uid: string
    locale: string
  }
}

type Params = {
  params: {
    uid: string
    locale: string
  }
}

export async function generateMetadata({
  params: { locale, uid }
}: Params): Promise<Metadata> {
  const client = createClient()

  const page = await client.getByUID('page', uid, {
    lang: locale
  })

  // @ts-ignore
  const newDescription = page.data.meta_description[0].text

  return {
    title: page.data.meta_title,
    description: newDescription,
    openGraph: {
      title: page.data.meta_title as string,
      description: newDescription,
      type: 'website',
      images: [
        {
          url: page.data.meta_image.url || '',
          width: page.data.meta_image.dimensions?.width || 1200,
          height: page.data.meta_image.dimensions?.height || 630,
          alt: page.data.meta_image.alt || 'Escola Canarinho'
        }
      ]
    }
  }
}

export default async function Page({ params }: PageProps) {
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

  const page = await client.getByUID('page', params.uid, {
    lang: params.locale
  })

  return <TemplatePage header={header} page={page} footer={footer} />
}
