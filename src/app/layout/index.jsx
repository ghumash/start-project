import { Navbar, Footer } from '@/widgets'
import { Content } from '@/widgets/Content'
import styles from './style.module.css'

export const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Content />
      <Footer />
    </div>
  )
}
