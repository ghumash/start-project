import React from 'react'
import styles from './style.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()}. All rights reserved.</p>
      <ul className={styles.socialLinks}>
        <li>
          <a href="https://github.com/ghumash" target="_blank">GitHub</a>
        </li>
      </ul>
    </footer>
  )
}
