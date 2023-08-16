/* eslint-disable i18next/no-literal-string */
import { Input } from 'components/Input'
import { Modal } from 'components/Modal'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import SearchIcon from 'assets/icons/svg/search.svg'

function MainPage() {
  const { t } = useTranslation('main')
  const [open, setOpen] = useState(false)

  const [value, setValue] = useState('')

  const openModalHandler = () => {
    setOpen((prev) => !prev)
  }

  const onChange = (value: string) => {
    setValue(value)
  }

  return (
    <div>
      {t('Главная страница')}
      <button onClick={openModalHandler}>open</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
          <Input placeholder='Login' onChange={onChange} value={value} label='Имя' startIcon={SearchIcon} />
          <Input placeholder='Password' />
        </div>
      </Modal>
    </div>
  )
}

export default MainPage
