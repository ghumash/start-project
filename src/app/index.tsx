import { FC, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from '@/widgets'
import { routes } from '@/app/routes'

const App: FC = () => {
  return (
    <Router>
      <Navbar />
      <div className={'px-16 py-4 bg-light-bg-static dark:bg-dark-bg-static'}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={<route.component />} />
            ))}
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </Router>
  )
}

export default App
