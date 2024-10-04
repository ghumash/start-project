import { useAppSelector } from '@/shared/hooks'
import { Button } from '@/shared/ui'
import { FC, memo } from 'react'
import { useCounterActions } from '../models/slice/counterSlice'

export const Counter: FC = memo(() => {
  const value = useAppSelector((state) => state.counter.value)
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
    <div className={'p-5'}>
      <div className={'flex items-center justify-center'}>
        <Button className={'w-1/6'} onClick={handleAddFive}>
          add 5
        </Button>
        <Button className={'w-1/6 mx-5'} onClick={handleInc}>
          increment
        </Button>
        <Button className={'w-1/6'} onClick={handleDec}>
          decrement
        </Button>
      </div>
      <div className={'flex justify-center items-center my-5'}>{value}</div>
    </div>
  )
})
