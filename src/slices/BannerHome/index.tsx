import { SliceBannerHome } from '@/components/SliceBannerHome'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `BannerHome`.
 */
export type BannerHomeProps = SliceComponentProps<Content.BannerHomeSlice>

/**
 * Component for "BannerHome" Slices.
 */
const BannerHome = (props: BannerHomeProps): JSX.Element => {
  return (
    <section
      data-slice-type={props.slice.slice_type}
      data-slice-variation={props.slice.variation}
    >
      <SliceBannerHome {...props} />
    </section>
  )
}

export default BannerHome
