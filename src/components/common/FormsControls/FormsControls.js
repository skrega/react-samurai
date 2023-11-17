import React from "react"
import style from './FormsControls.modules.scss';

export const Textarea = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error
  return (
    <div className={style.formControl + " " + (hasError ? style.error : '')}>
      <textarea {...input} {...props}></textarea>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
      <div className={style.formControl + " " + (hasError ? style.error : '')}>
        <input {...input} {...props} />
        {hasError && <span>{meta.error}</span>}
      </div>
    )
  }