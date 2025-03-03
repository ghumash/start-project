import { Link } from 'react-router-dom'
import styles from './style.module.css'
import { Button } from '@/shared/ui'

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.text}>Page not found</p>
      <Button>
        <Link to="/">Go Home</Link>
      </Button>
    </div>
  )
}

export default NotFoundPage
