import { useEffect, useState, useRef } from 'react'
import { NavSideDocument } from '../../prismicio-types'
import { PrismicNextLink } from '@prismicio/next'
import { gsap } from 'gsap'
import { useMenu } from '@/hooks/UseMenu'

export interface MenuSideProps extends NavSideDocument {}

export const MenuSide = (props: MenuSideProps) => {
  const { sideMenuInitialIsOpen, setSideMenuInitialIsOpen } = useMenu()
  const wrapperRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [wrapperHeight, setWrapperHeight] = useState(0)
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    setIsOpen(sideMenuInitialIsOpen!)
  }, [sideMenuInitialIsOpen])

  useEffect(() => {
    const wrapper = wrapperRef.current

    if (!wrapper) return

    setWrapperHeight(wrapper.offsetHeight)
  }, [])

  useEffect(() => {
    // if scrolling isopen is false

    const handleScroll = () => {
      if (window.scrollY < 50) {
        if (!sideMenuInitialIsOpen) return
        setIsOpen(true)
      } else if (window.scrollY > 50) {
        setIsOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [sideMenuInitialIsOpen])

  useEffect(() => {
    const wrapper = wrapperRef.current
    const container = containerRef.current

    if (!wrapper || !container) return

    const tl = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: 'power2.out'
      }
    })

    if (!isOpen) {
      tl.to(wrapper, { height: 50 })
      tl.to(container, { paddingTop: 12 }, '-=0.5')
      tl.to(wrapper, { width: 140 })
      tl.to(container, { paddingLeft: 12 }, '-=0.5')
      tl.to(wrapper, { x: 16 })
    } else if (isOpen) {
      tl.to(wrapper, { x: 0 })
      tl.to(wrapper, { width: 260 })
      tl.to(container, { paddingLeft: 32 }, '-=0.5')
      tl.to(container, { paddingTop: 32 })
      tl.to(wrapper, { height: wrapperHeight }, '-=0.5')
    }

    return () => {
      tl.kill()
    }
  }, [isOpen, wrapperHeight])

  useEffect(() => {
    const blogLinks = document.querySelectorAll('a[href="https://#blog"]')

    if (!blogLinks) return

    blogLinks.forEach((link) => {
      const newLinkContact = document.createElement('a')
      newLinkContact.innerHTML = link.innerHTML

      newLinkContact.style.cursor = 'pointer'
      newLinkContact.setAttribute('href', '/blog')
      newLinkContact.classList.add('link-blog')
      link.parentNode?.replaceChild(newLinkContact, link)
    })
  }, [])

  return (
    <div className={Wrapper} ref={wrapperRef}>
      <div className={ContainerBox} ref={containerRef}>
        <header className={HeaderBox}>
          <div
            className={`${HeaderIconBox} ${
              !isOpen ? 'bg-yellow-500' : 'bg-blue-500'
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className={`${HeaderIcon} ${!isOpen ? 'rotate-180' : 'rotate-0'}`}
              width="12"
              height="20"
              viewBox="0 0 12 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 10.813C10.5842 10.9795 10.3873 11.1115 10.1704 11.2016C9.95344 11.2917 9.72088 11.3381 9.486 11.3381C9.25112 11.3381 9.01855 11.2917 8.80164 11.2016C8.58473 11.1115 8.38775 10.9795 8.222 10.813L0.521997 3.06905C0.187533 2.73017 0 2.27319 0 1.79705C0 1.32091 0.187533 0.86393 0.521997 0.525048C0.687749 0.358632 0.884732 0.226584 1.10164 0.136483C1.31855 0.0463817 1.55112 0 1.786 0C2.02088 0 2.25344 0.0463817 2.47035 0.136483C2.68726 0.226584 2.88425 0.358632 3.05 0.525048L10.746 8.26905C11.442 8.96905 11.442 10.113 10.75 10.813Z"
                fill="#FAFAFA"
              />
              <path
                d="M10.75 8.30094C11.0845 8.63982 11.272 9.0968 11.272 9.57294C11.272 10.0491 11.0845 10.5061 10.75 10.8449L3.05 18.5889C2.88425 18.7554 2.68726 18.8874 2.47035 18.9775C2.25344 19.0676 2.02088 19.114 1.786 19.114C1.55112 19.114 1.31855 19.0676 1.10164 18.9775C0.884732 18.8874 0.687749 18.7554 0.521997 18.5889C0.187533 18.2501 0 17.7931 0 17.3169C0 16.8408 0.187533 16.3838 0.521997 16.0449L8.218 8.30094C8.38414 8.13449 8.58148 8.00244 8.79872 7.91235C9.01595 7.82225 9.24882 7.77588 9.484 7.77588C9.71917 7.77588 9.95204 7.82225 10.1693 7.91235C10.3865 8.00244 10.5839 8.13449 10.75 8.30094Z"
                fill="#FAFAFA"
              />
            </svg>
          </div>
          <div
            className={`${TitleBox} ${
              !isOpen ? 'text-yellow-600' : 'text-blue-500'
            }`}
          >
            {props.data.title}
          </div>
        </header>

        <div className={BodyBox}>
          {props.data.slices.map((item, index) => (
            <ul className={ListBox} key={index}>
              {item.items.map((item, index) => (
                <li className={ItemBox} key={item.name}>
                  <PrismicNextLink className={LinkBox} field={item.link}>
                    {item.name}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}

const Wrapper = `
  w-[260px]
  h-auto
  fixed
  top-1/2
  transform
  -translate-y-1/2
  right-4
  z-50
  overflow-hidden
  bg-white
  rounded-xl
  shadow-xl
`
const ContainerBox = `
  relative
  py-8
  px-8
`
const HeaderBox = `
  mb-4
`
const HeaderIconBox = `
  absolute
  top-0
  right-0
  py-3
  px-3
  rounded-bl-xl
  rounded-tr-xl
  cursor-pointer
`
const HeaderIcon = `
  w-3
  h-3
  transition-transform
  duration-300
`
const TitleBox = `
  font-serif
  text-lg
`
const BodyBox = `
`
const ListBox = `
  list-disc
  pl-4
  flex
  flex-col
  gap-1
`
const ItemBox = ``
const LinkBox = `
  hover:text-blue-500
`
