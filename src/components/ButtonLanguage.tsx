import { IconFlagBR } from '@/svgs/IconFlagBR'
import { IconFlagGB } from '@/svgs/IconFlagGB'
import Link from 'next-intl/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { usePathname } from 'next-intl/client'
import { useLocale, useTranslations } from 'next-intl'

export const ButtonLanguage = () => {
  const [currentPath, setCurrentPath] = useState('')
  const [currentLocale, setCurrentLocale] = useState('')
  const [isOpened, setIsOpened] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  useEffect(() => {
    setCurrentPath(window.location.pathname)

    const htmlLang = document.querySelector('html')?.lang
    if (htmlLang) setCurrentLocale(htmlLang)
  }, [])

  const changeLanguage = (locale: 'pt-br' | 'en-gb') => {
    router.replace(`/${locale}${pathname}`)
  }

  return (
    <div
      className={Wrapper}
      onClick={() => {
        setIsOpened(!isOpened)
      }}
    >
      <div className={Active}>
        {currentLocale === 'pt-br' ? (
          <Image
            className={ActiveIcon}
            src="/images/IconFlagBR.png"
            width={400}
            height={400}
            alt="Bandeira do Brasil"
          />
        ) : (
          <Image
            className={ActiveIcon}
            src="/images/IconFlagGB.png"
            width={400}
            height={400}
            alt="Bandeira do Reino Unido"
          />
        )}
      </div>

      <div className={`${Option} ${isOpened ? 'scale-y-1' : 'scale-y-0'}`}>
        {currentLocale === 'pt-br' ? (
          <Image
            className={OptionIcon}
            src="/images/IconFlagGB.png"
            width={400}
            height={400}
            alt="Bandeira da inglaterra"
            onClick={() => changeLanguage('en-gb')}
          />
        ) : (
          <Image
            className={OptionIcon}
            src="/images/IconFlagBR.png"
            width={400}
            height={400}
            alt="Bandeira do Brasil"
            onClick={() => changeLanguage('pt-br')}
          />
        )}
      </div>
    </div>
  )
}

const Wrapper = `
  w-10
  lg:w-8
  h-10
  lg:h-8
  flex
  flex-col
  gap-2
  relative
`
const Active = `
  hover:scale-110
  transition-all
  duration-200
  cursor-pointer
  relative
  z-10
`
const ActiveIcon = ``
const Option = `
  w-10
  lg:w-8
  h-[90px]
  py-2
  flex
  items-end
  justify-center
  absolute
  top-0
  rounded-full
  bg-white
  origin-top
  transition-all
  duration-100
`
const OptionIcon = `
  w-8
  lg:w-6
  rounded-full
  overflow-hidden
  hover:scale-110
  cursor-pointer
`
