import { DocumentosProps } from '@/slices/Documentos'
import { PrismicNextLink } from '@prismicio/next'

export const SliceDocumentos = (props: DocumentosProps) => {
  return (
    <div className={Wrapper}>
      <div className={ContainerBox}>
        <ul className={ListBox}>
          {props.slice.items.map((item, index) => {
            return (
              <li className={ItemBox} key={index}>
                <PrismicNextLink className={LinkBox} field={item.document}>
                  <span className={NameBox}>{item.name}</span>
                  <span className={ButtonBox}>Ver</span>
                </PrismicNextLink>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

const Wrapper = ``
const ContainerBox = ``
const ListBox = `
  shadow-md
`
const ItemBox = ``
const LinkBox = `
  py-4
  px-6
  flex
  justify-between
`
const NameBox = ``
const ButtonBox = ``
