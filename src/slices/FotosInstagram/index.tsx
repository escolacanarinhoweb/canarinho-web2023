import { SliceFotosInstagram } from '@/components/SliceFotosInstagram'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `FotosInstagram`.
 */
export type FotosInstagramProps =
  SliceComponentProps<Content.FotosInstagramSlice>

/**
 * Component for "FotosInstagram" Slices.
 */
const FotosInstagram = (props: FotosInstagramProps): JSX.Element => {
  const { slice } = props

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SliceFotosInstagram {...props} />
    </section>
  )
}

export default FotosInstagram
