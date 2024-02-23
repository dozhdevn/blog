import React, { useState } from 'react'
import { Button } from 'shared/ui/Button'
import { Input } from 'shared/ui/Input'
import { Flex } from 'shared/ui/Flex'

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
    <Flex className={className}>
      <Input onChange={onCommentTextChange} value={text} placeholder='Написать комментарий...' />
      <Button onClick={onSendHandler}>Отправить</Button>
    </Flex>
  )
}

export default AddCommentForm
