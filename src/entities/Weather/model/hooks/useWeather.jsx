import { useEffect, useState } from 'react'
import { useGetForecastWeatherMutation, useSearchCityMutation } from '@/entities/Weather'

export const useWeather = () => {
  const [search, setSearch] = useState('')
  const [units, setUnits] = useState('metric')
  const [currentDay, setCurrentDay] = useState(null)

  const [getForecast, {
      isError: isForecastError,
      isLoading: isForecastLoading,
      data: forecastData
    }] = useGetForecastWeatherMutation()

  const [searchCity, {
    isError: isSearchError,
    isLoading: isSearchLoading,
    data: searchData,
    error: searchError
  }] = useSearchCityMutation()

  const isLoading = isForecastLoading || isSearchLoading

  useEffect(() => {

    const city = search.trim() || currentDay?.name || 'Vanadzor'
    getForecast({ units, search: city })
    searchCity({ units, search: city })
      .then(({ data }) => {
        setCurrentDay(data)
      })
  }, [units])

  const handleSearchChange = (e) => setSearch(e.target.value)

  const onSubmit = () => {
    if (search.trim()) {
      searchCity({ units, search }).then(({ data }) => {
        setCurrentDay(data)
      })
      getForecast({ units, search })
    }
    setSearch('')
  }

  const onKeyDown = (e) => {
    if (e.key === 'Enter') onSubmit()
  }

  const handleClickDay = (day) => {
    setCurrentDay({
      ...day,
      name: day.name ? day.name : searchData?.name,
      sys: day.sys ? day.sys :{ country: searchData.sys.country },
    })
  }

  const toggleUnits = () => {
    setUnits((prev) => (prev === 'metric' ? 'imperial' : 'metric'))
  }

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('hy-AM', {
      hour: '2-digit',
      minute: '2-digit',
    })
  }


  return {
    search,
    units,
    currentDay,
    forecastData,
    searchData,
    searchError,
    isSearchError,
    isForecastError,
    isLoading,
    handleSearchChange,
    onKeyDown,
    toggleUnits,
    formatTime,
    handleClickDay,
    onSubmit
  }
}
