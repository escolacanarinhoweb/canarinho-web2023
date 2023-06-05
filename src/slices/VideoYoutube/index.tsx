import { SliceVideoYoutube } from '@/components/SliceVideoYoutube'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `VideoYoutube`.
 */
export type VideoYoutubeProps = SliceComponentProps<Content.VideoYoutubeSlice>

/**
 * Component for "VideoYoutube" Slices.
 */
const VideoYoutube = (props: VideoYoutubeProps): JSX.Element => {
  return (
    <section
      data-slice-type={props.slice.slice_type}
      data-slice-variation={props.slice.variation}
    >
      <SliceVideoYoutube {...props} />
    </section>
  )
}

export default VideoYoutube
