interface TitleHeroProps {
  title: string
}

export const TitleHero = ({ title }: TitleHeroProps) => {
  return (
    <div className={Wrapper}>
      <div className={TitleBox}>{title}</div>
      <div className={ShadowBox}>{title}</div>
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
  pb-12
  flex
  justify-center
  items-end
  text-[2rem]
  lg:text-[6rem]
  text-blue-500
  font-script
  relative
  z-10
`
const ShadowBox = `
  w-full
  h-full
  pb-12
  flex
  justify-center
  items-end
  absolute
  top-0
  left-0
  text-[2.0rem]
  lg:text-[6.05rem]
  text-blue-300
  font-script
  drop-shadow-lg
`
