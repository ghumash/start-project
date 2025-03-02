import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { setupStore } from './app/store'
import Layout from './app/layout'
import './app/styles/index.css'

const store = setupStore()
const rootElement = document.getElementById('root')

if (rootElement) {
  createRoot(rootElement).render(
    <Provider store={store}>
      <Layout />
    </Provider>,
  )
} else {
  console.error('Элемент root не найден')
}
