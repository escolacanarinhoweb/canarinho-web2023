import { SliceVejaTambem } from '@/components/SliceVejaTambem'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `VejaTambem`.
 */
export type VejaTambemProps = SliceComponentProps<Content.VejaTambemSlice>

/**
 * Component for "VejaTambem" Slices.
 */
const VejaTambem = (props: VejaTambemProps): JSX.Element => {
  const { slice } = props

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SliceVejaTambem {...props} />
    </section>
  )
}

export default VejaTambem
