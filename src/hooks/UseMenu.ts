import { useContext } from 'react'
import { MenuContext } from '@/contexts/MenuContext'

export const useMenu = () => {
  const { isOpen, setIsOpen, sideMenuInitialIsOpen, setSideMenuInitialIsOpen } =
    useContext(MenuContext)
  return { isOpen, setIsOpen, sideMenuInitialIsOpen, setSideMenuInitialIsOpen }
}
