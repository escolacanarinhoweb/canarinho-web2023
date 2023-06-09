'use client'

import { BannerHomeProps } from '@/slices/BannerHome'
import { use, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { HeroBG } from './HeroBG'
import { HeroCharacter } from './HeroCharacter'
import { TitleHero } from './TitleHero'

type CharacterProps = 'Girl' | 'Boy' | 'Baby' | null

export const SliceBannerHome = (props: BannerHomeProps) => {
  const [character, setCharacter] = useState<CharacterProps>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)
  const charRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const windowWidth = window.innerWidth
    const wrapper = wrapperRef.current
    const bg = bgRef.current
    const char = charRef.current
    const title = titleRef.current

    if (!wrapper || !bg || !char || !title || windowWidth < 768) return

    const ctx = gsap.context(() => {
      const parallaxIt = (e: MouseEvent, target: Element, movement: number) => {
        let relX = e.pageX - wrapper.offsetLeft
        let relY = e.pageY - wrapper.offsetTop

        gsap.to(target, {
          x:
            ((relX - wrapper.offsetWidth / 2) / wrapper.offsetWidth) * movement,
          y:
            ((relY - wrapper.offsetHeight / 2) / wrapper.offsetHeight) *
            movement,
          ease: 'power2.out',
          overwrite: true
        })
      }

      wrapper.addEventListener('mousemove', (e) => {
        parallaxIt(e, bg, -30)
        parallaxIt(e, char, 20)
        parallaxIt(e, title, 50)
      })
    })

    return () => {
      ctx.revert()
    }
  }, [])

  useEffect(() => {
    const localStorageCharacter = localStorage.getItem('character')

    const handleHandleCharacter = () => {
      const number = Math.floor(Math.random() * 3) + 1

      if (number === 1) {
        return 'Girl'
      } else if (number === 2) {
        return 'Boy'
      } else {
        return 'Baby'
      }
    }

    if (localStorageCharacter) {
      if (localStorageCharacter === 'Girl') {
        setCharacter('Boy')
        localStorage.setItem('character', 'Boy')
      } else if (localStorageCharacter === 'Boy') {
        setCharacter('Baby')
        localStorage.setItem('character', 'Baby')
      } else {
        setCharacter('Girl')
        localStorage.setItem('character', 'Girl')
      }
    } else {
      const character = handleHandleCharacter()
      localStorage.setItem('character', character)
      setCharacter(character)
    }
  }, [])

  return (
    <div className={Wrapper} ref={wrapperRef} id="zarkan">
      <div className={Background} ref={bgRef}>
        <HeroBG char={character} />
      </div>

      <div className={Character} ref={charRef}>
        <HeroCharacter char={character} />
      </div>

      <svg
        className={Ball}
        width="1008"
        height="1008"
        viewBox="0 0 1008 1008"
        fill="currentColor"
      >
        <circle cx="504" cy="504" r="504" />
      </svg>

      <div className={Title} ref={titleRef}>
        <TitleHero title={props.slice.primary.title} />
      </div>
    </div>
  )
}

const Wrapper = `
  w-full
  h-fit
  lg:h-screen
  min-h-[600px]
  relative
`
const Layer = `
  w-full
  h-full
  absolute
  top-0
  left-0
`
const Background = `
  ${Layer}
  z-0
`
const Character = `
  ${Layer}
  z-10
`
const Title = `
  ${Layer}
  z-20
`

const Ball = `
  w-[2000px]
  max-w-none
  h-full
  aspect-[1/1]
  bottom-[-100vh]
  left-1/2
  transform
  -translate-x-1/2
  -translate-y-1/2
  absolute
  text-white
  z-10
  hidden
`
