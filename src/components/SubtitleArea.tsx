import { KeyTextField } from '@prismicio/client'

interface SubtitleAreaProps {
  subtitle: KeyTextField
}

export const SubtitleArea = ({ subtitle }: SubtitleAreaProps) => {
  return <div className={Wrapper}>{subtitle}</div>
}

const Wrapper = `
  text-lg
  font-serif
  text-center
`
