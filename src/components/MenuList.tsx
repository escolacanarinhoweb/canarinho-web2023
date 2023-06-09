import { SliceZone } from '@prismicio/client'
import { MenuSubmenuSlice } from '../../prismicio-types'
import { PrismicNextLink } from '@prismicio/next'
import { useLocale } from 'next-intl'

export interface MenuListProps {
  slices: SliceZone<MenuSubmenuSlice>
}

export const MenuList = (props: MenuListProps) => {
  const locale = useLocale()

  return (
    <div className={Wrapper}>
      {props.slices.map((slice, index) => {
        return (
          <div className={Item} key={index}>
            <PrismicNextLink field={slice.primary.link} locale={locale}>
              {slice.primary.name}
            </PrismicNextLink>
            {slice.items.length > 0 && (
              <div className={Submenu}>
                <div className={SubMenuArrow}>
                  <svg
                    viewBox="0 0 218 110"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.105469 109.606L109 0.711116L217.894 109.606H109L0.105469 109.606Z"
                      fill="white"
                    />
                  </svg>
                </div>

                <ul className={SubMenuList}>
                  {slice.items.map((item, index) => {
                    return (
                      <li className={SubItem} key={index}>
                        <PrismicNextLink field={item.link} locale={locale}>
                          {item.name}
                        </PrismicNextLink>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

const Wrapper = `
  flex
  flex-col
  lg:flex-row
  lg:gap-8
  font-serif
`
const Item = `
  text-xl
  lg:text-xl
  group
  hover:text-blue-500
`
const Submenu = `
  lg:absolute
  lg:opacity-0
  lg:scale-y-0
  lg:transform
  lg:origin-top
  lg:transition-all
  lg:duration-300
  lg:pointer-events-none
  lg:group-hover:scale-y-100
  lg:group-hover:opacity-100
  lg:group-hover:pointer-events-auto
`
const SubMenuArrow = `
  w-6
  ml-4
  hidden
  lg:block
`
const SubMenuList = `
  lg:p-6
  lg:text-blue-500
  lg:bg-white
  lg:rounded-lg
  lg:shadow-lg
`
const SubItem = `
  lg:text-base
  hover:text-blue-900
`
