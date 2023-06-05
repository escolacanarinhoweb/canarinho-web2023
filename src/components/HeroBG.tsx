'use client'

import { BgBaby } from '@/svgs/BGBaby'
import { BgBoy } from '@/svgs/BGBoy'
import { BgGirl } from '@/svgs/BGGirl'
import { BallonImagine } from '@/svgs/BallonImagine'
import RocketSpace from '@/svgs/RocketSpace'
import Submarine from '@/svgs/Submarine'
import Truck from '@/svgs/Truck'

interface CharacterProps {
  char: 'Girl' | 'Boy' | 'Baby' | null
}

export const HeroBG = ({ char }: CharacterProps) => {
  return (
    <div className={Wrapper}>
      <div className={Container}>
        <BallonImagine className={BallonBox} />
        {char === 'Girl' && (
          <>
            <RocketSpace className={Object} />
            <BgGirl className={Background} />
          </>
        )}
        {char === 'Boy' && (
          <>
            <Truck className={Object} />
            <BgBoy className={Background} />
          </>
        )}{' '}
        {char === 'Baby' && (
          <>
            <Submarine className={Object} />
            <BgBaby className={Background} />
          </>
        )}
      </div>

      <div className={Texture} />
    </div>
  )
}

const Wrapper = `
  w-full
  h-full
  relative
`
const Container = `
  heroBGContainer
  w-full
  h-full
  bg-yellowDark-500
  lg:bg-yellow-500
`
const Object = `
  w-[200px]
  w-[200px]
  lg:w-[400px]
  lg:w-[400px]
  absolute
  top-20
  left-1/2
  text-yellow-500
`
const Background = `
  heroBgAnimation
  h-screen
  text-yellow-500
  relative
  left-1/2
  transform
  -translate-x-1/2
`
const Texture = `
  w-full
  h-full
  absolute
  top-0
  left-0
  bg-[url('/images/texture.png')]
  bg-repeat
  bg-[length:400px_400px]
  mix-blend-overlay
  opacity-30
`
const BallonBox = `
  w-full
  h-full
  absolute
  top-[-20px]
  left-0
  text-yellowDark-500
  hidden
  lg:block
`
