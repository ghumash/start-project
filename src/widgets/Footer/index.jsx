import React from 'react'
import styles from './style.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
      <ul className={styles.socialLinks}>
        <li>
          <a href="#">Facebook</a>
        </li>
        <li>
          <a href="#">Twitter</a>
        </li>
        <li>
          <a href="#">LinkedIn</a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer
