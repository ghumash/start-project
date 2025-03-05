import styles from './style.module.css'
import clsx from 'clsx'

export const DailyWeatherForecast = ({ units, forecastData, formatTime, handleClickDay, isLoading }) => {

  const fiveDays = forecastData?.list?.filter(
    (i) => new Date(i.dt_txt)?.getHours() === new Date(forecastData?.list[0]?.dt_txt)?.getHours(),
  )

  return isLoading
    ? null
    : fiveDays?.map((day, i) => {
        const time = formatTime(day.dt)
        const temp = Math.round(day.main.temp)
        const unitSymbol = units === 'metric' ? 'C' : 'F'
        const weekDay = new Date(day.dt_txt).getDay()

        const weekDays = {
          1: 'Monday',
          2: 'Tuesday',
          3: 'Wednesday',
          4: 'Thursday',
          5: 'Friday',
          6: 'Saturday',
          0: 'Sunday',
        }

        return (
          <div key={i} className={clsx(styles.daily, styles[`div${i + 8}`])} onClick={() => handleClickDay(day)}>
            <p>
              {weekDays[weekDay]} {time}
            </p>
            <p>
              <b>
                {temp}°{unitSymbol}
              </b>
            </p>
          </div>
        )
      })
}
