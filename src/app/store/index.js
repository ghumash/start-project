import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { counterReducer } from '@/entities/Counter'
import { postAPI } from '@/entities/Post'
import { weatherAPI } from '@/entities/Weather'

const rootReducer = combineReducers({
  counter: counterReducer,
  [postAPI.reducerPath]: postAPI.reducer,
  [weatherAPI.reducerPath]: weatherAPI.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware, weatherAPI.middleware),
  })
}
