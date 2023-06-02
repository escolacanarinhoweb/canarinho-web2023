import { KeyTextField } from '@prismicio/client'

interface ButtonTextProps {
  text: string | KeyTextField
  color?: 'yellow' | 'blue' | 'orange'
}

export const ButtonText = ({ text, color = 'blue' }: ButtonTextProps) => {
  return (
    <div
      className={`${Wrapper}
      ${color === 'yellow' ? 'bg-yellow-500 hover:bg-yellow-600' : ''}
      ${color === 'blue' ? 'bg-blue-500 hover:bg-blue-600' : ''}
      ${color === 'orange' ? 'bg-orange-500 hover:bg-orange-600' : ''}
    `}
    >
      <div className={`${TextBox}`}>{text}</div>
    </div>
  )
}

const Wrapper = `
  h-12
  px-6
  flex
  items-center
  justify-center
  text-white
  font-serif
  xl:text-lg
  rounded-full
  shadow-lg
  transition
  duration-300
  hover:scale-110
  transition-all
  duration-200
  cursor-pointer
`
const TextBox = ``
