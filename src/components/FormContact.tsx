import React from 'react'
import { ButtonText } from './ButtonText'

export const FormContact = () => {
  return (
    <div className={Wrapper}>
      <form className={FormBox}>
        <div className={Row1}>
          <div className={GroupField}>
            <label className={LabelInputBox}>input1</label>
            <input className={InputBox} type="text" />
          </div>

          <div className={GroupField}>
            <label className={LabelInputBox}>input1</label>
            <input className={InputBox} type="text" />
          </div>
        </div>

        <div className={Row2}>
          <div className={TextAreaBox}>
            <label className={LabelTextareaBox}>textarea</label>
            <textarea className={TextArea}></textarea>
          </div>
        </div>

        <div className={Row3}>
          <div className={ButtonBox}>
            <ButtonText text="Enviar" />
          </div>
        </div>
      </form>
    </div>
  )
}

const Wrapper = ``
const FormBox = ``
const Row1 = ``
const Row2 = ``
const Row3 = ``
const GroupField = ``
const LabelInputBox = ``
const InputBox = ``
const LabelTextareaBox = ``
const TextAreaBox = ``
const TextArea = ``
const ButtonBox = ``
