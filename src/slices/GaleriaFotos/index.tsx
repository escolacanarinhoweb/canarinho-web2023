import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `GaleriaFotos`.
 */
export type GaleriaFotosProps = SliceComponentProps<Content.GaleriaFotosSlice>

/**
 * Component for "GaleriaFotos" Slices.
 */
const GaleriaFotos = ({ slice }: GaleriaFotosProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for galeria_fotos (variation: {slice.variation})
      Slices
    </section>
  )
}

export default GaleriaFotos
