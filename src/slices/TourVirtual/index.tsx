import { SliceTourVirtual } from '@/components/SliceTourVirtual'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `TourVirtual`.
 */
export type TourVirtualProps = SliceComponentProps<Content.TourVirtualSlice>

/**
 * Component for "TourVirtual" Slices.
 */
const TourVirtual = (props: TourVirtualProps): JSX.Element => {
  return (
    <section
      data-slice-type={props.slice.slice_type}
      data-slice-variation={props.slice.variation}
    >
      <SliceTourVirtual {...props} />
    </section>
  )
}

export default TourVirtual
