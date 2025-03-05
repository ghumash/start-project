import styles from './style.module.css'
import { Button } from '@/shared/ui'

export const WeatherDetails = ({ units, currentDay, searchData, isLoading, toggleUnits, formatTime }) => {

  if (!searchData || isLoading) return null

  const { main, sys, weather, name, clouds } = currentDay || searchData
  const unitSymbol = units === 'metric' ? 'C' : 'F'
  const temp = Math.round(main.temp)

  return (
    <div className={styles.div2}>
      <div className={styles.weather}>
        <h2>
          {name}, {sys.country}
        </h2>
        <p className={styles.description}>{weather[0].description}</p>

        <div className={styles.details}>
          <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt={weather[0].description} />
          <p className={styles.temp}>
            {temp}°{unitSymbol}
          </p>
        </div>

        <div className={styles.extra}>
          {[
            { label: 'Feels like', value: `${Math.round(main.feels_like)}°${unitSymbol}` },
            { label: 'Humidity', value: `${String(main.humidity)}%` },
            { label: 'Cloudiness', value: `${String(clouds.all)}%` },
            { label: 'Sunrise', value: sys.sunrise && formatTime(sys.sunrise) },
            { label: 'Sunset', value: sys.sunset && formatTime(sys.sunset) },
          ]
            .filter(({ value }) => value)
            .map(({ label, value }) => (
              <p key={label}>
                <b>{label}:</b> {value}
              </p>
            ))}
        </div>

        <Button className={styles.toggle} onClick={toggleUnits}>
          Switch to {unitSymbol === 'C' ? 'Fahrenheit' : 'Celsius'}
        </Button>
      </div>
    </div>
  )
}
