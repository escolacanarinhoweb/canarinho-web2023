'use client'

import { useModal } from '@/hooks/UseModal'
import { useEffect, useState } from 'react'

export const ModalVideo = () => {
  const [isOpen, setIsOpen] = useState(true)
  const { modalIsOpen, setModalIsOpen, video, setVideo } = useModal()
  const [currentVideoId, setCurrentVideoId] = useState<string | null>(null)

  useEffect(() => {
    if (!video) return

    if (video.includes('v=')) {
      setCurrentVideoId(video.split('v=')[1])
    } else {
      setCurrentVideoId(video.split('be/')[1])
    }
  }, [video])

  useEffect(() => {
    setIsOpen(modalIsOpen)
  }, [modalIsOpen])

  const handleClose = () => {
    setIsOpen(false)

    setTimeout(() => {
      setModalIsOpen(false)
      setVideo(null!)
    }, 500)
  }

  return (
    <>
      {modalIsOpen && (
        <div className={`${Wrapper} ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          <button className={ButtonCloseBox} onClick={handleClose}>
            <svg
              className={ButtonClose}
              width="551"
              height="551"
              viewBox="0 0 551 551"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M353.501 215.751L293.752 275.5L353.501 335.249C354.77 336.431 355.787 337.857 356.493 339.441C357.199 341.025 357.579 342.735 357.609 344.469C357.64 346.203 357.321 347.926 356.671 349.534C356.022 351.142 355.055 352.602 353.829 353.829C352.603 355.055 351.142 356.022 349.534 356.671C347.926 357.321 346.203 357.64 344.469 357.609C342.735 357.579 341.025 357.199 339.441 356.493C337.857 355.787 336.431 354.77 335.249 353.501L275.5 293.752L215.751 353.501C213.303 355.782 210.065 357.024 206.719 356.965C203.374 356.906 200.182 355.551 197.816 353.184C195.45 350.818 194.094 347.626 194.035 344.281C193.976 340.935 195.218 337.697 197.499 335.249L257.248 275.5L197.499 215.751C195.218 213.303 193.976 210.065 194.035 206.719C194.094 203.374 195.45 200.182 197.816 197.816C200.182 195.449 203.374 194.094 206.719 194.035C210.065 193.976 213.303 195.218 215.751 197.499L275.5 257.248L335.249 197.499C337.697 195.218 340.935 193.976 344.281 194.035C347.626 194.094 350.819 195.449 353.185 197.816C355.551 200.182 356.906 203.374 356.965 206.719C357.024 210.065 355.782 213.303 353.501 215.751ZM495.039 275.5C495.039 318.921 482.163 361.366 458.04 397.469C433.917 433.572 399.63 461.711 359.514 478.328C319.399 494.944 275.257 499.292 232.67 490.821C190.084 482.35 150.966 461.441 120.263 430.738C89.5594 400.034 68.6504 360.916 60.1794 318.33C51.7085 275.744 56.0561 231.602 72.6724 191.486C89.2888 151.371 117.428 117.083 153.531 92.9599C189.634 68.8367 232.079 55.9609 275.5 55.9609C333.704 56.0293 389.505 79.1812 430.662 120.338C471.819 161.495 494.971 217.296 495.039 275.5ZM469.211 275.5C469.211 237.188 457.85 199.736 436.565 167.88C415.28 136.024 385.026 111.196 349.63 96.5344C314.234 81.8729 275.285 78.0368 237.709 85.5112C200.133 92.9855 165.617 111.435 138.526 138.526C111.435 165.617 92.9856 200.133 85.5113 237.709C78.0369 275.285 81.873 314.234 96.5345 349.63C111.196 385.026 136.024 415.28 167.88 436.565C199.736 457.85 237.188 469.211 275.5 469.211C326.858 469.154 376.096 448.727 412.412 412.411C448.727 376.096 469.154 326.858 469.211 275.5Z"
                fill="currentColor"
              />
            </svg>
          </button>

          <iframe
            className={Video}
            src={`https://www.youtube.com/embed/${currentVideoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </>
  )
}

const Wrapper = `
  w-full
  h-full
  fixed
  top-0
  left-0
  flex
  items-center
  justify-center
  bg-black
  bg-opacity-90
  backdrop-blur
  z-50
  transition-opacity
  duration-300
`
const ButtonCloseBox = `
  absolute
  top-12
  right-12
  flex
  items-center
  justify-center
  w-12
  h-12
`
const ButtonClose = `
  w-12
  h-12
  text-light-500
  hover:text-light-100
  transition-colors
  duration-300
`
const Video = `
  aspect-video
  w-[70%]
  min-w-[320px]
`
