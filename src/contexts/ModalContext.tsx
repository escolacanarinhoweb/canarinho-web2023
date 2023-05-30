'user client'

import { createContext, useState } from 'react'

export interface ModalContextProps {
  modalIsOpen: boolean
  setModalIsOpen: (isOpen: boolean) => void
  video: string | null
  setVideo: (video: string) => void
}

export const ModalContext = createContext({} as ModalContextProps)

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [video, setVideo] = useState<string | null>(null)

  return (
    <ModalContext.Provider
      value={{ modalIsOpen, setModalIsOpen, video, setVideo }}
    >
      {children}
    </ModalContext.Provider>
  )
}
