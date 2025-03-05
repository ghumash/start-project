import styles from './style.module.css'

const HomePage = () => {
  return (
    <>
      <h1 className={styles.title}>Home Page</h1>
      <div
        style={{ marginTop: '100vh', height: '100vh', background: 'lightblue' }}
      />
    </>
  )
}

export default HomePage
