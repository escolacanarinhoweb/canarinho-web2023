'use client'

import { SmootherProvider } from '@/contexts/SmootherContext'
import { TemplateHeader, TemplateHeaderProps } from './TemplateHeader'
import { TemplateFooter, TemplateFooterProps } from './TemplateFooter'
import { BlogDocument } from '../../prismicio-types'
import { BGPageTop } from '@/svgs/BGPageTop'
import { CallText } from './CallText'
import { ButtonText } from './ButtonText'
import Link from 'next-intl/link'
import { useLocale } from 'next-intl'

interface TemplateBlogProps {
  header: TemplateHeaderProps
  posts: BlogDocument[]
  footer: TemplateFooterProps
}

export const TemplateBlog = (props: TemplateBlogProps) => {
  const locale = useLocale()

  return (
    <div className={Wrapper}>
      <TemplateHeader {...props.header} />
      <main className={Main}>
        <SmootherProvider>
          <div className={Page}>
            <div className={PageBgTopBox}>
              <BGPageTop className={PageBgTop} />
            </div>

            <h1 className={TitleBlog}>Blog Canarinho</h1>

            <div className={Posts}>
              {props.posts.map((post) => (
                <div className={PageContainer} key={post.data.title}>
                  <header className={PageHeader}>
                    <Link
                      className={PageTitle}
                      href={`blog/${post.uid}`}
                      locale={locale}
                    >
                      {post.data.title && <h2>{post.data.title}</h2>}
                    </Link>
                  </header>

                  <div className={PageBody}>
                    <div className={PageContent}>
                      <div className={PageText}>
                        {post.data.text && (
                          <CallText text={post.data.text} />
                          // <PrismicRichText field={post.data.text} />
                        )}
                      </div>

                      <Link
                        className={PageButton}
                        href={`blog/${post.uid}`}
                        locale={locale}
                      >
                        <ButtonText text="Leia mais" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={PageBgBottomBox}>
              <svg
                viewBox="0 0 1920 139"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                className={PageBgBottom}
              >
                <path
                  d="M1.21081e-05 0.499832L1.21518e-05 -0.000167852L1920 0L1920 0.5C1920 1 1490.2 139 960 139C429.8 139 1.20643e-05 0.999832 1.21081e-05 0.499832Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>

          <TemplateFooter {...props.footer} />
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
const Posts = ``
const Page = `
  bg-gray-25
  pt-48
  lg:pt-[300px]
`
const PageBgTopBox = `
w-full
absolute
top-0
left-0
`
const PageBgTop = `
  w-full
  h-[200px]
  lg:h-[300px]
`
const TitleBlog = `
  text-4xl
  lg:text-6xl
  font-serif
  text-center
  text-blue-500
  mb-12
`
const PageBgBottomBox = `
h-[200px]
bg-yellow-400
bg-[url('/images/textureYellow.png')]
bg-repeat
bg-[length:400px_400px]
text-gray-25
`
const PageBgBottom = ``
const PageContainer = `
  mb-12
  p-6
  lg:p-12
  relative
  border
  max-w-[680px]
  mx-auto
  rounded-3xl
`
const PageHeader = ``
const PageTitle = `
  font-serif
  text-blue-500
  text-3xl
  hover:text-yellow-600
`
const PageBody = `
`
const PageContent = `
  pt-8
  flex
  flex-col
  items-start
`
const PageText = `
textLong
`
const PageButton = `
  mt-8
`
const PageSideBar = ``
const PageSlices = ``
