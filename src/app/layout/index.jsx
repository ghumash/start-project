import { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from '@/widgets'
import { routes } from '@/app/routes'
import styles from './style.module.css'

const Layout = () => {
  return (
    <Router>
      <Navbar />
      <div className={styles.root}>
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

export default Layout
