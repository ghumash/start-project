import { Link, useLocation } from 'react-router-dom'
import { routes } from '@/app/routes'
import styles from './style.module.css'

export const Navbar = () => {
  const location = useLocation()

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">App</Link>
      </div>
      <div className={styles.navLinks}>
        {routes.map(
          ({ path, label, showInMenu }) =>
            showInMenu && (
              <Link
                key={path}
                to={path}
                className={`${styles.navLink} ${location.pathname === path ? styles.navLinkActive : ''}`}
              >
                {label}
              </Link>
            ),
        )}
      </div>
    </nav>
  )
}
