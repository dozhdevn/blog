/* eslint-disable i18next/no-literal-string */
import { Modal } from 'components/Modal'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function MainPage() {
  const { t } = useTranslation('main')
  const [open, setOpen] = useState(false)

  const openModalHandler = () => {
    setOpen((prev) => !prev)
  }

  return (
    <div>
      {t('Главная страница')}
      <button onClick={openModalHandler}>open</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Harum quae dolorem consequatur voluptates autem veritatis laboriosam amet impedit natus molestias.
        </p>
      </Modal>
    </div>
  )
}

export default MainPage
