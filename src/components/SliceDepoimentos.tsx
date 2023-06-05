import { DepoimentosProps } from '@/slices/Depoimentos'
import { TitleArea } from './TitleArea'
import { SubtitleArea } from './SubtitleArea'
import { SliderDepoimentos } from './SliderDepoimentos'

export const SliceDepoimentos = (props: DepoimentosProps) => {
  return (
    <div className={Wrapper}>
      <div className={ContainerBox}>
        <header className={HeaderBox}>
          <div className={TitleBox}>
            <TitleArea title={props.slice.primary.title} />
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

const Wrapper = ``
const ContainerBox = ``
const HeaderBox = ``
const TitleBox = `
  mb-2
`
const SubtitleBox = `
  mb-8
`
const BodyBox = ``
const SliderBox = ``
