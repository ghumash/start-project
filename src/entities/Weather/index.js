import { SearchWeather } from './ui/SearchWeather'
import { WeatherDetails } from './ui/WeatherDetails'
import { HourlyWeatherForecast } from './ui/HourlyWeatherForecast'
import { DailyWeatherForecast } from './ui/DailyWeatherForecast'
import { Weather } from './ui/Weather'

import {
  weatherAPI,
  useSearchCityMutation,
  useGetForecastWeatherMutation,
} from './model/services/weather.api'

import { useWeather } from './model/hooks/useWeather'

export {
  SearchWeather,
  weatherAPI,
  useSearchCityMutation,
  useGetForecastWeatherMutation,
  useWeather,
  WeatherDetails,
  HourlyWeatherForecast,
  DailyWeatherForecast,
  Weather,
}
