'user client'

import { createContext, useState } from 'react'

export interface MenuContextProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
}

export const MenuContext = createContext<MenuContextProps>({
  isOpen: false,
  setIsOpen: () => false
})

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <MenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MenuContext.Provider>
  )
}
