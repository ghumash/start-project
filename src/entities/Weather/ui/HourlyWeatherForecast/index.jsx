import styles from './style.module.css'
import clsx from 'clsx'

export const HourlyWeatherForecast = ({ units, currentDay, forecastData, formatTime, isLoading }) => {

  const currentDayDate = currentDay?.dt_txt ? new Date(currentDay.dt_txt).getDate() : null
  const currentDaysDate = forecastData?.list?.filter((i) => new Date(i.dt_txt).getDate() === currentDayDate).slice(0, 5)
  const defaultDays = forecastData?.list?.slice(0, 5)
  const forecast = currentDaysDate?.length ? currentDaysDate : defaultDays

  return !forecastData?.list || isLoading ? null : forecast?.map((hour, i) => {
    const time = formatTime(hour.dt)
    const temp = Math.round(hour.main.temp)
    const unitSymbol = units === 'metric' ? 'C' : 'F'

    return (
      <div key={i} className={clsx(styles.hourly, styles[`div${i + 3}`])}>
        <p>{time}</p>
        <p>
          <b>
            {temp}°{unitSymbol}
          </b>
        </p>
      </div>
    )
  })
}
