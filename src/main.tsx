import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { setupStore } from './app/store'
import { ThemeProvider } from '@/app/providers'
import App from './app'
import './app/styles/index.scss'

const store = setupStore()

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>,
)
