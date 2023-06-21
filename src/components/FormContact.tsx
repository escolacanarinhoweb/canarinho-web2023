'use client'

import { useRef, useState } from 'react'
import { IconFormEmail } from '@/svgs/IconFormEmail'
import { IconFormName } from '@/svgs/IconFormName'
import { useLocale } from 'next-intl'
import emailjs from '@emailjs/browser'
import ButtonTextLineLeft from '@/svgs/ButtonTextLineLeft'
import ButtonTextLineRight from '@/svgs/ButtonTextLineRight'

const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID || null
const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID || null
const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || null

export const FormContact = () => {
  const locale = useLocale()
  const formRef = useRef<HTMLFormElement>(null)

  const [nameFocus, setNameFocus] = useState(false)
  const [emailFocus, setEmailFocus] = useState(false)
  const [subjectFocus, setSubjectFocus] = useState(false)
  const [messageFocus, setMessageFocus] = useState(false)
  const [nameInput, setNameInput] = useState('')
  const [emailInput, setEmailInput] = useState('')
  const [subjectInput, setSubjectInput] = useState('')
  const [messageInput, setMessageInput] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [body, setBody] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = formRef.current

    if (!form || !SERVICE_ID || !TEMPLATE_ID || !USER_ID) return

    if (nameInput === '' || emailInput === '' || messageInput === '') {
      setErrorMessage('Preencha todos os campos')
      setTimeout(() => {
        setErrorMessage('')
      }, 3000)
      return
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form, USER_ID).then(
      (result) => {
        console.log(result.text)
        handleSucess()
      },
      (error) => {
        console.log(error.text)
      }
    )
  }

  const handleFocus = (field: string) => {
    if (field === 'name') setNameFocus(true)
    if (field === 'email') setEmailFocus(true)
    if (field === 'subject') setSubjectFocus(true)
    if (field === 'message') setMessageFocus(true)
  }

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: string
  ) => {
    if (field === 'name') {
      if (e.target.value === '') {
        setNameFocus(false)
      }
    }

    if (field === 'email') {
      if (e.target.value === '') {
        setEmailFocus(false)
      }
    }

    if (field === 'subject') {
      if (e.target.value === '') {
        setSubjectFocus(false)
      }
    }

    if (field === 'message') {
      if (e.target.value === '') {
        setMessageFocus(false)
      }
    }
  }

  const handleSucess = () => {
    setSuccessMessage('Mensagem enviada com sucesso!')
    setTimeout(() => {
      setSuccessMessage('')
    }, 3000)

    setNameInput('')
    setEmailInput('')
    setSubjectInput('')
    setMessageInput('')

    setNameFocus(false)
    setEmailFocus(false)
    setSubjectFocus(false)
    setMessageFocus(false)
  }

  return (
    <div className={Wrapper}>
      <div className="text-red-500 text-center mb-2">
        {errorMessage !== '' && <p>{errorMessage}</p>}
      </div>

      <div className="text-green-500  text-center mb-2">
        {successMessage !== '' && <p>{successMessage}</p>}
      </div>

      <form className={FormBox} onSubmit={handleSend} ref={formRef}>
        <div className={Row1}>
          <div className={GroupField}>
            <div
              className={`${InputIconBox} ${
                nameFocus ? 'border-blue-500' : 'border-yellow-900'
              }`}
            >
              <IconFormName
                className={`${InputIcon} ${
                  nameFocus ? 'text-blue-500' : 'text-yellow-900'
                }`}
              />
            </div>
            <label
              className={`${LabelInputBox} ${
                nameFocus
                  ? 'text-blue-500 text-xs translate-y-[-16px]'
                  : 'text-yellow-900  translate-y-[0]'
              }`}
            >
              {locale === 'en-gb' ? 'Name' : 'Nome'}
            </label>
            <input
              className={InputBox}
              type="text"
              onFocus={() => handleFocus('name')}
              onBlur={(e) => handleBlur(e, 'name')}
              name="from_name"
              value={nameInput}
              onChange={(e) => {
                setErrorMessage('')
                setNameInput(e.target.value)
              }}
            />
          </div>

          <div className={GroupField}>
            <div
              className={`${InputIconBox} ${
                emailFocus ? 'border-blue-500' : 'border-yellow-900'
              }`}
            >
              <IconFormEmail
                className={`${InputIcon} ${
                  emailFocus ? 'text-blue-500' : 'text-yellow-900'
                }`}
              />
            </div>
            <label
              className={`${LabelInputBox} ${
                emailFocus
                  ? 'text-blue-500 text-xs translate-y-[-16px]'
                  : 'text-yellow-900  translate-y-[0]'
              }`}
            >
              {locale === 'en-gb' ? 'Email' : 'E-mail'}
            </label>
            <input
              className={InputBox}
              type="text"
              value={emailInput}
              onFocus={() => handleFocus('email')}
              onBlur={(e) => handleBlur(e, 'email')}
              name="from_email"
              onChange={(e) => {
                setErrorMessage('')
                setEmailInput(e.target.value)
              }}
            />
          </div>
        </div>

        <div className={Row2}>
          <div className={GroupField}>
            <div
              className={`${InputIconBox} ${
                subjectFocus ? 'border-blue-500' : 'border-yellow-900'
              }`}
            >
              <IconFormEmail
                className={`${InputIcon} ${
                  subjectFocus ? 'text-blue-500' : 'text-yellow-900'
                }`}
              />
            </div>
            <label
              className={`${LabelInputBox} ${
                subjectFocus
                  ? 'text-blue-500 text-xs translate-y-[-16px]'
                  : 'text-yellow-900  translate-y-[0]'
              }`}
            >
              {locale === 'en-gb' ? 'Subject' : 'Assunto'}
            </label>
            <input
              className={InputBox}
              type="text"
              value={subjectInput}
              onFocus={() => handleFocus('subject')}
              onBlur={(e) => handleBlur(e, 'subject')}
              name="from_subject"
              onChange={(e) => {
                setErrorMessage('')
                setSubjectInput(e.target.value)
              }}
            />
          </div>
        </div>

        <div className={Row2}>
          <div className={TextAreaBox}>
            <label
              className={`${LabelTextareaBox} ${
                messageFocus
                  ? 'text-blue-500 text-xs translate-y-[-2px]'
                  : 'text-yellow-900  translate-y-[0]'
              }`}
            >
              {locale === 'en-gb' ? 'Message' : 'Mensagem'}
            </label>
            <textarea
              className={TextArea}
              value={messageInput}
              onFocus={() => handleFocus('message')}
              onBlur={(e) => handleBlur(e, 'message')}
              name="message"
              onChange={(e) => {
                setErrorMessage('')
                setMessageInput(e.target.value)
              }}
            ></textarea>
          </div>
        </div>

        <div className={Row3}>
          <div className={ButtonBox}>
            <ButtonTextLineLeft className={`${LineLeft}`} />
            <input type="submit" value="Enviar" className={ButtonBoxText} />
            <ButtonTextLineRight className={`${LineRight}`} />
          </div>
        </div>
      </form>
    </div>
  )
}

