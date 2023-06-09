'user client'

import { createContext, useState } from 'react'

export interface MenuContextProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  sideMenuInitialIsOpen?: boolean
  setSideMenuInitialIsOpen?: (isOpen: boolean) => void
}

export const MenuContext = createContext<MenuContextProps>({
  isOpen: false,
  setIsOpen: () => false,
  sideMenuInitialIsOpen: false,
  setSideMenuInitialIsOpen: () => false
})

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [sideMenuInitialIsOpen, setSideMenuInitialIsOpen] =
    useState<boolean>(false)

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        setIsOpen,
        sideMenuInitialIsOpen,
        setSideMenuInitialIsOpen
      }}
    >
      {children}
    </MenuContext.Provider>
  )
}
