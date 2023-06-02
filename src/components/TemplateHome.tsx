'use client'

import { SmootherProvider } from '@/contexts/SmootherContext'
import { TemplateHeader, TemplateHeaderProps } from './TemplateHeader'

interface TemplateHomeProps extends TemplateHeaderProps {}

export const TemplateHome = (props: TemplateHomeProps) => {
  return (
    <div className={Wrapper}>
      <TemplateHeader {...props} />
      <main className={Main}>
        <SmootherProvider>
          <h1 className="h-[200vh]">teste</h1>
          teste
        </SmootherProvider>
      </main>
    </div>
  )
}

const Wrapper = `
  homePage
`
const Main = `

`
