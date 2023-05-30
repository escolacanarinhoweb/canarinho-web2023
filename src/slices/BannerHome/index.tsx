import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `BannerHome`.
 */
export type BannerHomeProps = SliceComponentProps<Content.BannerHomeSlice>

/**
 * Component for "BannerHome" Slices.
 */
const BannerHome = ({ slice }: BannerHomeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for banner_home (variation: {slice.variation})
      Slices
    </section>
  )
}

export default BannerHome
