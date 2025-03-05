import { buildSlice } from '@/shared/store'

const initialState = {
  value: 0,
}

export const counterSlice = buildSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    add: (state, { payload }) => {
      state.value += payload
    },
    decrement: (state) => {
      state.value -= 1
    },
  },
})

export const {
  actions: counterActions,
  reducer: counterReducer,
  useActions: useCounterActions,
} = counterSlice
