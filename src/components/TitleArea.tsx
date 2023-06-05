import { KeyTextField } from '@prismicio/client'
import { use, useEffect, useState } from 'react'

interface TitleAreaProps {
  title: KeyTextField
  color?: 'yellow' | 'blue' | 'orange'
}

export const TitleArea = ({ title, color }: TitleAreaProps) => {
  const [titleFirstWord, setTitleFirstWord] = useState('')
  const [titleRest, setTitleRest] = useState('')

  useEffect(() => {
    if (!title) return

    const titleArray = title.split(' ')
    setTitleFirstWord(titleArray[0])
    setTitleRest(titleArray.slice(1).join(' '))
  }, [title])

  return (
    <div className={Wrapper}>
      <span className={FirstWord}>{titleFirstWord} </span>

      <span
        className={`${Rest}
        ${color === 'yellow' ? 'text-yellow-500 ' : ''}
        ${color === 'blue' ? 'text-blue-500 ' : ''}
        ${color === 'orange' ? 'text-orange-500 ' : ''}`}
      >
        {titleRest}
      </span>
    </div>
  )
}

const Wrapper = `
  text-4xl
  font-serif
  text-center
`
const FirstWord = ``
const Rest = ``
