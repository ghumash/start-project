import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { counterReducer } from '@/entities/Counter'
import { postAPI } from '@/entities/Post'

const rootReducer = combineReducers({
  counter: counterReducer,
  [postAPI.reducerPath]: postAPI.reducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postAPI.middleware),
  })
}
