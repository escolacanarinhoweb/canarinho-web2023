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

export interface ScrollSmootherOptions {
  smoother?: ScrollSmoother
  setSmoother?: (smoother: ScrollSmoother) => void
}

export const SmootherContext = createContext({} as ScrollSmootherOptions)

export const SmootherProvider = ({
  children,
  ...props
}: {
  children: React.ReactNode
}) => {
  const [smoother, setSmoother] = useState<any | null>(null)
  const { isOpen } = useMenu()
  const { modalIsOpen } = useModal()

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
    const html = document.querySelector('html') as HTMLHtmlElement
    const body = document.querySelector('body') as HTMLBodyElement

    if (windowWidth < 768) {
      console.log(`isOpen: ${isOpen}`)

      if (isOpen || modalIsOpen) {
        html.style.overflow = 'hidden'
        body.style.overflow = 'hidden'
      } else {
        html.style.overflow = 'auto'
        body.style.overflow = 'auto'
      }

      return
    }

    if (isOpen || modalIsOpen) {
      smoother && smoother.paused(true)
    } else {
      smoother && smoother.paused(false)
    }
  }, [isOpen, smoother, modalIsOpen])

  useEffect(() => {
    const linksContact = document.querySelectorAll('a[href="https://#contato"]')

    if (!linksContact) return

    linksContact.forEach((link) => {
      const newLinkContact = document.createElement('span')
      newLinkContact.innerHTML = link.innerHTML

      newLinkContact.style.cursor = 'pointer'
      newLinkContact.classList.add('link-contact')
      link.parentNode?.replaceChild(newLinkContact, link)
    })

    return () => {
      linksContact.forEach((link) => {
        const newLinkContact = document.createElement('a')
        newLinkContact.innerHTML = link.innerHTML

        newLinkContact.href = 'https://#contato'
        newLinkContact.classList.add('link-contact')
        link.parentNode?.replaceChild(newLinkContact, link)
      })
    }
  }, [smoother])

  useEffect(() => {
    const contactLinks = document.querySelectorAll('.link-contact')
    const elementScroll = document.getElementById('contato')?.offsetTop
    const numberScroll = elementScroll && elementScroll - 100

    if (!contactLinks) return

    contactLinks.forEach((link) => {
      link.addEventListener('click', () => {
        smoother && smoother.scrollTo(numberScroll, true)
      })
    })
  }, [smoother])

  return (
    <SmootherContext.Provider value={smoother}>
      <div id="smooth-wrapper">
        <div id="smooth-content">{children}</div>
      </div>
    </SmootherContext.Provider>
  )
}
