import React from 'react'
import { NavSideDocument } from '../../prismicio-types'
import { PrismicNextLink } from '@prismicio/next'

export interface MenuSideProps extends NavSideDocument {}

export const MenuSide = (props: MenuSideProps) => {
  return (
    <div className={Wrapper}>
      <div className={ContainerBox}>
        <header className={HeaderBox}>
          <div className={TitleBox}>{props.data.title}</div>
        </header>

        <div className={BodyBox}>
          {props.data.slices.map((item, index) => (
            <div className={ListBox} key={index}>
              {item.items.map((item, index) => (
                <div className={ItemBox} key={item.name}>
                  <PrismicNextLink className={LinkBox} field={item.link}>
                    {item.name}
                  </PrismicNextLink>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Wrapper = `
  w-auto
  h-auto
  fixed
  top-1/2
  transform
  -translate-y-1/2
  right-0
  z-50
  bg-white
  hidden
`
const ContainerBox = `
  px-4
`
const HeaderBox = ``
const TitleBox = `
  font-serif
`
const BodyBox = `
  py-8
`
const ListBox = ``
const ItemBox = ``
const LinkBox = ``
