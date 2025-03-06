import styles from './style.module.css'
import clsx from 'clsx'

export const DailyWeatherForecast = ({
  units,
  forecastData,
  formatTime,
  handleClickDay,
  isLoading,
  currentDay,
}) => {
  if (isLoading) return null

  const fiveDays = forecastData?.list?.filter(
    (i) =>
      new Date(i.dt_txt).getHours() ===
      new Date(forecastData.list[0].dt_txt).getHours(),
  )

  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]

  return fiveDays?.map((day, i) => {
    const { dt, main, weather, dt_txt } = day
    const time = formatTime(dt)
    const temp = Math.round(main.temp)
    const unitSymbol = units === 'metric' ? 'C' : 'F'
    const weekDay = weekDays[new Date(dt_txt).getDay()]
    const isActive = dt === currentDay?.dt

    return (
      <div
        key={dt}
        className={clsx(styles.daily, styles[`div${i + 8}`], {
          [styles.activeDay]: isActive,
        })}
        onClick={() => handleClickDay(day)}
      >
        <div className={styles.time}>
          {weekDay} {time}
        </div>
        <div className={styles.temp}>
          {temp}°{unitSymbol}
        </div>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
            alt={weather[0].description}
          />
        </div>
      </div>
    )
  })
}
