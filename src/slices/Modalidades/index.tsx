import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Modalidades`.
 */
export type ModalidadesProps = SliceComponentProps<Content.ModalidadesSlice>

/**
 * Component for "Modalidades" Slices.
 */
const Modalidades = ({ slice }: ModalidadesProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for modalidades (variation: {slice.variation})
      Slices
    </section>
  )
}

export default Modalidades
