'use client'

import Image from 'next/image'

interface CharacterProps {
  char: 'Girl' | 'Boy' | 'Baby' | null
}

export const HeroCharacter = ({ char }: CharacterProps) => {
  return (
    <div className={Wrapper}>
      {char && (
        <>
          <Image
            priority
            className={ShadowBox}
            src={`/images/hero${char}Shadow.png`}
            width={884}
            height={943}
            alt="sombra do personagem com uniforme da Escola Canarinho"
          />
          <Image
            priority
            className={ImageBox}
            src={`/images/hero${char}.webp`}
            width={884}
            height={943}
            alt="Foto criança com uniforme da Escola Canarinho"
          />
        </>
      )}
    </div>
  )
}

const Wrapper = `
  heroCharacater
  w-full
  h-full
  flex
  justify-center
  items-center
  relative
`
const ImageBox = `
  char
  w-auto
  h-full
  max-w-none
  max-h-[80%]
  lg:max-h-[90%]
  aspect-[884/943]
  absolute
  bottom-0
`
const ShadowBox = `
  shadow
  aspect-[884/943]
  w-full
  h-auto
  lg:w-auto
  lg:h-full
  max-h-[90%]
  absolute
  -bottom-12
  opacity-20
`
