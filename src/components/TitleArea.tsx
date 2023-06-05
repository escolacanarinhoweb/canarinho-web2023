import { KeyTextField } from '@prismicio/client'

interface TitleAreaProps {
  title: KeyTextField
}

export const TitleArea = ({ title }: TitleAreaProps) => {
  return <div className={Wrapper}>{title}</div>
}

const Wrapper = `
  text-4xl
  font-serif
  text-center
`
