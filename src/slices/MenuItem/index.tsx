import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `MenuSubmenu`.
 */
export type MenuSubmenuProps = SliceComponentProps<Content.MenuSubmenuSlice>

/**
 * Component for "MenuSubmenu" Slices.
 */
const MenuSubmenu = ({ slice }: MenuSubmenuProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for menu_submenu (variation: {slice.variation})
      Slices
    </section>
  )
}

export default MenuSubmenu
