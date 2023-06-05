import { SliceGaleriaFotos } from '@/components/SliceGaleriaFotos'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `GaleriaFotos`.
 */
export type GaleriaFotosProps = SliceComponentProps<Content.GaleriaFotosSlice>

/**
 * Component for "GaleriaFotos" Slices.
 */
const GaleriaFotos = (props: GaleriaFotosProps): JSX.Element => {
  const { slice } = props

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <SliceGaleriaFotos {...props} />
    </section>
  )
}

export default GaleriaFotos
