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
              <PrismicNextLink className={LinkBox} field={item.link}>
                {item.name}
              </PrismicNextLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Wrapper = `
  shadow-md
  border
  border-gray-50
  rounded-xl
`
const ContainerBox = `
  px-12
  py-8
`
const HeaderBox = ``
const TitleBox = `
  font-serif
  text-orange-500
  text-lg
  mb-4
`
const ListBox = ``
const ItemBox = ``
const LinkBox = `
  hover:text-orange-500
`
