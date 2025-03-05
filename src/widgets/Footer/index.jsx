import styles from './style.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socialLinks}>
        <li>
          <a href="https://github.com/ghumash" target="_blank">GitHub</a>
        </li>
      </ul>
    </footer>
  )
}
