import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `VejaTambem`.
 */
export type VejaTambemProps = SliceComponentProps<Content.VejaTambemSlice>

/**
 * Component for "VejaTambem" Slices.
 */
const VejaTambem = ({ slice }: VejaTambemProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for veja_tambem (variation: {slice.variation})
      Slices
    </section>
  )
}

export default VejaTambem
