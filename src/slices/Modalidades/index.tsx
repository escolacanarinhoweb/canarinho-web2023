import { SliceModalidades } from '@/components/SliceModalidades'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Modalidades`.
 */
export type ModalidadesProps = SliceComponentProps<Content.ModalidadesSlice>

/**
 * Component for "Modalidades" Slices.
 */
const Modalidades = (props: ModalidadesProps): JSX.Element => {
  return (
    <section
      data-slice-type={props.slice.slice_type}
      data-slice-variation={props.slice.variation}
    >
      <SliceModalidades {...props} />
    </section>
  )
}

export default Modalidades
