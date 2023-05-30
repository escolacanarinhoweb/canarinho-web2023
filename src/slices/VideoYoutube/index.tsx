import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `VideoYoutube`.
 */
export type VideoYoutubeProps = SliceComponentProps<Content.VideoYoutubeSlice>

/**
 * Component for "VideoYoutube" Slices.
 */
const VideoYoutube = ({ slice }: VideoYoutubeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for video_youtube (variation: {slice.variation})
      Slices
    </section>
  )
}

export default VideoYoutube
