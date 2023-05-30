import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Depoimentos`.
 */
export type DepoimentosProps = SliceComponentProps<Content.DepoimentosSlice>

/**
 * Component for "Depoimentos" Slices.
 */
const Depoimentos = ({ slice }: DepoimentosProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for depoimentos (variation: {slice.variation})
      Slices
    </section>
  )
}

export default Depoimentos
