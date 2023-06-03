import { TemplatePage } from '@/components/TemplatePage'
import { createClient } from '../../../../prismicio'

interface PageProps {
  params: {
    uid: string
    locale: string
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

  const header = {
    menu: navTop.data,
    social: navSocial.data.slices,
    text_registration: navTop.data.text_registration,
    link_pre_registration: navTop.data.link_pre_registration,
    text_responsible_space: navTop.data.text_responsible_space,
    link_responsible_space: navTop.data.link_responsible_space
  }

  const page = await client.getByUID('page', params.uid, {
    lang: params.locale
  })

  return <TemplatePage header={header} />
}
