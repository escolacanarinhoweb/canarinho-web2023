import { createClient } from '../../../../../prismicio'

interface PageProps {
  params: {
    uid: string
    locale: string
  }
}

export default async function Post({ params }: PageProps) {
  const client = createClient()

  const post = await client.getByUID('blog', params.uid, {
    lang: params.locale
  })

  return <main>{post.data.title}</main>
}
