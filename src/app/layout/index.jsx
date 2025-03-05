import { Navbar, Footer } from '@/widgets'
import { Content } from '@/widgets/Content'
import styles from './style.module.css'
import { ScrollButton } from '@/widgets/ScrollButton'

export const Layout = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Content />
      <ScrollButton />
      <Footer />
    </div>
  )
}
