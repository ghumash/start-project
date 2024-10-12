import { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { routes } from '@/app/routes'
import { ThemeSwitcher } from '@/entities/ThemeSwitcher'
import clsx from 'clsx'

const Navbar: FC = () => {
  const location = useLocation()

  return (
    <nav className={`bg-light-bg-static dark:bg-dark-bg-static px-16`}>
      <div className="container mx-auto flex justify-between items-center">
        <div
          className={clsx(
            'text-light-text-static hover:text-light-text-hover',
            'dark:text-dark-text-static dark:hover:text-dark-text-hover',
            'font-bold text-l transition-all',
          )}
        >
          <Link to="/">App</Link>
        </div>
        <div className="flex">
          {routes.map(
            ({ path, label, showInMenu }) =>
              showInMenu && (
                <Link
                  key={path}
                  to={path}
                  className={clsx(
                    'hover:text-light-text-hover dark:hover:text-dark-text-hover',
                    location.pathname === path
                      ? 'text-light-text-hover dark:text-dark-text-hover'
                      : 'text-light-text-static dark:text-dark-text-static',
                    'text-xs transition-all leading-0 py-3.5 px-4',
                  )}
                >
                  {label}
                </Link>
              ),
          )}
          <ThemeSwitcher />
        </div>
      </div>
      <hr className={'bg-light-bg-static dark:bg-dark-bg-static'} />
    </nav>
  )
}

export default Navbar
