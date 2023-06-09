import { TemplateBlog } from '@/components/TemplateBlog'
import { createClient } from '../../../../prismicio'

interface BlogProps {
  params: {
    locale: string
  }
}

export default async function Blog({ params }: BlogProps) {
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

  const posts = await client.getByType('blog', {
    lang: params.locale
  })

  return <TemplateBlog header={header} footer={footer} posts={posts.results} />
}
