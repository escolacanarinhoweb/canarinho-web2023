import { createClient } from '../../../../prismicio'

interface PageProps {
  params: {
    uid: string
    locale: string
  }
}

export default async function Page({ params }: PageProps) {
  const client = createClient()

  const page = await client.getByUID('page', params.uid, {
    lang: params.locale
  })

  return <main>{page.data.title}</main>
}
