export interface IPost {
  id: number
  title: string
  body: string
}

/* __________ Theme */

export enum Theme {
  LIGHT = 'app_light_theme',
  DARK = 'app_dark_theme',
}

export interface UseThemeResult {
  toggleTheme: (saveAction?: (theme: Theme) => void) => void
  theme: Theme
}

/* __________ End Theme */

/* __________ Button */
export enum ButtonColor {
  INFO = 'bg-blue-500 hover:bg-blue-700',
  DANGER = 'bg-red-500 hover:bg-red-700',
  SUCCESS = 'bg-green-500 hover:bg-green-700',
}
/* __________ Button End */
