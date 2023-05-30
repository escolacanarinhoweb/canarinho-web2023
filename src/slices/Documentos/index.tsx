import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Documentos`.
 */
export type DocumentosProps = SliceComponentProps<Content.DocumentosSlice>

/**
 * Component for "Documentos" Slices.
 */
const Documentos = ({ slice }: DocumentosProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for documentos (variation: {slice.variation}) Slices
    </section>
  )
}

export default Documentos
