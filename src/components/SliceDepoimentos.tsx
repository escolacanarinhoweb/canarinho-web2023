import { DepoimentosProps } from '@/slices/Depoimentos'
import { TitleArea } from './TitleArea'
import { SubtitleArea } from './SubtitleArea'
import { SliderDepoimentos } from './SliderDepoimentos'
import BgSky from '@/svgs/BgSky'

export const SliceDepoimentos = (props: DepoimentosProps) => {
  return (
    <div className={Wrapper}>
      <BgSky className={BGSkyBox} />

      <div className={ContainerBox}>
        <header className={HeaderBox}>
          <div className={TitleBox}>
            <TitleArea color="blue" title={props.slice.primary.title} />
          </div>

          <div className={SubtitleBox}>
            <SubtitleArea subtitle={props.slice.primary.subtitle} />
          </div>
        </header>
        <div className={BodyBox}>
          <div className={SliderBox}>
            <SliderDepoimentos items={props.slice.items} />
          </div>
        </div>
      </div>
    </div>
  )
}

const Wrapper = `
  relative
`
const ContainerBox = `
  relative
`
const BGSkyBox = `
  w-full
  absolute
  text-yellow-300
  pointer-events-none
`
const HeaderBox = `
  text-white
`
const TitleBox = `
  mb-2
`
const SubtitleBox = `
  mb-8
`
const BodyBox = ``
const SliderBox = ``
