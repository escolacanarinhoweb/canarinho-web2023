'use client'

import { RiveLogo } from './RiveLogo'
import Link from 'next-intl/link'
import { ButtonText } from './ButtonText'
import { MenuList, MenuListProps } from './MenuList'
import { PrismicLink } from '@prismicio/react'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { KeyTextField, LinkField, SliceZone } from '@prismicio/client'
import { MenuSubmenuSlice, SocialSlice } from '../../prismicio-types'
import { Container } from './Container'
import { ButtonLanguage } from './ButtonLanguage'
import IconOpenMenu from '@/svgs/IconOpenMenu'
import { use, useEffect, useState } from 'react'
import { ButtonTheme } from './ButtonTheme'
import { Logo } from './Logo'
import { useLocale } from 'next-intl'
import { MenuSide, MenuSideProps } from './MenuSide'

export interface TemplateHeaderProps {
  menu: {
    slices: SliceZone<MenuSubmenuSlice>
  }
  button_language: boolean
  social: SliceZone<SocialSlice>
  text_registration: KeyTextField
  link_pre_registration: LinkField | null
  text_responsible_space: KeyTextField
  link_responsible_space: LinkField | null
  menuSide: MenuSideProps
}

export const TemplateHeader = (props: TemplateHeaderProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const locale = useLocale()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    setIsLoaded(true)

    return () => {
      window.removeEventListener('scroll', handleScroll)

      setIsLoaded(false)
    }
  }, [])

  return (
    <header className={`${Wrapper}`}>
      <div
        className={`${ContainerBox} ${
          isScrolling ? 'bg-yellow-200 shadow-2xl' : ''
        }`}
      >
        <div
          className={`${LogoBox} ${
            isScrolling ? '-translate-y-4 lg:-translate-y-12' : 'translate-y-0'
          }`}
        >
          <Link href="/" locale={locale} className={LogoContentBox}>
            <Logo />
          </Link>
        </div>

        <div className={ButtonsMobileBox}>
          <div className={ButtonLanguageBox}>
            {props.button_language && <ButtonLanguage />}
          </div>

          <div
            className={ButtonMenuBox}
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          >
            <IconOpenMenu className={ButtonMenuIconBox} />
          </div>
        </div>

        <div
          className={`
          ${MenuBox}
          ${
            menuIsOpen
              ? 'translate-x-0 lg:translate-x-0'
              : 'translate-x-full lg:translate-x-0'
          }
          ${isScrolling ? 'py-4 lg:py-4' : '  py-4 lg:py-12'}
          ${isLoaded ? 'translate-y-0' : '-translate-y-full'}
          `}
        >
          <div
            className={`${MenuListBox} ${
              isScrolling ? 'text-blue-500' : 'lg:text-white'
            }`}
          >
            <MenuList slices={props.menu.slices} />
          </div>

          <div className={SettingsBox}>
            {/* <ButtonTheme /> */}
            {props.button_language && <ButtonLanguage />}
          </div>

          <div className={SocialBox}>
            {props.social.map((slice, index) => {
              return (
                <div className={SocialListBox} key={index}>
                  {slice.items.map((item, index) => {
                    return (
                      <PrismicLink
                        className={SocialItemBox}
                        key={index}
                        field={item.link}
                      >
                        <PrismicNextImage
                          className={SocialIconBox}
                          field={item.icon}
                          fallbackAlt=""
                        />
                      </PrismicLink>
                    )
                  })}
                </div>
              )
            })}
          </div>

          <div className={ButtonsBox}>
            <PrismicNextLink
              className={ButtonBox}
              field={props.link_pre_registration}
            >
              <ButtonText text={props.text_registration} />
            </PrismicNextLink>

            <PrismicNextLink
              className={ButtonBox}
              field={props.link_responsible_space}
            >
              <ButtonText text={props.text_responsible_space} color="orange" />
            </PrismicNextLink>
          </div>
        </div>
      </div>

      <MenuSide {...props.menuSide} />
    </header>
  )
}

const Wrapper = `
  headerTemplate
  w-full
  fixed
  z-[2000]
  lg:z-50
`
const ContainerBox = `
  ${Container}
  lg:grid
  lg:grid-cols-[auto_1fr]
  transition-all
  duration-500
`
const LogoBox = `
  w-[120px]
  sm:w-[160px]
  md:w-[200px]
  lg:w-[180px]
  xl:w-[240px]
  relative
  left-[-16px]
  lg:left-[-32px]
  transition-all
  duration-500
`
const LogoContentBox = `
  w-full
  flex
  absolute
  top-0
  left-0
`
const ButtonsMobileBox = `
  py-6
  flex
  items-center
  justify-end
  gap-4
  lg:hidden
`
const ButtonMenuBox = `
  relative
  z-10
  cursor-pointer
`
const ButtonMenuIconBox = `
  w-10
  h-10
  text-blue-500
`
const ButtonLanguageBox = ``
const MenuBox = `
  w-full
  min-h-[100vh]
  lg:min-h-[auto]
  max-w-[600px]
  lg:max-w-[none]
  flex
  flex-col
  lg:grid
  lg:grid-cols-[1fr_auto_auto_auto]
  gap-4
  xl:gap-8
  items-center
  justify-center
  fixed
  lg:relative
  top-0
  lg:top-auto
  right-0
  lg:right-auto
  bg-white
  lg:bg-transparent
  transition-all
  duration-500
  ease-in-out
`
const MenuListBox = `
  text-blue-500
`
const SettingsBox = `
  hidden
  lg:flex
  items-center
  gap-4
`
const SocialBox = `
`
const SocialListBox = `
  flex
  gap-2
  xl:gap-4
`
const SocialItemBox = `
  hover:scale-110
  transition-all
  duration-200
`
const SocialIconBox = `
  w-10
  lg:w-8
  h-10
  lg:h-8
`
const ButtonsBox = `
  flex
  flex-col
  lg:flex-row
  items-center
  gap-4
`
const ButtonBox = `
  flex
`
