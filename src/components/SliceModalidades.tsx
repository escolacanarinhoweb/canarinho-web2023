import { ModalidadesProps } from '@/slices/Modalidades'
import { CardModality } from './CardModality'
import { Container, ContainerSmall } from './Container'

export const SliceModalidades = (props: ModalidadesProps) => {
  return (
    <div className={Wrapper}>
      <div className={ContainerBox}>
        <div className={ListBox}>
          {props.slice.items.map((item, index) => (
            <div className={ItemBox} key={index}>
              <CardModality
                color={
                  item.color === 'Amarelo'
                    ? 'yellow'
                    : item.color === 'Azul'
                    ? 'blue'
                    : 'orange'
                }
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                text={item.text}
                link={item.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Wrapper = ``
const ContainerBox = `
  ${ContainerSmall}
`
const ListBox = `
  flex
  flex-col
  lg:grid
  lg:grid-cols-3
  gap-6
`
const ItemBox = ``
