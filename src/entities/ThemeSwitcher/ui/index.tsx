import { FC } from 'react'
import { Switch } from '@headlessui/react'
import clsx from 'clsx'
import { useTheme } from '@/shared/hooks'

export const ThemeSwitcher: FC = () => {
  const { toggleTheme } = useTheme()

  const onChange = () => toggleTheme()

  return (
    <div className="flex items-center">
      <Switch
        onChange={onChange}
        className={clsx('dark:bg-light-bg-static', 'bg-dark-bg-static', 'h-4 w-4 transition-all')}
      ></Switch>
    </div>
  )
}
