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
                <PrismicNextLink
                  className={LinkBox}
                  field={item.document}
                  target="_blank"
                >
                  <span className={NameBox}>{item.name}</span>
                  <span className={ButtonBox}>
                    <svg
                      fill="currentColor"
                      viewBox="0 0 30 30"
                      className={ButtonIconBox}
                    >
                      <rect width="30" height="30" rx="12"></rect>
                      <path
                        d="M15.5 16.875l3.167-3.167M15.5 16.875v-9.5 9.5zm0 0l-3.167-3.167 3.167 3.167zM7.583 18.458l.492 1.968a1.583 1.583 0 001.536 1.199h11.778a1.583 1.583 0 001.536-1.2l.492-1.967"
                        stroke="#fff"
                        stroke-width="1.583"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
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
const ContainerBox = `
  max-w-[600px]
  mx-auto
`
const ListBox = `
  shadow-md
  rounded-lg
  border
  border-gray-50
`
const ItemBox = `
  border-b
  border-gray-50
`
const LinkBox = `
  py-4
  px-6
  flex
  justify-between
  items-center
`
const NameBox = ``
const ButtonBox = `
  text-yellow-500
  hover:text-blue-600
  transition-colors
  duration-200
`
const ButtonIconBox = `
  w-10
  h-10
`
