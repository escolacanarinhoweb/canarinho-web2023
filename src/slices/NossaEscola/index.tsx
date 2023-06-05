import { SliceNossaEscola } from '@/components/SliceNossaEscola'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `NossaEscola`.
 */
export type NossaEscolaProps = SliceComponentProps<Content.NossaEscolaSlice>

/**
 * Component for "NossaEscola" Slices.
 */
const NossaEscola = (props: NossaEscolaProps): JSX.Element => {
  return (
    <section
      data-slice-type={props.slice.slice_type}
      data-slice-variation={props.slice.variation}
    >
      <SliceNossaEscola {...props} />
    </section>
  )
}

export default NossaEscola
