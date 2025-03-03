import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { setupStore } from './app/store'
import { Layout } from './app/layout'
import './app/styles/index.css'

const store = setupStore()
const rootElement = document.getElementById('root')

createRoot(rootElement).render(
  <Provider store={store}>
    <Router>
      <Layout />
    </Router>
  </Provider>,
)
