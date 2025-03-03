import { Counter } from '@/entities/Counter'
import styles from './style.module.css'

const CounterPage = () => {
  return (
    <>
      <h1 className={styles.title}>Counter Page</h1>
      <Counter />
    </>
  )
}

export default CounterPage
