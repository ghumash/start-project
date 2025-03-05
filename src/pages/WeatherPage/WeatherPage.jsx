import styles from './style.module.css'
import { Weather } from '@/entities/Weather'

const WeatherPage = () => {
  return (
    <>
      <h1 className={styles.title}>Weather Page</h1>
      <Weather />
    </>
  )
}

export default WeatherPage
