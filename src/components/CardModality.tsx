import {
  ImageField,
  KeyTextField,
  LinkField,
  RichTextField
} from '@prismicio/client'
import { PrismicNextImage, PrismicNextLink } from '@prismicio/next'
import { PrismicRichText } from '@prismicio/react'
import React from 'react'
import { ButtonIcon } from './ButtonIcon'
import { useLocale } from 'next-intl'

interface CardModalityProps {
  icon: ImageField<never>
  color: 'yellow' | 'blue' | 'orange'
  title: KeyTextField
  subtitle: KeyTextField
  text: RichTextField
  link: LinkField
}

export const CardModality = (props: CardModalityProps) => {
  const locale = useLocale()

  return (
    <div className={Wrapper}>
      <div className={Container}>
        <div
          className={`${IconBox} ${
            props.color === 'yellow'
              ? 'after:bg-yellow-500'
              : props.color === 'blue'
              ? 'after:bg-blue-500'
              : 'after:bg-orange-500'
          }`}
        >
          <PrismicNextImage
            className={Icon}
            field={props.icon}
            fallbackAlt=""
          />
        </div>

        <div
          className={`${TitleBox} ${
            props.color === 'yellow'
              ? 'text-yellow-500'
              : props.color === 'blue'
              ? 'text-blue-500'
              : 'text-orange-500'
          }`}
        >
          {props.title}
        </div>

        <div className={SubtitleBox}>{props.subtitle}</div>

        <div className={TextBox}>
          <PrismicRichText field={props.text} />
        </div>

        <PrismicNextLink className={LinkBox} field={props.link}>
          {locale === 'en-gb' ? 'Learn more' : 'Saiba mais'}
          <ButtonIcon color={props.color} />
        </PrismicNextLink>
      </div>
    </div>
  )
}

const Wrapper = `
  bg-white
  rounded-lg
  border
  border-gray-25
  drop-shadow-base
`
const Container = `
  h-full
  min-h-[370px]
  pt-8
  pb-4
  px-8
  flex
  flex-col
  items-center
  justify-between
`
const IconBox = `
  flex
  items-center
  justify-center
  relative
  after:content-['']
  after:absolute
  after:top-1/2
  after:left-1/2
  after:transform
  after:-translate-x-1/2
  after:-translate-y-1/2
  after:w-16
  after:h-16
  after:aspect-[1/1]
  after:rounded-full
  after:bg-opacity-30
`
const Icon = `
  w-20
  h-20
  relative
  z-10
`
const TitleBox = `
  font-serif
  text-xl
  text-center
  relative
  z-10
`
const SubtitleBox = `
  text-center
  font-[600]
  relative
  z-10
`
const TextBox = `
  py-4
`
const LinkBox = `
  w-full
  py-2
  pr-1
  pl-8
  bg-gray-25
  rounded-full
  grid
  grid-cols-[1fr_auto]
  items-center
  justify-between
  font-bold
  text-xs
  text-center
`
