'use client'

import { useEffect, useState } from 'react'
import { RiveLogo } from './RiveLogo'
import { RiveLogoScrollOn } from './RiveLogoScrollOn'
export const Logo = () => {
  const [isScrolling, setIsScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div className={Wrapper}>
      {!isScrolling ? <RiveLogo /> : <RiveLogoScrollOn />}
    </div>
  )
}

const Wrapper = `
  w-full
  h-full
`
