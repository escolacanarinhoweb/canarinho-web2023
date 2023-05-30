import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `NossaEscola`.
 */
export type NossaEscolaProps = SliceComponentProps<Content.NossaEscolaSlice>

/**
 * Component for "NossaEscola" Slices.
 */
const NossaEscola = ({ slice }: NossaEscolaProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for nossa_escola (variation: {slice.variation})
      Slices
    </section>
  )
}

export default NossaEscola
