'use client'

import Rive from '@rive-app/react-canvas'

export const RiveSpinning = () => {
  return (
    <div className={Wrapper}>
      <Rive src="/rives/spinning.riv" className={RiveBox} />
    </div>
  )
}

const Wrapper = `
  w-full
  h-full
  aspect-square
  drop-shadow-lg
`
const RiveBox = `
  w-full
  h-full
  filter
`
