import styles from './style.module.css'
import {
  DailyWeatherForecast,
  HourlyWeatherForecast,
  SearchWeather, useWeather,
  WeatherDetails,
} from '@/entities/Weather'

export const Weather = () => {
  const {
    search,
    units,
    currentDay,
    forecastData,
    searchData,
    searchError,
    isSearchError,
    isLoading,
    handleSearchChange,
    onKeyDown,
    toggleUnits,
    formatTime,
    handleClickDay,
    onSubmit
  } = useWeather()

  return (
    <div className={styles.parent}>
      <SearchWeather
        search={search}
        searchError={searchError}
        isSearchError={isSearchError}
        isLoading={isLoading}
        handleSearchChange={handleSearchChange}
        onKeyDown={onKeyDown}
        onSubmit={onSubmit}
      />
      <WeatherDetails
        units={units}
        currentDay={currentDay}
        searchData={searchData}
        isLoading={isLoading}
        toggleUnits={toggleUnits}
        formatTime={formatTime}
      />
      <HourlyWeatherForecast
        units={units}
        currentDay={currentDay}
        forecastData={forecastData}
        formatTime={formatTime}
        isLoading={isLoading}
      />
      <DailyWeatherForecast
        units={units}
        forecastData={forecastData}
        formatTime={formatTime}
        handleClickDay={handleClickDay}
        isLoading={isLoading}
        currentDay={currentDay}
      />
    </div>
  )
}
