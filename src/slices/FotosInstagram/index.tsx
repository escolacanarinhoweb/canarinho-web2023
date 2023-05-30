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
const FotosInstagram = ({ slice }: FotosInstagramProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for fotos_instagram (variation: {slice.variation})
      Slices
    </section>
  )
}

export default FotosInstagram
