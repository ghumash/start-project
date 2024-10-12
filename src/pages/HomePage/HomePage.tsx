import { Counter } from '@/entities/Counter'
import { FC } from 'react'

const HomePage: FC = () => {
  return (
    <>
      <Counter />
      <p className={'text-light-primary'}>asdf 1</p>
      <p className={'text-light-primaryInverted'}>asdf 2</p>
      <p className={'text-dark-primary'}>asdf 3</p>
      <p className={'text-dark-primaryInverted'}>asdf 4</p>
    </>
  )
}

export default HomePage
