import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `TourVirtual`.
 */
export type TourVirtualProps = SliceComponentProps<Content.TourVirtualSlice>

/**
 * Component for "TourVirtual" Slices.
 */
const TourVirtual = ({ slice }: TourVirtualProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for tour_virtual (variation: {slice.variation})
      Slices
    </section>
  )
}

export default TourVirtual
