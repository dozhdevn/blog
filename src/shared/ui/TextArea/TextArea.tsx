import React from 'react'
import cn from 'classnames'

import styles from './TextArea.module.scss'

type HTMLTextAreaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>

interface TextAreaProps extends HTMLTextAreaProps {
  onChange?: (value: string) => void
  value?: string
}

const TextAreaBase = (props: TextAreaProps, ref: React.ForwardedRef<HTMLTextAreaElement>) => {
  const {
    value, cols = 40, rows = 10, onChange, className, ...otherProps
  } = props

  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(event.target.value)
  }

  return (
    <textarea
      {...otherProps}
      value={value}
      cols={cols}
      rows={rows}
      onChange={onChangeHandler}
      className={cn(styles.textarea, className)}
      ref={ref}
    />
  )
}

const TextArea = React.forwardRef(TextAreaBase)

export default TextArea
