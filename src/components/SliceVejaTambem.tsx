import { VejaTambemProps } from '@/slices/VejaTambem'
import { PrismicNextLink } from '@prismicio/next'

export const SliceVejaTambem = (props: VejaTambemProps) => {
  return (
    <div className={Wrapper}>
      <div className={ContainerBox}>
        <header className={HeaderBox}>
          {props.slice.primary.title && (
            <h3 className={TitleBox}>{props.slice.primary.title}</h3>
          )}
        </header>

        <div className={ListBox}>
          {props.slice.items.map((item, index) => (
            <div className={ItemBox} key={index}>
              <PrismicNextLink field={item.link}>{item.name}</PrismicNextLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Wrapper = ``
const ContainerBox = ``
const HeaderBox = ``
const TitleBox = ``
const ListBox = ``
const ItemBox = ``
const LinkBox = ``
