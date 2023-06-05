import { KeyTextField } from '@prismicio/client'

interface TitlePageProps {
  title: KeyTextField
}

export const TitlePage = ({ title }: TitlePageProps) => {
  return <div className={Wrapper}>{title}</div>
}

const Wrapper = `
  text-4xl
  font-serif
  text-center
`
