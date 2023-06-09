import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `TrabalheConosco`.
 */
export type TrabalheConoscoProps =
  SliceComponentProps<Content.TrabalheConoscoSlice>

/**
 * Component for "TrabalheConosco" Slices.
 */
const TrabalheConosco = ({ slice }: TrabalheConoscoProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for trabalhe_conosco (variation: {slice.variation})
      Slices
    </section>
  )
}

export default TrabalheConosco
