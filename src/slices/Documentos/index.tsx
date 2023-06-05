import { SliceDocumentos } from '@/components/SliceDocumentos'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Documentos`.
 */
export type DocumentosProps = SliceComponentProps<Content.DocumentosSlice>

/**
 * Component for "Documentos" Slices.
 */
const Documentos = (props: DocumentosProps): JSX.Element => {
  const { slice } = props

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SliceDocumentos {...props} />
    </section>
  )
}

export default Documentos
