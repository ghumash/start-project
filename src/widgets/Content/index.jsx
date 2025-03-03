import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routes } from '@/app/routes'
import styles from './style.module.css'
import { Loader } from '@/shared/ui'

export const Content = () => {
  return (
    <main className={styles.content}>
      <Suspense fallback={<Loader type='fullPage' size='large' />}>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={<route.component />} />
          ))}
        </Routes>
      </Suspense>
    </main>
  )
}
