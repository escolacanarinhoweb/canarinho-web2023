import { KeyTextField } from '@prismicio/client'

interface TitleHeroProps {
  title: string | KeyTextField
}

export const TitleHero = ({ title }: TitleHeroProps) => {
  return (
    <div className={Wrapper}>
      <div className={ShadowBox2}>{title}</div>
      <div className={ShadowBox}>{title}</div>
      <div className={TitleBox}>{title}</div>
    </div>
  )
}

const Wrapper = `
  titleHero
  w-full
  h-full
  relative
`
const TitleBox = `
  w-full
  h-full
  pb-14
  flex
  justify-center
  items-end
  text-[2rem]
  lg:text-[4.5rem]
  text-blue-500
  font-script
  relative
  z-10
`
const ShadowBox = `
  w-full
  h-full
  pb-14
  flex
  justify-center
  items-end
  absolute
  top-0
  left-0
  text-[2.0rem]
  lg:text-[4.53rem]
  text-blue-300
  font-script
  drop-shadow-lg
`
const ShadowBox2 = `
  w-full
  h-full
  pb-14
  flex
  justify-center
  items-end
  absolute
  top-0
  left-0
  text-[2.0rem]
  lg:text-[4.53rem]
  text-white
  font-script
  drop-shadow-lg
  font-outline-4
`
