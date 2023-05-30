import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `Social`.
 */
export type SocialProps = SliceComponentProps<Content.SocialSlice>

/**
 * Component for "Social" Slices.
 */
const Social = ({ slice }: SocialProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for social (variation: {slice.variation}) Slices
    </section>
  )
}

export default Social
