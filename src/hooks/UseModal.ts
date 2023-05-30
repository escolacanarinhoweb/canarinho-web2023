import { useContext } from 'react'
import { ModalContext } from '@/contexts/ModalContext'

export const useModal = () => {
  const { modalIsOpen, setModalIsOpen, video, setVideo } =
    useContext(ModalContext)
  return { modalIsOpen, setModalIsOpen, video, setVideo }
}
