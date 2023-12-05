import cn from 'classnames'
import React, { useState } from 'react'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'

import styles from './AddCommentForm.module.scss'

interface Props {
  onSendComment: (text: string) => void
  className?: string
}

const AddCommentForm: React.FC<Props> = ({ onSendComment, className }) => {
  const [text, setText] = useState('')

  const onCommentTextChange = (value: string) => {
    setText(value)
  }

  const onSendHandler = () => {
    onSendComment(text)
    setText('')
  }

  return (
    <div className={cn(styles.root, className)}>
      <Input onChange={onCommentTextChange} value={text} placeholder='Написать комментарий...' />
      <Button onClick={onSendHandler}>Отправить</Button>
    </div>
  )
}

export default AddCommentForm
