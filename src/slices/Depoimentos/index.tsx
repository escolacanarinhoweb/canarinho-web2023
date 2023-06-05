import { SliceDepoimentos } from '@/components/SliceDepoimentos'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Depoimentos`.
 */
export type DepoimentosProps = SliceComponentProps<Content.DepoimentosSlice>

/**
 * Component for "Depoimentos" Slices.
 */
const Depoimentos = (props: DepoimentosProps): JSX.Element => {
  const { slice } = props

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SliceDepoimentos {...props} />
    </section>
  )
}

export default Depoimentos
