'user client'

import { useMenu } from '@/hooks/UseMenu'
import { createContext, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useModal } from '@/hooks/UseModal'

type Callback = (self: ScrollSmoother) => any
type EventCallback = (self: ScrollSmoother, event: Event) => any
type EffectFunc = (index: number, element: Element) => number | string

export const SmootherContext = createContext({} as any | null)

export const SmootherProvider = ({
  children,
  ...props
}: {
  children: React.ReactNode
}) => {
  const [smoother, setSmoother] = useState<any | null>(null)
  const { isOpen, setIsOpen } = useMenu()
  const { modalIsOpen, setModalIsOpen } = useModal()

  useEffect(() => {
    ScrollTrigger.clearScrollMemory()
  }, [])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
    const windowWidth = window.innerWidth

    if (windowWidth < 768) return

    let smoother = ScrollSmoother.create({
      smooth: 1,
      effects: true,
      normalizeScroll: true,
      ignoreMobileResize: true
    })

    /* @ts-ignore */
    setSmoother(smoother)

    return () => {
      smoother.kill()
    }
  }, [])

  useEffect(() => {
    const windowWidth = window.innerWidth

    if (windowWidth < 768) return

    if (isOpen || modalIsOpen) {
      smoother && smoother.paused(true)
    } else {
      smoother && smoother.paused(false)
    }
  }, [isOpen, smoother, modalIsOpen])

  return (
    <SmootherContext.Provider value={smoother}>
      <div id="smooth-wrapper">
        <div id="smooth-content">{children}</div>
      </div>
    </SmootherContext.Provider>
  )
}
