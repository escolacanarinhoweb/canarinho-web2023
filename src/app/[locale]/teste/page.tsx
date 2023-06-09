import { PrismicRichText } from '@prismicio/react'
import { createClient } from '../../../../prismicio'

interface Props {
  params: {
    locale: string
  }
}

const Teste = async ({ params }: Props) => {
  const client = createClient()

  const home = await client.getSingle('home', {
    lang: params.locale
  })
  // @ts-ignore
  return (
    <div>
      <PrismicRichText field={home.data.meta_description} />
    </div>
  )
}

export default Teste
