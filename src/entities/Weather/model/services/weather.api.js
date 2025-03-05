import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weatherAPI = createApi({
  reducerPath: 'weatherAPI',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_WEATHER_API_URL }),
  tagTypes: ['Weather'],

  endpoints: (build) => ({
    searchCity: build.mutation({
      query: ({ units, search }) => ({
        url: `/data/2.5/weather`,
        method: 'GET',
        params: {
          appid: import.meta.env.VITE_WEATHER_API_KEY,
          q: search,
          units,
        },
      }),
      providesTags: () => ['Weather'],
    }),

    getForecastWeather: build.mutation({
      query: ({ units, search }) => ({
        url: `/data/2.5/forecast`,
        method: 'GET',
        params: {
          appid: import.meta.env.VITE_WEATHER_API_KEY,
          q: search,
          units,
        },
      }),
      providesTags: () => ['Weather'],
    }),
  }),
})

export const { useSearchCityMutation, useGetForecastWeatherMutation} = weatherAPI
