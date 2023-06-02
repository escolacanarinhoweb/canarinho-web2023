'use client'

import { MenuProvider } from '@/contexts/MenuContext'
import { ModalProvider } from '@/contexts/ModalContext'
import { ThemeProvider } from 'next-themes'

interface ProvidersProps {
  children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <MenuProvider>
        <ModalProvider>{children}</ModalProvider>
      </MenuProvider>
    </ThemeProvider>
  )
}
