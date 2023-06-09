'use client'

import { useRive, useStateMachineInput } from '@rive-app/react-canvas'
import { useEffect, useState } from 'react'

export const RiveLogoScrollOn = () => {
  const [srcRive, setSrcRive] = useState('/rives/canarinhotag.riv')
  const [stateMachine, setStateMachine] = useState('ScrollOn')

  const { rive, RiveComponent: RiveComponentTouch } = useRive({
    src: srcRive,
    autoplay: true,
    stateMachines: stateMachine
  })

  return (
    <div className={Wrapper}>
      <RiveComponentTouch className={RiveBox} />
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
