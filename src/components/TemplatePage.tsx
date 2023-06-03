'use client'

import { SmootherProvider } from '@/contexts/SmootherContext'
import { TemplateHeader, TemplateHeaderProps } from './TemplateHeader'
import { KeyTextField } from '@prismicio/client'

interface TemplatePageProps {
  header: TemplateHeaderProps
}

export const TemplatePage = (props: TemplatePageProps) => {
  return (
    <div className={Wrapper}>
      <TemplateHeader {...props.header} />
      <main className={Main}>
        <SmootherProvider>
          <h1 className="h-[200vh]">olar</h1>
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
