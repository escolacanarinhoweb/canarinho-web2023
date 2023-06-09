import { RichTextField } from '@prismicio/client'
import { useEffect, useState } from 'react'

interface CallTextProps {
  text: RichTextField
}

export const CallText = ({ text }: CallTextProps) => {
  const [call, setCall] = useState('')

  useEffect(() => {
    // @ts-ignore
    setCall(text[0]?.text)
  }, [text])
  return <div dangerouslySetInnerHTML={{ __html: call }}></div>
}
