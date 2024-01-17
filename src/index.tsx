import { createRoot } from 'react-dom/client'
import App from './app/App'

import 'shared/assets/scss/styles/index.scss'

import './shared/config/i18n/config'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(<App />)
