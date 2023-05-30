'use client'

import { ModalVideo } from '@/components/ModalVideo'
import { MenuProvider } from '@/contexts/MenuContext'
import { ModalProvider } from '@/contexts/ModalContext'
import { SmootherProvider } from '@/contexts/SmootherContext'
import { ThemeProvider } from 'next-themes'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <MenuProvider>
        <ModalProvider>
          <ModalVideo />
          <SmootherProvider>{children}</SmootherProvider>
        </ModalProvider>
      </MenuProvider>
    </ThemeProvider>
  )
}
