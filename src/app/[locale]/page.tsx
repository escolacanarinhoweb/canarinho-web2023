import { TemplateHome } from '@/components/TemplateHome'
import { createClient } from '../../../prismicio'
import { TemplateHeader } from '@/components/TemplateHeader'

interface HomeProps {
  params: {
    locale: string
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

  const header = {
    menu: navTop.data,
    social: navSocial.data.slices,
    text_registration: navTop.data.text_registration,
    link_pre_registration: navTop.data.link_pre_registration,
    text_responsible_space: navTop.data.text_responsible_space,
    link_responsible_space: navTop.data.link_responsible_space
  }

  const home = await client.getSingle('home', {
    lang: params.locale
  })

  return <TemplateHome header={header} home={home.data} />
}
