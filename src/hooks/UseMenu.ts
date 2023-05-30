import { useContext } from 'react'
import { MenuContext } from '@/contexts/MenuContext'

export const useMenu = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext)
  return { isOpen, setIsOpen }
}
