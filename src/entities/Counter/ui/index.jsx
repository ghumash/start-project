import { Button } from '@/shared/ui'
import { useCounterActions } from '../models/slice/counterSlice'
import { useSelector } from 'react-redux'

export const Counter = () => {
  const value = useSelector((state) => state.counter.value)
  const { decrement, increment, add } = useCounterActions()

  const handleInc = () => {
    increment()
  }

  const handleDec = () => {
    decrement()
  }

  const handleAddFive = () => {
    add(5)
  }

  return (
    <>
      <div>
        <Button onClick={handleAddFive}>add 5</Button>
        <Button onClick={handleInc}>increment</Button>
        <Button onClick={handleDec}>decrement</Button>
      </div>
      <h2>{value}</h2>
    </>
  )
}
