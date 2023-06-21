import { useEffect, useState, useRef } from 'react'
import { NavSideDocument } from '../../prismicio-types'
import { PrismicNextLink } from '@prismicio/next'
import { gsap } from 'gsap'
import { useMenu } from '@/hooks/UseMenu'

export interface MenuSideMobileProps extends NavSideDocument {}

export const MenuSideMobile = (props: MenuSideMobileProps) => {
  return (
    <div className={Wrapper}>
      <div className={ContainerBox}>
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
  w-full
  text-lg
`
const ContainerBox = `
  relative
  px-8
`
const BodyBox = `
`
const ListBox = `
  flex
  flex-col
  gap-1
`
const ItemBox = ``
const LinkBox = `
  hover:text-blue-500
`