const Wrapper = `
`
const FormBox = ``
const Row1 = `
  grid
  lg:grid-cols-2
  gap-4
`
const Row2 = `
  mt-4
`
const Row3 = `
  mt-4
  flex
  justify-center
`
const GroupField = `
  relative
`
const InputIconBox = `
  w-10
  h-10
  border
  border-solid
  border-yellow-900
  rounded-full
  text-yellow-900
  absolute
  top-1/2
  left-4
  transform
  -translate-y-1/2
  pointer-events-none
`
const InputIcon = ``
const LabelInputBox = `
  w-full
  h-full
  pl-16
  flex
  items-center
  absolute
  pointer-events-none
  transition-all
  duration-300
`
const InputBox = `
  w-full
  h-16
  pl-16
  bg-yellowDark-500
  focus:outline-none
  focus:ring-2
  focus:ring-yellow-300
  focus:border-transparent
  rounded
`
const LabelTextareaBox = `
  absolute
  pl-4
  pt-2
  transition-all
  duration-300
`
const TextAreaBox = ``
const TextArea = `
  w-full
  h-40
  pl-4
  pt-8
  bg-yellowDark-500
  focus:outline-none
  focus:ring-2
  focus:ring-yellow-300
  focus:border-transparent
  rounded
`
const ButtonBox = `
  h-12
  inline-flex
  text-white
  font-serif
  rounded-full
  shadow-lg
  transition
  duration-300
  hover:scale-110
  transition-all
  duration-200
  cursor-pointer
  bg-blue-500
`

const LineLeft = `
  w-auto
  h-[32px]
  relative
  top-[4px]
  left-[4px]
  opacity-90
`
const ButtonBoxText = `
  px-8
  cursor-pointer
`
const LineRight = `
  w-auto
  h-[32px]
  relative
  bottom-[-12px]
  right-[4px]
  opacity-90
`
